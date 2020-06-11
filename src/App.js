import React from "react";
import ReactDOM from "react-dom";

import Cat from "../assets/gato.jpg";

const Wanted = () => {
  return React.createElement("div", { class: "poster" }, [
    React.createElement("img", { src: Cat, alt: "Gato" }),
    React.createElement("h2", {}, "Gato Bege"),
    React.createElement(
      "h3",
      {},
      "Possui um colarinho azul e tem um leve machucado nas costas. Atende pelo nome de Lucy."
    ),
    React.createElement("div", { class: "contact" }, [
      React.createElement("p", {}, "14 99862 5506"),
      React.createElement("p", {}, "gmantiqueira@gmail.com"),
    ]),
  ]);
};

const App = () => {
  return React.createElement("div", { class: "container" }, [
    React.createElement(Wanted),
    React.createElement(Wanted),
    React.createElement(Wanted),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
