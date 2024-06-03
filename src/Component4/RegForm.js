import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const formValues = {
    firstName: '',
     lastName: '', 
     email: '', 
     phone: ''
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
});

const MyForm = () => {
    const [regDetails ,setRegDetails] =useState([])

    const handelSubmit =(values, { setSubmitting,resetForm }) => {
        setSubmitting(false)
    setRegDetails([...regDetails ,values])
    resetForm();
    
    }   

    console.log(regDetails)
    return(
  <div style={{padding:"30px"}}>
    <h1>My Form</h1>
    <Formik 
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={handelSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
            <div className='formContainer'>
          <label>
            First Name:
            <Field  className="input-field"  type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </label>

          <label>
            Last Name:
            <Field className="input-field"  type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </label>

          <label>
            Email:
            <Field className="input-field" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </label>

          <label>
            Phone:
            <Field className="input-field" type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </label>

          <button className='form-button' type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)};

export default MyForm;