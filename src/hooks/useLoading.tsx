import useLoadingStore from "../store/loading"

export default function useLoading() {
    const { getLoading, setLoading } = useLoadingStore()

    return {
        getLoading, setLoading
    }
}