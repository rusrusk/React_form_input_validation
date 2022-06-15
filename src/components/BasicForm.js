import React from 'react'
import useForm from '../use-form'

const BasicForm = () => {

  const isName = val => val.trim() !== ''
  const isEmail = val => val.includes('@')

  const {
    isValue: enteredFirstName,
    validValue: validFirstName,
    isValueHandler: firstNameChangeHandler,
    isTouchHandler: firstnameTouchHandler,
    hasError: firstnameHasError,
    resetHandler: firstnameResetHandler
  } = useForm(isName)

  const {
    isValue: enteredLastName,
    validValue: validLastName,
    isValueHandler: lastNameChangeHandler,
    isTouchHandler: lastnameTouchHandler,
    hasError: lastnameHasError,
    resetHandler: lastnameResetHandler
  } = useForm(isName)

  const {
    isValue: enteredEmail,
    validValue: validEmail,
    isValueHandler: emailChangeHandler,
    isTouchHandler: emailTouchHandler,
    hasError: emailHasError,
    resetHandler: emailResetHandler
  } = useForm(isEmail)


  let formIsValid = false

  if(validFirstName && validLastName && validEmail) {
    formIsValid = true
  }

  

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if(!formIsValid) {
      return;
    }

    firstnameResetHandler()
    lastnameResetHandler()
    emailResetHandler()
  }

const firstnameInputClasses = firstnameHasError ? 'form-control disabled' : 'form-control'
const lastnameInputClasses = lastnameHasError ? 'form-control disabled' : 'form-control'

const emailInputClasses = emailHasError ? 'form-control disabled' : 'form-control'


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstnameInputClasses}> 
          <label htmlFor="name">First Name</label>
          <input 
          id='firstname' 
          type="text"
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
          onBlur={firstnameTouchHandler}
          />
          {firstnameHasError && <p className='error-text'>Please enter First Name correctly</p>}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input 
          id='lastname' 
          type="text"
          value={enteredLastName}
          onChange={lastNameChangeHandler}
          onBlur={lastnameTouchHandler}
          />
          {lastnameHasError && <p className='error-text'>Please enter Last Name correctly</p>}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail</label>
          <input 
          id='email' 
          type="text"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailTouchHandler}
          />
          {emailHasError && <p className='error-text'>Please enter E-Mail correctly</p>}
        </div>
        <div className='form-actions'>
          <button >Submit</button>
        </div>
      </div>
    </form>
  )
}

export default BasicForm