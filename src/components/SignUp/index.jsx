import React from 'react'
//Formik
import { Formik, Form, Field, ErrorMessage } from 'formik'
//Toaster
import toast, { Toaster } from 'react-hot-toast'
//useLocaleStorage Custom Hook
import { useLocaleStorage } from '../../hooks/useLocaleStorage'
//Validation SignUpSchemd
import { signupSchema } from '../../schemas/signupSchema'
import './index.scss'

const SignUp = () => {
  const [localeData, handleData] = useLocaleStorage('form')

  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleSubmit = (values, { resetForm }) => {
    handleData(values)
    toast.success('Data uğurla göndərildi!')
    resetForm()
  }

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValue}
        validationSchema={signupSchema}>
        {({ isValid, dirty }) => (
          <Form>
            <div className='form-title'>
              <h3>Sign Up</h3>
            </div>
            <div className='input-box'>
              <label htmlFor='firstName'>First Name</label>
              <Field
                type='text'
                id='firstName'
                name='firstName'
                placeholder='Enter First Name...'
                className='input-field'
              />
              <ErrorMessage
                name='firstName'
                component='span'
                className='error'
              />
            </div>
            <div className='input-box'>
              <label htmlFor='lastName'>Last Name</label>
              <Field
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Enter Last Name...'
                className='input-field'
              />
              <ErrorMessage
                name='lastName'
                component='span'
                className='error'
              />
            </div>
            <div className='input-box'>
              <label htmlFor='email'>Email</label>
              <Field
                type='email'
                id='email'
                name='email'
                placeholder='Enter Email...'
                className='input-field'
              />
              <ErrorMessage name='email' component='span' className='error' />
            </div>
            <div className='input-box'>
              <label htmlFor='password'>Password</label>
              <Field
                type='password'
                id='password'
                name='password'
                placeholder='Enter Password...'
                className='input-field'
              />
              <ErrorMessage
                name='password'
                component='span'
                className='error'
              />
            </div>
            <div className='input-box'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <Field
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Enter Confirm Password...'
                className='input-field'
              />
              <ErrorMessage
                name='confirmPassword'
                component='span'
                className='error'
              />
            </div>
            <div className='bottom-form'>
              <button type='submit' disabled={!isValid || !dirty}>
                Submit
              </button>
              <Toaster />
              <div className='signin'>
                Already registered <a href='#'> sign in?</a>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SignUp
