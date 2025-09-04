import "./notification.css";
import Success from "../../assets/success.png";
import Alert from "../../assets/alert.png";
import Info from "../../assets/info.png";

const notificationTypes = {
  info: Info,
  success: Success,
  danger: Alert,
};

const notification = ({
  id = "",
  title = "",
  description = "",
  onRemove,
  cta = "",
  type = "success",
  updateToast = () => {},
  exiting,
}) => {
  function handleRemove() {
    updateToast(id);
  }

  let className = "toast";
  if (exiting){
    className += "exiting-toast";
  }

  return (
    <div data-type={type} className={className}>
      {!!onRemove && (
        <button onClick={handleRemove} className="toast-close">
          &times;
        </button>
      )}
      <div className="toast-content">
        <div className="toast-info">
          <img src={notificationTypes[type]} height={"24px"} width={"24px"} />
          <div className="toast-title-desc">
            <span>{title}</span>
            {!!description && <span>{description}</span>}
          </div>
          {!!cta && <div className="toast-cta">{cta}</div>}
        </div>
      </div>
      <div className="toast-progress"></div>
    </div>
  );
};

export default notification;
