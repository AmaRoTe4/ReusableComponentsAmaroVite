import React from "react"
export default function Header({ valores }: { valores: { text: string }[] }) {
    return (
        <thead className="text-xs text-black uppercase bg-gray-200">
            <tr>
                {
                    valores.map((n, i) => {
                        const render_lado = i === 0 || i === 1
                        const text = n.text

                        return (
                            <th key={i} scope="col" className={`px-6 py-3 ${render_lado ? "text-start" : "text-end"}`}>
                                {text}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}