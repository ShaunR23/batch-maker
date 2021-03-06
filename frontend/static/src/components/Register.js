import Cookies from "js-cookie";
import { useState } from "react";

function Register(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleError = (err) => {
    console.log(err);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.password1 !== state.password2) {
      alert("Passwords do not match!!");
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(state),
    };

    const response = await fetch("/rest-auth/registration/", options).catch(
      handleError
    );

    if (!response.ok) {
      throw new Error("Network response not ok!");
    } else {
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`);
      props.setAuth(true);
      setState({
        username: "",
        email: "",
        password1: "",
        password2: "",
      });
    }
  };

  return (
    <div className="bg-gray-lighter h-screen font-sans">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="">
          <h1 className="font-hairline text-dark-green mb-6 text-center">
            Login to Press Start Trivia
          </h1>
          <form
            onSubmit={handleSubmit}
            className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className=" text-gray-darker block mb-2">
                Choose a Username
              </label>
              <input
                className="inputField"
                type="text"
                name="username"
                id="username"
                onChange={handleInput}
                required
                value={state.username}
                placeholder="Your Username"
                className="border block appearance-none w-full bg-white border border-gray hover:border-gray px-2 py-2 rounded shadow"
              />
            </div>
            <div className="mb-4">
              <label className=" text-gray-darker block mb-2">Email</label>
              <input
                className="inputField"
                type="email"
                name="email"
                id="email"
                onChange={handleInput}
                required
                value={state.email}
                placeholder="Your Email"
                className="block appearance-none w-full bg-white border border-gray-light hover:border-gray px-2 py-2 rounded shadow"
              />
            </div>

            <div className="mb-4">
              <label className=" text-gray-darker block mb-2">
                Choose your Password
              </label>
              <input
                className="inputField"
                type="password"
                name="password1"
                id="password1"
                onChange={handleInput}
                required
                value={state.password1}
                placeholder="Enter a Password"
                className="block appearance-none w-full bg-white border border-gray-light hover:border-gray px-2 py-2 rounded shadow"
              />
            </div>

            <div className="mb-4">
              <label className=" text-gray-darker block mb-2">
                Type Password Again
              </label>
              <input
                className="inputField"
                type="password"
                name="password2"
                id="password2"
                onChange={handleInput}
                required
                value={state.password2}
                placeholder="Confirm Password"
                className="block appearance-none w-full bg-white border border-gray-light hover:border-gray px-2 py-2 rounded shadow"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-reg-green  text-white border py-2 px-4 rounded"
              >
                Create Account
              </button>

              <a
                className="no-underline m-2  align-baseline text-reg-green text-sm  hover:text-blue-dark"
                href="#"
              >
                Already Registered? Login Here!!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
