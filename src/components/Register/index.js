import registerSvc from 'services/register'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Register () {
  const { handleSubmit, register, formState: { errors } } = useForm()
  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (values) => {
    setIsSubmitting(true)
    return registerSvc(values)
      .then(() => {
        setRegistered(true)
        setIsSubmitting(false)
      })
  }

  if (registered) {
    return (
      <h4>
        The registration was succesfully submitted!
      </h4>
    )
  }
  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input name='username' placeholder='username' {...register('username', { required: true })} />
        {errors.username?.type === 'required' && (
          <small className='form-errors'>
            'This field is required'
          </small>)}
        <input name='password' placeholder='password' {...register('password', { required: true, minLength: 6 })} type='password' />
        {errors.password?.type === 'required' && (
          <small className='form-errors'>
            'This field is required'
          </small>)}
        {errors.password?.type === 'minLength' && (
          <small className='form-errors'>
            'Password must be at least 6 characters'
          </small>)}
        <button className='btn' disabled={isSubmitting}>
          Register
        </button>
      </form>
    </>
  )
}

/*
  <Formik
    initialValues={initialValues}
    validate={validateFields}
    onSubmit={(values, { setFieldError }) => {
      console.log(values)
      return registerSvc(values)
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
*/
