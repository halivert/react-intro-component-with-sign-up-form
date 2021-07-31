import "./Notification.css";

export default function Notification(props) {
	return (
		<div className="notification">
			<div className="notification__body">{props.children}</div>
		</div>
	);
}
