import React, { useState } from "react";

function InputComponent({ label, state, setState }) {
  const id = `use-input-${label.replace(" ", "").toLowerCase()}`;

  return (
    <label className={id} htmlFor={id}>
      <input
        type="text"
        placeholder={label}
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </label>
  );
}

export default function useInput(label, defaultState) {
  const [state, setState] = useState(defaultState);

  return [
    state,
    <InputComponent label={label} state={state} setState={setState} />,
    setState,
  ];
}
