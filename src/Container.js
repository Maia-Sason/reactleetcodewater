import './App.css';
import InputWater from "./components/InputWater/InputWater";
import { connect } from "react-redux";
import Chart from "./components/Chart/Chart";
import Explain from "./components/Explain/Explain"


const Container = ({total, maxResult, minResult, array, distance}) => {
  return (
    <div className="App">
      <h1>Which two walls can hold the most water?</h1>
      <Chart/>
      <div><p>Enter a valid sequence of numbers separated by spaces</p><InputWater/></div>
      {total && <Explain maxResult={maxResult} minResult={minResult} total={total} distance={distance} array={array}/>}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    array: state.input.array,
    maxResult: state.input.maxNum,
    minResult: state.input.minNum,
    total: state.input.result,
    distance: state.input.distance,
  }
}

export default connect(mapStateToProps)(Container);