import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

const RegisterForm = () => {
  const [isError, setIsError] = useState("");

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Dirección de email no válida";
        }
        if (!values.password) {
          errors.password = "Por favor, diligencia los campos marcados";
        }
        setIsError(errors);
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <label className={`${isError.firstName && "style_error"}`}>
            <Field type="text" name="firstName" placeholder="First Name" />
          </label>
          <label className={`${isError.lastName && "style_error"}`}>
            <Field type="text" name="lastName" placeholder="Last Name" />
          </label>
          <label className={`${isError.email && "style_error"}`}>
            <Field type="email" name="email" placeholder="Email" />
          </label>
          <label className={`${isError.password && "style_error"}`}>
            <Field type="password" name="password" placeholder="Password" />
          </label>
          {
            <div className="error_messages">
              {errors.email === "Dirección de email no válida"
                ? errors.email
                : errors.password}
            </div>
          }
          <button
            className="buttom buttom_primary"
            height="42px"
            type="submit"
            disabled={isSubmitting}
          >
            Regístrate
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
