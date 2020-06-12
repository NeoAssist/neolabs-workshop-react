import React from "react";

const Wanted = (props) => {
  return React.createElement("div", { class: "poster" }, [
    React.createElement("img", { src: props.image, alt: props.title }),
    React.createElement("h2", {}, props.title),
    React.createElement("h3", {}, props.description),
    React.createElement("div", { class: "contact" }, [
      React.createElement("p", {}, props.tel),
      React.createElement("p", {}, props.email),
    ]),
  ]);
};

export default Wanted;
