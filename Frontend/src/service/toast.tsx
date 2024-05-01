import { Bounce, toast } from "react-toastify";

function errorNotify(message: string) {
	toast(message, {
		type: "error",
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Bounce,
	});
}

export default errorNotify;
