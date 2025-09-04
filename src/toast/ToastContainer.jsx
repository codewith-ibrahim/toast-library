import Notification from "./notification/notification";

function ToastContainer({toasts = [], onRemove, updateToast}) {

    const position = toasts?.[0]?.position || "top-right";
    console.log("position", position);

  return (
    <div data-position={position} className="toast-container">
        {toasts.map((toast) => {
            return <Notification updateToast={updateToast} onRemove={onRemove} {...toast} key={toast.id} />
        })}
    </div>
  );
}
export default ToastContainer;