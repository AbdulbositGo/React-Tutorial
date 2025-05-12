import { useState } from "react"
import { Ingredients } from "./Ingrediants"
import { GetRecipes } from "./GetRecipes"
import { Recipe } from "./Recipe"


export function Main() {

    const [ingredients, setIngredients] = useState([])
    const [formError, setFormError] = useState(false)
    const [getRecipe, setGetRecipe] = useState(false)


    const makeRecipe = () => {
        setGetRecipe(true)
    }

    function addIngedient(formData) {
        const ingredient = formData.get('ingredient')
        if (ingredient.length > 0) {
            setIngredients([...ingredients, ingredient])
        }
        else {
            setFormError(true)
        }
    }

    return (
        <main className="max-w-xl m-auto mt-16 space-y-10 overflow-hidden">
            <form action={addIngedient} className="flex items-center justify-center gap-4">
                <input type="text" name="ingredient" className={`w-full border ${formError ? 'border-red-300 focus:outline-red-500' : 'border-gray-300'} shadow-inner rounded-md py-1.5 px-2`} placeholder="e.g. oreagano" />
                <button type="submit" className="w-52 bg-black text-white rounded-md text-sm py-2">
                    + Add ingredients
                </button>
            </form>
            {ingredients.length > 0 && <Ingredients ingredients={ingredients} />}
            {ingredients.length > 3 && <GetRecipes makeRecipe={makeRecipe} />}
            {getRecipe && <Recipe />}
        </main>
    )
}