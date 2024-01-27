import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className = "" }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }


    //we use a cleanup function to close the dialog when the component is unmounted
    return () => {
      modal.close();
    };
  }, [open]);




  return createPortal(
    <dialog className={"modal " + className} ref={dialogRef} onClose={onClose} >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
