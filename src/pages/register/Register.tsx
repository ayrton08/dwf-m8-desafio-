import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import css from "./register.css";
import { RegisterForm } from "../../components/register-comp";
import { useRegister } from "../../hooks/useRegister";

type RegisterForm = {
  fullname: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export function Register() {
  const navigate = useNavigate();
  async function handlerRegister(dataForm: RegisterForm) {
    if (!dataForm.fullname) {
      return alert("The fullname is missing");
    }
    if (!dataForm.email) {
      return alert("The email is missing");
    }
    if (!dataForm.password || !dataForm.passwordRepeat) {
      return alert("The password is missing");
    }
    if (dataForm.password !== dataForm.passwordRepeat) {
      return alert("Passwords do not match");
    } else {
      const res = await useRegister(dataForm);
      res.registrado
        ? navigate("/login", { replace: true })
        : alert("Something went wrong in the registry, please try again");
    }
  }

  return (
    <div className={css.root}>
      <h2 className={css.title}>Register</h2>
      <RegisterForm
        onRegister={(val) => handlerRegister(val)}
        error={undefined}
      ></RegisterForm>
    </div>
  );
}
