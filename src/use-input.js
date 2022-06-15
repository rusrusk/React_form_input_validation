import React, {useReducer} from 'react'

const initialInputState = {
 value: '',
 isTouched: false
  }


const inputStateReducer = (state, action) => {
  if(action.type === 'INPUT') {
    return {value: action.value, isTouched: state.isTouched}
  } if (action.type === 'BLUR') {
    return {isTouched: true, value: state.value}
  } if (action.type === 'RESET') {
    return {isTouched: false, value: ''}
  }
  return inputStateReducer
}

const useInput = (validateValue) => {
const [inputState, dispatch] =  useReducer(inputStateReducer, initialInputState)

  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const valueChangeHandler = (e) => {
    dispatch({
      type: 'INPUT',
      value: e.target.value
    })
  }

  const valueChangeBlurHandler = (e) => {
    dispatch({
      type: 'BLUR',
     
    })
  }

  const reset = () => {
    dispatch({
      type: 'RESET'
    })
  }

  const valueIsValid = validateValue(inputState.enteredValue)
  const hasError = !enteredValue && inputState.isTouched
  return {
    value: inputState.value,
    enteredValue,
    hasError,
    valueChangeHandler,
    valueChangeBlurHandler,
    valueIsValid,
    reset
  }
}

export default useInput