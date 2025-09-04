import ToastProvider, { useNotification } from "./toast/ToastProvider";
import { useState } from "react";

function App() {
  return (
    <>
      <ToastProvider><MyTest/></ToastProvider>
    </>
  );
}

function MyTest() {
  const addNotification = useNotification();

  function showToast() {
    addNotification({ title: "This is test toast", position: "top-right" });
  }

  return <button onClick={showToast}>Show Toast</button>;
}

export default App;
