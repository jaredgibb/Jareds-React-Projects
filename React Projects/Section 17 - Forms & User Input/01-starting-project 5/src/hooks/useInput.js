import { useState } from "react";

export function useInput(defaultVal, validationFn) {
  const [val, setVal] = useState(defaultVal);
  const [didEdit, setDidEdit] = useState(false);
  const isValid = validationFn(val);

  function handleInputChange(event) {
    setVal(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }


  return {
    value: val,
    didEdit,
    isValid: didEdit && !isValid,
    handleInputChange,
    handleInputBlur,
  };
}
