import {setArray, setMin, setMax, setResult, setDistance} from '../inputData';
import {getMinChart, getMaxChart, getMaxX} from '../chartData';

export const setArrayChart = (array) => (dispatch) => {
  dispatch(setArray(array));
}

export const setMinMaxArrayChart = (array) => (dispatch) => {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;

  array.forEach((i) => {
    max = Math.max(max, i);
    min = Math.min(min, i);
  });
  dispatch(getMinChart(min));
  dispatch(getMaxChart(max));
  dispatch(getMaxX(array.length - 1));
}

export const leetcode = (height) => (dispatch) => {
  let max = Number.MIN_SAFE_INTEGER;
  let hi = height.length - 1;
  let lo = 0;
  let minNum = -1;
  let maxNum = -1;
  let distance = 0;
  
  while (lo < hi) {
    let min = Math.min(height[lo], height[hi]);
    if (max < min * (hi - lo)) {
      max = min * (hi - lo);
      minNum = lo;
      maxNum = hi;
      distance = hi - lo;
    }
    if (height[lo] > height[hi]) {
      hi--;
    } else {
      lo++;
    }
  }
  if (height[minNum] > height[maxNum]) {
    let temp = minNum
    minNum = maxNum;
    maxNum = temp;
  }
  dispatch(setMin(minNum));
  dispatch(setMax(maxNum));
  dispatch(setDistance(distance));
  dispatch(setResult(max));
}