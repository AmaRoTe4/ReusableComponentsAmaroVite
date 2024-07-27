import React from "react"
export default function Body({ valores }: { valores: { render_valores: { text: string }[], statusOnClick: boolean, onClick: () => void }[] }) {
    return (
        <tbody className="font-normal">
            {
                valores.length === 0 && <tr className="w-full flex justify-center items-center">
                    <th className="mx-auto text-xl text-custom-celeste">
                        NO HAY REGISTROS
                    </th>
                </tr>
            }
            {
                valores.map((n, i) => {
                    const render_color = i % 2 === 0;
                    const render_valores = n.render_valores
                    const onClickStatus = Boolean(n.statusOnClick)
                    const onClick = () => {
                        if (onClickStatus) n.onClick()
                    }

                    return (
                        <tr key={i} onClick={() => onClick()} className={`border-b ${render_color ? "odd:bg-gray-400  even:bg-gray-300 border-gray-200" : "odd:bg-gray-400  even:bg-gray-300 border-gray-200"} text-black ${onClickStatus ? "hover:cursor-pointer hover:opacity-75" : ""} text-xl`}>
                            {render_valores.map((m: { text: string }, y: number) => {
                                const render_lado = y === 0 || y === 1
                                const render = m.text

                                return (
                                    <th key={y} scope="row" className={`px-6 py-4 ${render_lado ? "text-start" : "text-end"}`}>
                                        {render}
                                    </th>
                                )
                            })}
                        </tr>
                    )
                })
            }
        </tbody>

    )
}