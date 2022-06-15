import Cookies from "js-cookie";
import { useState } from "react";
import { handleError } from "../utils";

const INITIAL_STATE = {
  recipe_name: "",
  image: null,
  recipe_type: "",
  prep_time: "",
  cook_time: "",
  cook_temp: "",
  yield_name: "",
  yield_quantity: "",
  notes: "",
  directions: "",
  measure_amount: "",
  measure_type: "",
  ingredient: "",
  phase: "",
};

function RecipeForm(props) {
  const [state, setState] = useState({ ...props });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    const data = { ...state, phase: e.target.value };
    let url = "/api/v1/user/recipe/";
    let method = "POST";

    if (data.id) {
      url = url + `${data.id}/`;
      method = "PUT";
      delete data.id;
    }

    const options = {
      method,
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
        "Content-Type": "application/json",
        Authorization: Cookies.get("Authorization"),
      },
      body: JSON.stringify(data),
    };
  };
  return (
    <div>
      <div className=" container mx-auto flex justify-center items-center">
        <div className="">
          <form>
            <div className="mb-4">
              <label
                htmlFor="recipe_name"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                Recipe Name
              </label>
              <input
                type="text"
                id="recipe_name"
                name="recipe_name"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.recipe_name}
              />
            </div>

            <select
              id="recipe_type"
              onChange={(e) =>
                setState((prevState) => ({
                  ...prevState,
                  category: e.target.value,
                }))
              }
            >
              <option>Recipe Type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
            </select>

            <div className="mb-4">
              <label
                htmlFor="prep_time"
                className="block mb-2 text-gray-900 dark:text-gray-300"
              >
                Prep Time
              </label>
              <input
                type="text"
                id="prep_time"
                name="prep_time"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.prep_time}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cook_time"
                className="block mb-2 text-gray-900 dark:text-gray-300"
              >
                Cook Time
              </label>
              <input
                type="text"
                id="cook_time"
                name="cook_time"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.cook_time}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="cook_temp"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                Cook Temp
              </label>
              <input
                type="text"
                id="cook_temp"
                name="cook_temp"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.cook_temp}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="yield_name"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                Yield_name
              </label>
              <input
                type="text"
                id="yield_name"
                name="yield_name"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.yield_name}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="yield_quantity"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                Yield Quantity
              </label>
              <input
                type="text"
                id="yield_quantity"
                name="yield_quantity"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.yield_quantity}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="notes"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                Notes
              </label>
              <input
                type="textarea"
                rows={4}
                id="notes"
                name="notes"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.notes}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="directions"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                Directions
              </label>
              <input
                type="textarea"
                rows={4}
                id="directions"
                name="directions"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.directions}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="measure_amount"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                Measure Amount
              </label>
              <input
                type="text"
                id="measure_amount"
                name="measure_amount"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.measure_amount}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="measure_type"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                Measure Type
              </label>
              <input
                type="text"
                id="measure_type"
                name="measure_type"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.measure_type}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="ingredient"
                className="block mb-2  text-gray-900 dark:text-gray-300"
              >
                ingredient
              </label>
              <input
                type="text"
                id="ingredient"
                name="ingredient"
                className="shadow-sm bg-gray-50 border border-dark text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={handleInput}
                value={state.ingredient}
              />
            </div>

            <button
              type="button"
              onClick={handleSave}
              value="DRAFT"
              className="text-black bg-dark-green hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
            >
              Save
            </button>

            <button
              type="button"
              value="SUBMITTED"
              onClick={handleSave}
              className="text-black bg-dark-green hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RecipeForm;
