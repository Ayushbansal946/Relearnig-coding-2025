import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [symbol, setsymbol] = useState(false);
  const [password, setpassword] = useState("");
  const genratepassword = useCallback(() => {
    let pas = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) str += "0123456789";
    if (symbol) str += "!@#$%&*_+=-^()[]{}|:;\"'<>,.?/";
    for (let i = 0; i < length; i++) {
      pas += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setpassword(pas);
  }, [length, number, symbol]);
  useEffect(() => {
    genratepassword();
  }, [length, number, symbol, genratepassword]);
  const copypassword = () => {
    window.navigator.clipboard.writeText(password);
  };
  return (
    <>
      <div className="w-screen h-screen bg-gray-700 text-blue-50">
        <div className="w-full max-w-md mx-auto px-4 py-3 bg-purple-900 shadow-md rounded-lg">
          <h1 className="text-center text-white my-3">password genrator</h1>
          <div className="flex overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className=" flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none"
              placeholder="password will be generated here"
              readOnly
            />
            <button
              onClick={copypassword}
              className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-lg "
            >
              copy
            </button>
          </div>
          <div className="flex flex-col text-sm gap-x-2 mb-4">
            <div className="flex items-center gap-x-1 mb-2 py-1 mx-auto">
              <div className="w-fit">
                <input
                  type="range"
                  name=""
                  id=""
                  min={8}
                  max={25}
                  value={length}
                  className="cursor-pointer w-30 h-2 bg-gray-600 rounded-lg appearance-none focus:outline-none"
                  onChange={(e) => setlength(e.target.value)}
                />
                <label htmlFor="lengt of the password">
                  {" "}
                  Length : {length}
                </label>
              </div>
              <input
                type="checkbox"
                defaultChecked={number}
                className=" bg-gray-600"
                onChange={() => setnumber((prev) => !prev)}
              />
              <label htmlFor="number">Numbers: </label>
              <input
                type="checkbox"
                defaultChecked={symbol}
                className=" bg-gray-600"
                onChange={() => setsymbol((prev) => !prev)}
              />
              <label htmlFor="number"> Symbols </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
