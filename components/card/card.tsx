import { useRouter } from "next/router";
import React from "react";
import { ICardProps } from "../../interfaces/components/card";
import styles from "./card.module.css";

const Card: React.FC<ICardProps> = ({ name, phone, email, image, id }) => {
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/restaurants/${id}`)}
    >
      <div className={styles["card-header"]}>
        <img
          className={styles["card-img"]}
          src={`${URL}${image.url}`}
          alt={image.alt}
        />
      </div>
      <div>
        <h4 className="mt-2">{name}</h4>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
