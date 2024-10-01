import React from "react";

interface ForProps<T> {
    eachIn: T[];
    render: (item: T) => React.ReactNode;
}

const For = <T,>({eachIn, render}: ForProps<T>): React.ReactNode => {
	return (
		<>
			{eachIn.map((item: T, idx: number) => (
				<React.Fragment key={idx}>
					{render(item)}
				</React.Fragment>
			))}	
		</>
	)
}

export default For;

// useMount
// useUnMount
// useSideEffetct/strict/exclusive