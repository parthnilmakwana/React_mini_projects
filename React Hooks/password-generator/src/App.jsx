import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowchar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState(false)

  const passwordRefrence = useRef(null);
  const randomPasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumber) str += "1234567890";
    if (allowchar) str += "!@#$%^&*{}[].?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
    console.log(pass);
  }, [length, allowNumber, allowchar]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRefrence.current?.select();
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 1000);
  };

  useEffect(() => {
    randomPasswordGenerator();
  }, [randomPasswordGenerator]);

  return (
    <>
      <div className="w-full flex flex-col justify-center h-screen items-center bg-gray-300">
        <h1 className="text-3xl p-4">Password Generator : </h1>

        <div className="flex p-4 ">
          <input
            type="text"
            value={password}
            ref={passwordRefrence}
            readOnly
            className="border p-2 rounded w-80 text-center"
          />

          <button className="px-4 py-2 bg-green-500" onClick={copyPassword}>
            COPY
          </button>
          {copy &&
          <p className="text-green-600 p-2">copied succesfully</p>
          }
        </div>

        <div>
          <input
            type="range"
            min={8}
            max={50}
            value={length}
            
            id="length"
            onChange={(e) => setLenght(Number(e.target.value))}
          />
          <label htmlFor="">length : {length}</label>

          <input
            type="checkbox"
            defaultChecked={allowNumber}
            id="number"
          onChange ={() => setAllowNumber((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>
          <input
            type="checkbox"
            defaultChecked={allowchar}
            id="char"
            onChange={() => setAllowChar((prev) => !prev)}
          />
          <label htmlFor="char">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
