import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import { nameState } from "../../hooks/atoms";
import { useRecoilValue } from "recoil";
import css from "./home.css";

export function Home() {
  return (
    <div>
      Data
      <Link to="/login">
        <button>Ir a Login</button>
      </Link>
    </div>
  );
}
