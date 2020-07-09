import React, {useState} from "react";
import useForm from "../../hooks/useForm"
import placeholder from '../../assets/placeholder.png'

import {Link} from 'react-router-dom'

const Publish = ({history}) => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const [{ values, loading }, handleChange, handleSubmit] = useForm();

  async function handleAvatar(e) {
      // const data = new FormData();

      // data.append('file', e.target.files[0]);

      // const response = await api.post('files', data);

      // const { id, url } = response.data;

      // setFile(id);
      // setPreview(url);
  }

  return (
    <>
      <header className="container publish">
        <h1>Wanted</h1>
        <div>
          <button onClick={() => { history.push("/") }}>Go back</button>
        </div>
      </header>
      <div className="container publish">
        <form>
          <div>
            <label htmlFor="avatar">
                <img
                    src={preview || placeholder}
                    alt="Avatar do usuário"
                />

                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    data-file={file}
                    onChange={handleAvatar}
                />
            </label>
            <label htmlFor="description">
                <textarea value={description} onChange={e => setDescription(e.target.value)}/>
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
        </form>
      </div>
    </>
  );
};

export default Publish;
