import useSearchDebounce from "../../hooks/useSearchDebounce"

export default function SearchDebounce() {
    const valores = [
        {
            name: "Hola mundo"
        },
        {
            name: "Hola Amaro"
        },
        {
            name: "Amaro"
        },
        {
            name: "BananA"
        }
    ]

    const { onChangeSearchText, searchText, valoresRender } = useSearchDebounce({
        keys_search: ["name"],
        valores
    })

    return (
        <div>
            <div>
                <input
                    className="border border-black px-3 py-2"
                    type="search"
                    name=""
                    id=""
                    value={searchText}
                    onChange={(e) => onChangeSearchText(e.target.value)}
                />
            </div>
            <ul>
                {valoresRender.map((n, i) => {
                    return <li key={i}>
                        {n.name}
                    </li>
                })}
            </ul>
        </div>
    )
}