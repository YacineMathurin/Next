/**
 * As per this, it will first upload
 * the file to media gallery and then look for a collection called restaraunt
 * then update the data in the restaraunt_logo column/field of restaraunt collection.
 */
const [files, setFiles] = useState();

async function onSubmit(data) {
  setSubmitting(true);
  setError(null);

  // Simple data to be sent before handling image uploading
  let formDataToSend = {
    name: data.name,
    description: data.description,
  };

  axios
    .post(BASE_URL, formDataToSend)
    .then((res) => {
      console.log(res.data);
      return res.data.id;
    })
    .then((refId) => {
      const formData = new FormData();
      formData.append("files", files[0]);
      formData.append("refId", refId);
      // ref => content-type to target
      formData.append("ref", "restaraunts");
      // field => field to target in your collection type
      formData.append("field", "images");
      return axios.post(BASE_URL + "upload", formData);
    })
    .then((res) => {
      console.log("success", res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

return (
  <Form>
    <Form.Control
      type="file"
      {...register("image")}
      name="image"
      onChange={(e) => setFiles(e.target.files)}
    />
    </Form>
);
