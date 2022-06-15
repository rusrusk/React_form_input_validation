import React, {useState} from 'react'



const useForm = (validatedItems) => {
  
const [isValue, setIsValue] = useState('')
const [isTouched, setIsTouched] = useState(false)



const isValueHandler = e => {
  setIsValue(e.target.value)
}

const isTouchHandler = (e) => {
  setIsTouched(true)
}

const resetHandler = () => {
  setIsValue('')
  setIsTouched(false)
}

const validValue = validatedItems(isValue)
const hasError = !isValue && isTouched


return {
  isValue,
  isValueHandler,
  isTouchHandler,
  resetHandler,
  validValue,
  hasError
}
}


export default useForm