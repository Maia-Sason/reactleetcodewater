// Actions
const GET_MIN_Y = "GET_MIN_Y";
const GET_MAX_Y = "GET_MAX_Y";
const GET_MAX_X = "GET_MAX_X";

// Action Creators
export const getMinChart = (min) => {
  return {
    type: GET_MIN_Y,
    min,
  }
}

export const getMaxChart = (max) => {
  return {
    type: GET_MAX_Y,
    max,
  }
}

export const getMaxX = (max) => {
  return {
    type: GET_MAX_X,
    max,
  }
}

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_MAX_X:
      return { 
        ...state,
        maxX: action.max
      }
    case GET_MAX_Y:
      return {
        ...state,
        maxY: action.max,
      }
    case GET_MIN_Y:
      return {
        ...state,
        minY: action.min
      }
    default:
      return state;
  }
}

export default reducer;