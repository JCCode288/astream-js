"use client";

import { loginBack } from "@/actions/auth";
import { GoogleLogin } from "@react-oauth/google";
import { MutableRefObject, useEffect, useRef } from "react";

export default function LoginModal() {
  let modalRef: MutableRefObject<HTMLDialogElement | null> = useRef(null);

  async function loginGoogle(response: any) {
    try {
      let { access_token, username } = await loginBack(response.credential);

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("username", username);

      if (modalRef) modalRef.current?.close();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <dialog id="login_modal" className="modal" ref={modalRef}>
      <form
        method="dialog"
        className="modal-box flex w-auto items-center flex-col gap-4"
      >
        <legend className="font-semibold text-lg">
          Login with Google Sign-in
        </legend>
        <GoogleLogin
          onSuccess={loginGoogle}
          onError={() => console.log("error login google")}
          //   useOneTap
        />
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
