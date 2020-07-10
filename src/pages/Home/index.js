import React, { useCallback, useState, useEffect } from "react";

import Wanted from "../../components/Wanted";
import useInput from "../../components/useInput";

import api from "../../services/api";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [search, CustomInput, setSearch] = useInput("Search", "");
  const [posters, setPosters] = useState([]);

  const getPosters = useCallback(async () => {
    try {
      const { data } = await api.get(
        `api/v1/poster/${search ? `title?query=${search}` : ""}`
      );

      setPosters(data.posters);
    } catch (err) {
      console.log("Internal Server Error");
    }
  }, [search]);

  useEffect(() => {
    getPosters();
  }, [search]);

  return (
    <>
      <header className="container">
        <h1>Wanted</h1>
        <div>
          <h3>Are you looking for something you lost? Post here!</h3>
          <button onClick={() => history.push("/publish")}>Publish</button>
        </div>
      </header>
      <section className="search">{CustomInput}</section>
      <div className="container">
        {posters.map(
          ({
            poster: {
              id,
              image_name,
              title,
              name,
              description,
              telephony,
              email,
            },
          }) => (
            <Wanted
              key={id}
              image={`http://localhost:8000/static/${image_name}`}
              title={title}
              owner={name}
              description={description}
              tel={telephony}
              email={email}
            />
          )
        )}
      </div>
    </>
  );
};

export default Home;
