

export function Ingredients({ ingredientsListItems }) {

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Ingredients on hand</h1>
            <ul className="list-disc ms-6 space-y-5 text-lg text-gray-600">
                {ingredientsListItems}
            </ul>
        </div>
    )
}