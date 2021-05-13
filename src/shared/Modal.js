import React, { useEffect } from "react";
import { useGlobal } from "../context/globalContext";

export const Modal = () => {
  const { state, closeModal } = useGlobal();
  useEffect(() => {
    setTimeout(() => closeModal(), 2000);
  });
  return (
    <div className="alert">
      <b>Message</b>
      <hr className="alert-hr" />
      <p>{state.modalContent}</p>
      <i className="far fa-times-circle alert__remove--btn"></i>
    </div>
  );
};
