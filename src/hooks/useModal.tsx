import { useState } from "react"
import { NormalModal } from "../components/Layout/NormalModal"

export default function useModal() {
    const [viewModal, setViewModal] = useState(false)

    const onCloseModal = ({ func = () => { } }: { func?: () => void }) => {
        setViewModal(false)
        if (func) func()
    }

    const onOpenModal = ({ func = () => { } }: { func?: () => void }) => {
        setViewModal(true)
        if (func) func()
    }

    const Modal = ({ children }: { children: React.ReactNode }) => {
        if (viewModal)
            return (
                <NormalModal onClose={onCloseModal}>
                    {children}
                </NormalModal>
            )
        else <></>
    }

    return {
        onCloseModal,
        onOpenModal,
        Modal
    }
}