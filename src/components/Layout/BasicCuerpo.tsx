import React from "react"
import useLoading from "../../hooks/useLoading"
import LoadingScreen from "./LoadingScreen"

interface props {
    children: JSX.Element
}

export default function CuerpoSesionApi({ children }: props) {
    const { getLoading } = useLoading()

    return (
        <div className={`relative max-w-screen w-screen h-screen max-h-screen flex flex-col items-start justify-start overflow-y-auto overflow-x-hidden`} >
            <LoadingScreen view={getLoading} />
            <div className="flex justify-between w-full h-full">
                {children}
            </div>
        </div>
    )
}