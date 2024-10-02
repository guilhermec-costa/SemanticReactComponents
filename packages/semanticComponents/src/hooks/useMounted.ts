import React from "react"

/**
 * @returns if the component where the hooks is used has been already mounted or not
 */
const useMounted = (): boolean => {
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	return mounted;
}

export default useMounted;