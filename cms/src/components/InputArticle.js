import React, { Fragment, useState } from "react";

const InputArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { title, description, image };
      //need to find a way to use all
      //const descriptionText = { description };
      //const titleText = { title };

      const response = await fetch("http://localhost:5000/dashboard/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/dashboard";
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-5">Input Article</h1>
      <form className="d-flex form " onSubmit={onSubmitForm}>
        <input
          className="form-control form-input "
          type="text"
          placeholder="add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="add description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="form-control ml-3"
          type="text"
          placeholder="add image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputArticle;
