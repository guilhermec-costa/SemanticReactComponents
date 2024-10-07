import React from "react";

/**
 * Maps an array to a list of rendered children.
 *
 * @param {Array} items - The array of items to map.
 * @param {function} children - The rendering function for each item in the array.
 * 
 * Example usage:
 * <Map items={[1, 2, 3]}>
 *   {(item) => <div key={item}>Item {item}</div>}
 * </Map>
 */

interface MapProps<T> {
    eachIn: T[];
    mapTo: (item: T) => React.ReactNode;
}
const Map = <T,>({eachIn, mapTo}: MapProps<T>): React.ReactNode => {
    return <>{eachIn.map(mapTo)}</>
}

export default Map;