import * as actionTypes from "./actionTypes";

export const saveResult = ( result ) => {
  // Do not put logic here (only async code), this is an action creator! Use the reducer
  //const updatedResult = result * 2
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  }
}

export const storeResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // When async code finishes:
      // axios -> then -> dispatch
      const oldCounter = getState().ctr.counter // to get props from state and use it in async code
      console.log(oldCounter)
      dispatch(saveResult(result))
    }, 2000)
  }
}

export const deleteResult = (resultElementId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: resultElementId
  }
}