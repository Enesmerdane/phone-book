import * as yup from "yup";

const validations = yup.object().shape({
	username: yup
		.string()
		.required("Zorunlu alan."),
	password: yup
		.string()
		.min(5, "Parolanız en az 6 karakter olmalıdır.")
		.required("Zorunlu alan."),
});

export default validations;

