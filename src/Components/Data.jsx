import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
const Data = () => {
  const dogURL = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <h1>loading.............</h1>;
  }
  return (
    <div className="data">
      <img src={dogURL} alt="dog" />
    </div>
  );
};

export default Data;

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();
  if (!res.ok) {
    throw new Error({ message: "Failed to fetch post", status: 500 });
  }
  return dog.url;
};
