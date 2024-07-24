import { TableUseDistribution } from "../../types_use";
import Table from "./Index";


interface TableUseProps {
    values: any[];
    distribution: TableUseDistribution[];
    onClick?: () => void
    statusOnClick?: boolean
}

export default function TableUse({ values, distribution, onClick = () => { }, statusOnClick = false }: TableUseProps) {
    const valores_header = distribution.map((d) => ({
        text: d.header_text
    }));

    const baseBody = (value: any) => {
        return {
            render_valores: distribution.map((d) => ({
                text: value[d.value]
            })),
            statusOnClick,
            onClick
        };
    };

    const valores_body = values.map((n) => baseBody(n));

    return (
        <div className="w-full">
            <Table
                valores_header={valores_header}
                valores_body={valores_body}
            />
        </div>
    )
}
