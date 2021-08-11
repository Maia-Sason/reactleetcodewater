import {useState, useRef} from "react";
import { connect } from "react-redux";
import { setArrayChart, setMinMaxArrayChart } from "../../store/utils/thunkCreators";

const InputWater = ({setMinMaxArrayChart, setArrayChart, leetcode}) => {
  const [val, setVal] = useState('');
  const [arr, setArr] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const arrRef = useRef([]);

  const split = async (string) => {
    const array = string.trim().split(' ').map(Number);
    return array;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const array = await split(val);
    setArrayChart(array);
    setMinMaxArrayChart(array);
  }

  const change = (word) => {
    if (!word.match(/^$|^[\d\s]+$/)) {
      setInvalid(true);
    } else {
      setInvalid(false);
      setVal(word.replace(/\s\s+/, " "));
    }
  }
  
  return (<>
  {invalid && <label>Invalid input!</label>}
  <form onSubmit={e => onSubmit(e)}>
    <input value={val} onChange={e => change(e.target.value)} name="array" aria-label="input-water"/>
    <input type="submit"/>
  </form>
  </>)
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMinMaxArrayChart: (array) => {
      dispatch(setMinMaxArrayChart(array));
    },
    setArrayChart: (array) => {
      dispatch(setArrayChart(array));
    },
  }
}

export default connect(
  null, mapDispatchToProps
)(InputWater);