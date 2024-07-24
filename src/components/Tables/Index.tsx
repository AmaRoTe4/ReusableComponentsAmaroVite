import Body from "./Body";
import Header from "./Header";

export default function Table({ valores_body, valores_header }: { valores_header: any[], valores_body: any[] }) {
    return (
        <div className="relative overflow-x-auto text-white text-lg font-medium min-w-full">
            <table className="w-full text-sm text-left rtl:text-right">
                {valores_body.length > 0 && <Header valores={valores_header} />}
                <Body valores={valores_body} />
            </table>
        </div>
    )
}

