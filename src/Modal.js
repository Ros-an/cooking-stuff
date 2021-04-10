import React, { useEffect } from "react";
import { useGlobal } from "./globalContext";

export const Modal = () => {
  const { state, closeModal } = useGlobal();
  useEffect(() => {
    setTimeout(() => closeModal(), 2000);
  });
  return (
    <div className="modal">
      <p>{state.modalContent}</p>
    </div>
  );
};
