import React, { useEffect } from "react";
import { useGlobal } from "../context/globalContext";

export const Modal = () => {
  const { state, closeModal } = useGlobal();
  useEffect(() => {
    setTimeout(() => closeModal(), 2000);
  });
  return (
    <div class="alert">
      <b>Message</b>
      <hr class="alert-hr" />
      <p>{state.modalContent}</p>
      <i class="far fa-times-circle alert__remove--btn"></i>
    </div>
  );
};
