import { useState, useRef } from 'react';

export default function Player() {
  const input = useRef(null);
  const [name, setName] = useState(null);

  function handleNameChange() {
    setName(input.current.value);
    input.current.value = '';
  }

  return (
    <section id='player'>
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input
          ref={input}
          type='text'
        />
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
