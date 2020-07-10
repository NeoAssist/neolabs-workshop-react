import React, { useRef, useState } from "react";
import useForm from "../../hooks/useForm";
import placeholder from "../../assets/placeholder.png";

import api from "../../services/api";

import { useHistory } from "react-router-dom";

const Publish = () => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const avatar = useRef();

  const history = useHistory();

  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  async function handleAvatar(e) {
    const data = new FormData();
    data.append("file", e.target.files[0]);

    await api.post("api/v1/poster/upload", data);

    setFile(e.target.files[0].name);
    setPreview(`http://localhost:8000/static/${e.target.files[0].name}`);
  }

  async function createPoster() {
    let data = { ...values, description, image_name: file };
    await api.post("api/v1/poster", data);
    history.push("/");
  }

  return (
    <>
      <header className="container publish">
        <h1>Wanted</h1>
        <div>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Go back
          </button>
        </div>
      </header>
      <div className="container publish">
        <form onSubmit={() => handleSubmit(createPoster)}>
          <div>
            <label htmlFor="avatar">
              <img src={preview || placeholder} alt="Avatar do usuário" />

              <input
                ref={avatar}
                type="file"
                id="avatar"
                accept="image/*"
                data-file={file}
                onChange={handleAvatar}
              />
            </label>
            <label htmlFor="description">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>

          <div>
            <label className="title" htmlFor="title">
              <input
                onChange={handleChange}
                type="text"
                name="title"
                id="title"
                placeholder="Poster title"
              />
            </label>
            <label className="email" htmlFor="email">
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </label>
            <label className="telephony" htmlFor="telephony">
              <input
                onChange={handleChange}
                type="text"
                name="telephony"
                id="telephony"
                placeholder="Telephony"
              />
            </label>
            <label className="name" htmlFor="name">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                placeholder="Owner"
              />
            </label>
          </div>
          <div className="submit">
            <button type="submit">
              {loading ? "Processing..." : "Publish"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Publish;
