

export function GetRecipies({ ingredientsListItems }) {

    return (
        <footer className="flex items-center justify-between bg-gray-200 rounded-lg p-8">
            <div>
                <h1 className="text-xl font-semibold">Ready for a recipe?</h1>
                <span className="text-sm text-gray-500">Generate a recipe from your list of ingredients</span>
            </div>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">Get a recipe</button>
        </footer>
    )
}