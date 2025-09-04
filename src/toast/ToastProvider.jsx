import React, { createContext, useCallback, useContext, useState } from "react";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext({});

export const useNotification = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addNotification = useCallback(
    ({ title, description, type, cta, position }) => {
        const obj = {title, description, type, cta, position};
        const id = new Date().getTime();

        setToasts((prev) => {
            return [{...obj, id}, ...prev];
        })
    },
    []
  );

  function onRemove (id) {
    setToasts((prev) => {
        return prev.filter((toast) => toast.id !== id);
    });
  }

  function updateToast (id) {
    setToasts((prev) => {
        return prev.map((toast) => {
            toast.exiting = toast.id === id;
            return toast;
        });
    });
  }

  return <ToastContext.Provider value={addNotification}>{children}
  <ToastContainer updateToast={updateToast} onRemove={onRemove} toasts={toasts} />
  </ToastContext.Provider>;
}

export default ToastProvider;
