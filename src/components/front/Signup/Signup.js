import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

const validationSchema = Yup.object({
  name: Yup.string().when('action', {
    is: 'Sign Up',
    then: Yup.string()
      .required('Name is required'),
  }),
 

  email: Yup.string()
    .email('Enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Signup = () =>
{
  const [action, setAction] = useState('Sign Up');

  const handleSubmit = (values) =>
  {
    alert(`${action} successful!`);
    setAction('Sign Up');
  };

  return (
    <div className="container">
      <div className="heading">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="inputs">
            {action === 'Sign Up' && (
              <div className="input">
                <img src="./image/person.png" alt="" />
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="field"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
            )}

            <div className="input">
              <img src="./image/email.png" alt="" />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="field"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="input">
              <img src="./image/password.png" alt="" />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="field"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            {action === 'Login' && (
              <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
              </div>
            )}

            <div className="submit-container">
              <div
                className={`submit ${action === "Login" ? "gray" : ""}`}
                onClick={() => setAction("Sign Up")}
              >
                Sign Up
              </div>
              <div
                className={`submit ${action === "Sign Up" ? "gray" : ""}`}
                onClick={() => setAction("Login")}
              >
                Login
              </div>
            </div>

            <div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
