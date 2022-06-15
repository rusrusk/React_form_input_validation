import React, {useState, useEffect} from 'react'
import useInput from '../use-input'


const SimpleInput = () => {

const 
{
  valueIsValid: enteredNameIsValid, 
  enteredValue: enteredName, 
  hasError: nameInputHasError, 
  valueChangeHandler: nameChangeHandler, 
  valueChangeBlurHandler: nameChangeBlurHandler,
  reset: nameReset
} = useInput(value => value.trim() !== '')

const 
{
  valueIsValid: enteredEmailIsValid, 
  enteredValue: enteredEmail, 
  hasError: emailInputHasError, 
  valueChangeHandler: emailChangeHandler, 
  valueChangeBlurHandler: emailChangeBlurHandler,
  reset: emailReset
} = useInput(value => value.includes('@'))



const [formIsValid, setFormIsValid] = useState(false)




useEffect(() => {
  if(enteredNameIsValid && enteredEmailValid) {
    setFormIsValid(true)
  } else {
    setFormIsValid(false)
  }
}, [enteredNameIsValid, enteredEmailIsValid])







const formSubmissionHandler = (e) => {
  e.preventDefault()

  if(!enteredNameValid) {
    return
  }

console.log(enteredName)

nameReset()
emailReset()

setEnteredEmail('')
setEnteredEmailTouched(false)
}

const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

const emailInputClasses = emailInputHasError ?  'form-control invalid' : 'form-control'

  return (
   <form onSubmit={formSubmissionHandler}>
     <div className={nameInputClasses}>
       <label htmlFor="name">Your name</label>
       <input 
       id='name' 
       type="text"
       onChange={nameChangeHandler}
       onBlur={nameChangeBlurHandler}
       value={enteredName}
       />
       {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
     </div>
     <div className={emailInputClasses}>
       <label htmlFor="email">Your E-Mail</label>
       <input 
       id='email' 
       type="email"
       onChange={emailChangeHandler}
       onBlur={emailChangeBlurHandler}
       />
       {emailInputHasError && <p className='error-text'>Please enter a valid email</p>}
       </div>
     <div className='form-actions'>
       <button disabled={!formIsValid}>Submit</button>
     </div>
   </form>
  )
}

export default SimpleInput