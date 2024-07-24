import { ChangeEvent } from "react"
import { PropsInputText } from "../../types_use"

export const InputText = ({ key_value, title, error, status_error = false, onChange, value }: PropsInputText) => {
    const localChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange({ key: key_value, value })
    }

    return (
        <span className="flex flex-col justify-start items-center w-full text-black">
            <div className="w-full flex justify-start items-start">
                <label htmlFor={key_value} className="font-bold">{title}</label>
            </div>
            <div className="w-full bg-white text-black">
                <input
                    onChange={localChange}
                    value={value}
                    type="text"
                    name={key_value}
                    id={key_value}
                    className="w-full text-start px-3 py-2 border border-black"
                />
            </div>
            <div className="w-full">
                {status_error && <p className="w-full text-start text-red-600">{error}</p>}
            </div>
        </span>
    )
}