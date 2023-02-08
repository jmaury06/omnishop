import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import hideEye from "./../../images/hidden.png";
import { useGlobalContext } from "../../context";
import { login } from "../../API/users";
import { setUser } from "../../services/authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setShowLoading, getBackgroundCase } = useGlobalContext();

  const handleSubmit = (values) => {
    login(values)
      .then((token) => {
        setUser(token);
        setShowLoading(true);
        getBackgroundCase("bg_loading");
        navigate("/product");
      })
      .catch(console.log("usuario no encontrado"));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Por favor, diligencia los campos marcados";
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
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <label className={`${isError.email && "style_error"}`}>
            <Field type="email" name="email" placeholder="Email" />
          </label>
          <label
            className={`${isError.password && "style_error"} wrap_password`}
          >
            <Field
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="Password"
            />
            <div onClick={() => setShowPassword(!showPassword)}>
              <img
                src={hideEye}
                alt="see your password"
                className="showPassword"
              />
            </div>
          </label>
          {
            <div className="error_messages">
              {errors.email === "Dirección de email no válida"
                ? errors.email
                : errors.password}
            </div>
          }
          <label className={`${isError && "style_error"}`}>
            <Field type="checkbox" className="checkbox" name="subscribe" />
            <label class="checkbox-label"></label>
            Suscribete al newsletter
          </label>

          <button
            className="buttom buttom_primary"
            height="42px"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
