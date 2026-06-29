import { useSelector } from "react-redux";

function Navbar() {
  const counter = useSelector((state) => state.counter.value);
  return <div>value : {counter}</div>;
}

export default Navbar;
