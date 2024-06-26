import React, { useRef, useState } from 'react';
import InputField from '../pages/components/InputField';

function Home() {
  const newRef = useRef();
  const [values, setValues] = useState('');

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const settingValue = () => {
    const inputValue = newRef.current.value;
    // Update the state with the input value
    setValues(inputValue);

  };

  return (
    <div>
    <InputField  ref={newRef}  type="text"/>
    <br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={values}></textarea>

    </div>
  );
}

export default Home;
