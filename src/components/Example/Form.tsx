
import { base_valores } from "../../const/base"
import { valoresSchema } from "../../const/schemas/form"
import useForm from "../../hooks/useForm"
import { InputText } from "../Layout/InputText"

export default function Form() {
    const { errores, onChangeValores, onSubmit, valores } = useForm({
        base_valores: base_valores,
        mensaje_error_submit: "ERROR",
        mensaje_successful_submit: "EXITOSO",
        onSubmitFunction: async () => { return { status: true } },
        valoresSchema
    })

    return (
        <div className="w-full flex justify-center items-start pt-24 pb-64 bg-custom-blanco min-h-screen" >
            <main className="w-full max-w-[1200px] mx-auto flex flex-col gap-5 justify-center items-center px-5 md:px-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="hidden lg:block">
                        <h2 className="text-xl text-custom-gris-oscuro text-center">
                            DONDE TE AYUDAMOS
                        </h2>
                    </div>
                    <div>
                        <h1 className="text-4xl text-custom-gris-oscuro text-center">
                            ¡ENVÍANOS TUS CONSULTAS!
                        </h1>
                    </div>
                </div>

                <div className="max-w-[500px] mx-auto w-full flex flex-col justify-start items-center">

                    <form onSubmit={onSubmit} className="w-full flex flex-col justify-start items-center gap-5">

                        <div className="w-full flex flex-col justify-start items-center p-5 border rounded border-custom-gris-oscuro bg-custom-gris-suave gap-2">
                            <label htmlFor="first_name" className="text-xl py-2">DATOS PERSONALES</label>
                            <InputText
                                title="NOMBRE"
                                value={valores.first_name}
                                key_value={"first_name"}
                                onChange={onChangeValores}
                                error={errores?.first_name?.message ?? ""}
                                status_error={!(errores?.first_name?.status)}
                            />
                            <InputText
                                title="APELLIDO"
                                value={valores.last_name}
                                key_value={"last_name"}
                                onChange={onChangeValores}
                                error={errores?.last_name?.message ?? ""}
                                status_error={!errores?.last_name?.status}
                            />
                            <InputText
                                title="DIRECCIÓN"
                                value={valores.address}
                                key_value={"address"}
                                onChange={onChangeValores}
                                error={errores?.address?.message ?? ""}
                                status_error={!errores?.address?.status}
                            />
                            <InputText
                                title="TELÉFONO"
                                value={valores.phone}
                                key_value={"phone"}
                                onChange={onChangeValores}
                                error={errores?.phone?.message ?? ""}
                                status_error={!errores?.phone?.status}
                            />
                        </div>

                        <div className="w-full py-2 gap-5 flex flex-col" >
                            <div className="w-full">
                                <button className="border border-black w-full px-3 py-2 bg-custom-celeste disabled:bg-custom-gris-suave">
                                    ENVIAR CONSULTA
                                </button>
                            </div>
                        </div>

                    </form>

                </div>
            </main>
        </div>
    )
}