import {useState} from "react";
import { connect } from "react-redux";
import { setMinMaxArrayChart } from "../../store/utils/thunkCreators";

const InputWater = ({setMinMaxArrayChart}) => {
  const [val, setVal] = useState('');
  const [invalid, setInvalid] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const array = val.trim().split(' ');
    setMinMaxArrayChart(array);
  }

  const change = (word) => {
    if (!word.match(/^$|^[\d\s]+$/)) {
      console.log("Invalid input!");
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
    }
  }
}

export default connect(
  null, mapDispatchToProps
)(InputWater);