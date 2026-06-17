import { useState } from "react";

function useLocalName(key, initialValue) {
  const [value, setvalue] = useState(() => {
    let item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  function setStoredValue(value) {
    setvalue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [value, setStoredValue];
}
export default useLocalName;
