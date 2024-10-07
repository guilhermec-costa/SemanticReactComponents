import React from "react";

/**
 * Renders children multiple times, similar to a `for` loop in JavaScript.
 *
 * @param {number} each - Number of times to render the children.
 * @param {function} children - A function that returns the element to be rendered for each iteration.
 * 
 * Example usage:
 * <For each={5}>
 *   {(index) => <div key={index}>Iteration {index}</div>}
 * </For>
 */

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