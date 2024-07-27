import React, { FormEvent, useState } from "react";
import { z } from "zod";

// Define a type for the error structure
type FormErrors<T> = {
    [K in keyof T]?: { status: boolean; message: string };
};

// Define the props for the useForm hook
interface UseFormProps<T> {
    base_valores: T;
    mensaje_error_submit: string;
    mensaje_successful_submit: string;
    onSubmitFunction: (aux: T) => Promise<{ status: boolean }>;
    valoresSchema: z.ZodObject<any>
}

export default function useForm<T>({
    base_valores,
    mensaje_error_submit,
    mensaje_successful_submit,
    onSubmitFunction,
    valoresSchema
}: UseFormProps<T>) {
    const [loadingForm, setLoadingForm] = useState(false);
    const [valores, setValores] = useState<T>(base_valores);
    const [errores, setErrores] = useState<FormErrors<T>>({});

    const onChangeValores = ({ key, value }: { key: keyof T; value: any }) => {
        setValores((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const normalizeErrors = (
        errores: Record<string, any>
    ): Record<string, any> => {
        const normalizedErrors: Record<string, any> = {};

        for (const [, error] of Object.entries(errores)) {
            const { message, path } = error;
            normalizedErrors[path[0]] = {
                message,
                status: message.trim().length === 0,
            };
        }

        return normalizedErrors;
    };


    const validateForm = ({ valores }: { valores: any }) => {
        let errores = {};

        try {
            valoresSchema.parse(valores);
        } catch (error) {
            if (error instanceof z.ZodError) errores = { ...errores, ...error.errors };
        }

        if (Object.keys(errores).length > 0) {
            return {
                status: false,
                errores: normalizeErrors(errores),
            };
        } else {
            return {
                status: true,
                errores: {},
            };
        }
    };


    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loadingForm) return { status: false };
        setLoadingForm(true);

        const aux_error = validateForm({ valores });

        if (!aux_error.status) {
            setErrores(aux_error.errores);
            setLoadingForm(false);
            return { status: false };
        }

        const result = await onSubmitFunction({ ...valores });

        setLoadingForm(false);
        if (!result.status) {
            alert(mensaje_error_submit);
            return { status: false };
        }

        setValores(base_valores);
        setErrores({});
        alert(mensaje_successful_submit);
        return { status: true };
    };

    return {
        valores,
        errores,
        onChangeValores,
        onSubmit,
    };
}
