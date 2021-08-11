import { useEffect } from "react";
import { connect } from "react-redux";
import Column from "./Column";
import Row from "./Row";
import "./chart.css";
import { leetcode } from "../../store/utils/thunkCreators";

const Chart = ({maxX, maxY, array, minY, leetcode, maxResult, minResult, total}) => {

  useEffect(() => {
    if (array) {
      leetcode(array);
    }
  }, [array])

  return (
  <div className="chart-container">
    <div className="min-max">
      <Column minY={minY} maxY={maxY}/>
    </div>
    <Row maxX={maxX} maxY={maxY} maxResult={maxResult} minResult={minResult} array={array}/>
  </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    leetcode: (array) => {
      dispatch(leetcode(array))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    array: state.input.array,
    maxX: state.chart.maxX,
    maxY: state.chart.maxY,
    minY: state.chart.minY,
    maxResult: state.input.maxNum,
    minResult: state.input.minNum,
    total: state.input.result,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);