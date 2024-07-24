import SVGRemove from "../../svgs/SVGRemove";

interface props {
    onClose: (aux: any) => void;
    type_close?: boolean
    children: React.ReactNode;
}

export const NormalModal = ({ onClose, children, type_close = true }: props) => {
    return (
        <div className="fixed z-[100] inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen min-w-screen py-4 px-4 pb-20 sm:p-0 bg-gray-800 bg-opacity-90">
                {children}
            </div>
            <span className="fixed top-5 right-10">
                <button type="button" onClick={() => onClose({ restart_path: type_close })}>
                    <SVGRemove className="h-[50px] fill-white" />
                </button>
            </span>
        </div>
    )
}