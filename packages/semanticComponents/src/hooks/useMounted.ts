import React from "react"

const useMounted = (): boolean => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    return mounted;
}

export default useMounted;