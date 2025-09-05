import ToastProvider, { useNotification } from "./toast/ToastProvider";
import toastService from "./toast/ToastService";
function App() {
  return (
    <>
    <button onClick={() => {
      toastService.sendToast({ title: "This is From Another world", position: "top-right" });
    }}>Show another world</button>
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
