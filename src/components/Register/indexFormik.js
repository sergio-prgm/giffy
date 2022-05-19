import register from 'services/register'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'

const validateFields = (values) => {
  const errors = {}

  if (!values.username) {
    errors.username = 'Username required'
  }

  if (!values.password) {
    errors.password = 'Password required'
  } else if (values.password.length < 8) {
    errors.password = 'Length must be greater than 8'
  }
  return errors
}

const initialValues = { username: '', password: '' }

export default function Register () {
  const [registered, setRegistered] = useState(false)

  if (registered) {
    return (
      <h2>
        The registration was succesfully submitted!
      </h2>
    )
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={(values, { setFieldError }) => {
          console.log(values)
          return register(values)
            .then(() => setRegistered(true))
            .catch(() => {
              setFieldError('username', 'This username is not valid')
            })
        }}
      >
        {
          ({ errors, isSubmitting }) => (
            <Form className='form'>
              <Field name='username' placeholder='username' />
              <ErrorMessage name='username' className='form-errors' component='small' />
              <Field name='password' placeholder='password' type='password' />
              <ErrorMessage name='password' className='form-errors' component='small' />
              <button className='btn' disabled={isSubmitting}>
                Registrarse
              </button>
            </Form>
          )
        }
      </Formik>
    </>
  )
}
