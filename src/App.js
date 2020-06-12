import React from "react";
import ReactDOM from "react-dom";

import Wanted from "./components/Wanted";

import Cat from "../assets/cat.jpg";
import Dog from "../assets/dog.jpg";
import Parrot from "../assets/bird.jpg";

const App = () => {
  return (
    <div className="container">
      <Wanted
        image={Cat}
        title="Gato bege"
        owner="Gabriel Antiqueira"
        description="Possui um colarinho azul e tem um leve machucado nas costas. Atende pelo nome de Lucy."
        tel="14 99862 5506"
        email="gmantiqueira@gmail.com"
      />
      <Wanted
        image={Dog}
        title="Cachorro sorridente"
        owner="Fulano da Silva"
        description="Nós vivemos numa sociedade em que."
        tel="14 99862 5506"
        email="fulano@gmail.com"
      />
      <Wanted
        image={Parrot}
        title="Papagaio maromba"
        owner="Léo Stronda"
        description="Ama batata doce e frango."
        tel="14 99862 5506"
        email="stronda@gmail.com"
      />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
