
import { useState } from "react";

export default function useHover() {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return {
        hover,
        setHover,
        handleMouseEnter,
        handleMouseLeave
    }
}