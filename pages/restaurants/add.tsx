import React, { useState } from "react";
import DefaultLayout from "../Layouts/defaultLayout";

interface IData {
  name: string;
  description: string;
  photo: File | string;
}

const addResto = () => {
  const [data, setData] = useState<IData>({
    name: "",
    description: "",
    photo: "",
  });

  const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, name: event.target.value });
  };
  const updateDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, description: event.target.value });
  };
  const updatePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setData({ ...data, photo: event.target.files[0] });
      console.log(data);
    }
  };
  const onSubmit = async () => {
    // Simple data to be sent before handling image uploading
    let formDataToSend = {
      name: data.name,
      description: data.description,
    };

    fetch("", {
      method: "POST",
      body: JSON.stringify(formDataToSend),
    })
      .then((res: any) => {
        console.log(res.data);
        return res.data.id;
      })
      .then((refId) => {
        const formData = new FormData();
        formData.append("files", data.photo);
        formData.append("refId", refId);
        // ref => content-type to target
        formData.append("ref", "restaraunts");
        // field => field to target in your collection type
        formData.append("field", "images");
        // return axios.post("" + "upload", formData);
        fetch("", {
          method: "POST",
          body: JSON.stringify(formData),
        });
      })
      .then((res: any) => {
        console.log("success", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // axios
  //   .post(BASE_URL, formDataToSend)
  //   .then((res) => {
  //     console.log(res.data);
  //     return res.data.id;
  //   })
  //   .then((refId) => {
  //     const formData = new FormData();
  //     formData.append("files", files[0]);
  //     formData.append("refId", refId);
  //     // ref => content-type to target
  //     formData.append("ref", "restaraunts");
  //     // field => field to target in your collection type
  //     formData.append("field", "images");
  //     return axios.post(BASE_URL + "upload", formData);
  //   })
  //   .then((res) => {
  //     console.log("success", res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <DefaultLayout>
      <div className="container mt-5">
        <h1 className="display-4" data-testid="title-add-restaurant">
          Add new restaurant
        </h1>
        <form>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              style={{ width: "50%" }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Burger ford"
              value={data.name}
              onChange={(event) => updateName(event)}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Description</label>
            <textarea
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="This is a cool place !"
              value={data.description}
              onChange={(event) => updateDescription(event)}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Photo</label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(event) => updatePhoto(event)}
            />
          </div>
          {data.photo !== "" && (
            <img
              src={URL.createObjectURL(data.photo)}
              alt=""
              style={{
                height: "100px",
                display: "block",
                marginBottom: "1rem",
              }}
            />
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default addResto;
