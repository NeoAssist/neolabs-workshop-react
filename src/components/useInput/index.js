import React, {useState} from 'react';

import './styles.css';

function useInput(label, defaultState) {
  const [state, setState] = useState(defaultState);

  const id = `use-input-${label.replace(" ", "").toLowerCase()}`

  const Input = (props) => (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        {...props}
      />
    </label>
  );

  return [state, Input, setState];
}

export default useInput;
