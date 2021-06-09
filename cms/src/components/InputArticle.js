import React, { useState } from "react";
import Axios from "axios";
const InputArticle = () => {
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const send = (event) => {
    const data = new FormData();
    data.append("title", title);
    data.append("file", file);
    data.append("description", description);

    Axios.post("http://localhost:5000/dashboard/image", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location = "/";
  };

  return (
    <div>
      <form action="#">
        <div className="flex">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(event) => {
              const { value } = event.target;
              setTitle(value);
            }}
          />
        </div>
        <div className="flex">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            onChange={(event) => {
              const { value } = event.target;
              setDescription(value);
            }}
          />
        </div>
        <div className="flex">
          <label htmlFor="file">File</label>
          <input
            type="file"
            id="file"
            accept=".jpg, .jpeg, .png"
            onChange={(event) => {
              const file = event.target.files[0];
              setFile(file);
            }}
          />
        </div>
      </form>
      <button onClick={send}>Send</button>
    </div>
  );
};

export default InputArticle;
