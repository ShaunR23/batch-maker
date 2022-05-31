import { useState } from "react";
import Cookies from "js-cookie";

const INITAL_STATE = {
    username: "",
    password: "",
};
function Login(handleError){
    const [state, setState] = useState(INITAL_STATE)

    const handleInput = (e) => {
        const {name, value} =  e.target;

        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSFRToken": Cookies.get("csfrtoken"),
            },
            body: JSON.stringify(state),
        };

        const response = await fetch("/rest-auth/login", options.catch(handleError));

        if(!response.ok) {
            throw new Error("Network response not ok")
        }

        const data = await response.json();
        Cookies.set("Authorization", `Token ${data.key}`);
        setAuth(true);
        setAdmin(data.is_superuser);
        setState(INITAL_STATE);
    }
}

export default Login