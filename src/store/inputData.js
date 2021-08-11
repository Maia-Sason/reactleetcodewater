// Actions
const SET_ARRAY = "SET_ARRAY";
const SET_MIN = "SET_MIN";
const SET_MAX = "SET_MAX";
const SET_RESULT = "SET_RESULT";

// Action Creators
export const setArray = (array) => {
  return {
    type: SET_ARRAY,
    array,
  }
}

export const setMin = (min) => {
  return {
    type: SET_MIN,
    min,
  }
}

export const setMax = (max) => {
  return {
    type: SET_MAX,
    max,
  }
}


export const setResult = (res) => {
  return {
    type: SET_RESULT,
    res,
  }
}

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_ARRAY:
      return {
        ...state,
        array: action.array
      }
    case SET_MIN:
      return {
        ...state,
        minNum: action.min
      }
    case SET_MAX:
      return {
        ...state,
        maxNum: action.max
      }
    case SET_RESULT:
      return {
        ...state,
        result: action.res
      }
    default:
      return state;
  }
};

export default reducer;