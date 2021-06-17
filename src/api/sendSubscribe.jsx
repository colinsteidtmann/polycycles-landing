import axios from "axios";

export const sendSubscribe = async(props) => {
	const {email} = props;
	console.log("email", email)
	try {
		const response = await axios({
			method: "post",
			url: process.env.REACT_APP_API_URL + "sendSubscribe",
			data: {
				email: email			
			},
		});
		return response;
	} catch (err) {
		console.log(err);
		return err;
	}
}

export default sendSubscribe;