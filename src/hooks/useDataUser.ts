import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { atom, selector } from "recoil";

export const loginState = atom({
  key: "loginState",
  default: false,
});

export async function useDataUser(token: string) {
  // const token =
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZnVsbG5hbWUiOiJheXJ0b24iLCJlbWFpbCI6ImF5cnRvbmp1YXJlejkwQGdtYWlsLmNvbSIsInBpY3R1cmVVUkwiOm51bGwsImxhdCI6bnVsbCwibG5nIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTI4VDE4OjI5OjAxLjA1OVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTI4VDE4OjI5OjAxLjA1OVoiLCJpYXQiOjE2NTcwNDc5NTF9.tOmqJVN7dtdbNwx0AvWJOxHHEqa2m6znWQ9VADbfaRA";

  const res = await fetch(
    `https://dwf-m7-postgre.herokuapp.com/api/v1/auth/my-data`,
    {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );
  const dataForm = await res.json();
  return dataForm;
}
