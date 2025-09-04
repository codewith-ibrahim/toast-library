import ToastProvider, { useNotification } from "./toast/ToastProvider";

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
    addNotification({ title: "This is test toast which type success", position: "top-right" });
  }

  return <div className="btn-wrapper"><button onClick={showToast}>Show Toast</button></div>;
}

export default App;
