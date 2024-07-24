import Fuse from "fuse.js";
import { useEffect, useState, useMemo } from "react";
import { useDebounce } from "use-debounce";

interface Props {
    valores: any[];
    keys_search: string[];
    time?: number;
    threshold?: number;
}

export default function useSearchDebounce({ valores, keys_search, threshold = 0.4, time = 500 }: Props) {
    const [searchText, setSearchText] = useState("");
    const [searchDebounce] = useDebounce(searchText, time);
    const [valoresRender, setValoresRender] = useState<any[]>([]);
    const memoizedValores = useMemo(() => valores, [valores]);

    useEffect(() => {
        console.log("nuevos valores")
        if (searchDebounce.trim().length === 0) {
            setValoresRender([...memoizedValores]);
            return;
        }

        const fuse = new Fuse(memoizedValores, {
            keys: keys_search,
            threshold
        });

        const busqueda_aux = fuse.search(searchDebounce).map(result => result.item);
        setValoresRender(busqueda_aux);
    }, [searchDebounce]);

    const onChangeSearchText = (value: string) => {
        setSearchText(value);
    };

    return {
        searchText,
        valoresRender,
        onChangeSearchText
    };
}
