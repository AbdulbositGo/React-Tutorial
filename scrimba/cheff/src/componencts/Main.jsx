import { useState } from "react"


export function Main() {

    const [ingredients, setIngredients] = useState([])
    const [formError, setFormError] = useState(false)
    const ingredientsListItems = ingredients.map(
        ingredient =>
        (
            <li key={ingredient}>{ingredient}</li>
        )
    )

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
            {ingredients.length > 0 && (
                <div className="space-y-6 transition duration-150 ease-in-out">
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold">Ingredients on hand</h1>
                        <ul className="list-disc ms-6 space-y-5 text-lg text-gray-600">
                            {ingredientsListItems}
                        </ul>
                    </div>
                    <footer className="flex items-center justify-between bg-gray-200 rounded-lg p-8">
                        <div>
                            <h1 className="text-xl font-semibold">Ready for a recipe?</h1>
                            <span className="text-sm text-gray-500">Generate a recipe from your list of ingredients</span>
                        </div>
                        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">Get a recipe</button>
                    </footer>
                </div>
            )}
        </main>
    )
}