import { useState } from 'react';

function useFocus() {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return {
        isFocused,
        bind: {
            onFocus: handleFocus,
            onBlur: handleBlur,
        },
    };
}

export default useFocus;
