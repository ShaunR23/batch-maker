import { useState } from "react";
import Cookies from "js-cookie";
import { useOutletContext } from "react-router-dom";

const INITAL_STATE = {
    username: "",
    password: "",
};
function Login(handleError){
    const { setAuth, setAdmin } = useOutletContext();
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

        const response = await fetch("/rest-auth/login", options).catch(handleError);

        if(!response.ok) {
            throw new Error("Network response not ok")
        }

        const data = await response.json();
        Cookies.set("Authorization", `Token ${data.key}`);
        setAuth(true);
        setAdmin(data.is_superuser);
        setState(INITAL_STATE);
    }

    return (
        <div className="bg-gray-lighter h-screen font-sans">
          <div className="container mx-auto h-full flex justify-center items-center">
            <div className="">
              <h1 className="font-hairline mb-6 text-center text-dark-green">
                Login
              </h1>
              <form
                onSubmit={handleSubmit}
                className="border-dark-green p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="font-bold text-dark-green block mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="inputField"
                    name="username"
                    id="username"
                    placeholder="username"
                    onChange={handleInput}
                    required
                    value={state.username}
                    className="block appearance-none w-full bg-white border border-gray-light hover:border-gray px-2 py-2 rounded shadow"
                  />
                </div>
    
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="font-bold text-dark-green block mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="inputField"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={handleInput}
                    required
                    value={state.password}
                    className="block appearance-none w-full bg-white border border-gray-light hover:border-gray px-2 py-2 rounded shadow"
                  />
                </div>
    
                <div className="flex justify-center">
                  <button
                    id="login-submit"
                    type="submit"
                    className="text-dark-green font-bold py-2 px-4 mr-3 rounded border border-dark-green"
                  >
                    Login
                  </button>
    
                  
                  {/* <a
                    className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
                    href="#"
                  >
                    Forgot Password?
                  </a> */}
                </div>
              </form>
              <div className="text-center">
                <p className="text-gray-dark">
                  Don't have an account? &nbsp;
                  <a href="#" className="underline text-white font-bold">
                    Create an Account
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Login