import {setArray, setMin, setMax, setResult} from '../inputData';
import {getMinChart, getMaxChart, getMaxX} from '../chartData';

export const setMinMaxArrayChart = (array) => (dispatch) => {
  
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;

  array.forEach((i) => {
    max = Math.max(max, i);
    min = Math.min(min, i);
  });
  dispatch(setArray(array));
  dispatch(getMinChart(min));
  dispatch(getMaxChart(max));
  dispatch(getMaxX(array.length - 1));
}

export const leetcode = (heightArr) => (dispatch) => {
  let max = Number.MIN_SAFE_INTEGER;
  let indexHi = 0;
  let indexLo = 0;
  let hi = heightArr.length - 1;
  let lo = 0;

  while (lo < hi) {
    let min = Math.min(heightArr[lo], heightArr[hi]);
    // max = Math.max(max, (hi - lo) * min);
    if (max < (hi - lo) * min) {
      max = (hi - lo) * min;
      indexHi = hi;
      indexLo = lo;
    }
    if (heightArr[lo] > heightArr[hi]) {
      hi--;
    } else {
      lo++;
    }
  }
  dispatch(setMin(heightArr[indexLo]));
  dispatch(setMax(heightArr[indexHi]));
  dispatch(setResult(max));
}