import React from "react"
import TableUse from "../Tables/UseTable"

export default function Table() {
    const statusOnClick = true;
    const values: any[] = [
        {
            name: "name",
            last_name: "last_name"
        },
        {
            name: "name",
            last_name: "last_name"
        },
        {
            name: "name",
            last_name: "last_name"
        },
        {
            name: "name",
            last_name: "last_name"
        },
        {
            name: "name",
            last_name: "last_name"
        },
    ]

    const distribution = [
        {
            header_text: "NOMBRE",
            value: "name"
        },
        {
            header_text: "APELLIDO",
            value: "last_name"
        },
    ]

    const onClick = () => {
        return true
    }

    return (
        <TableUse
            statusOnClick={statusOnClick}
            onClick={onClick}
            values={values}
            distribution={distribution}
        />
    )
}