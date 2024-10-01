interface MapProps<T> {
    eachIn: T[];
    mapTo: (item: T) => React.ReactNode;
}
const Map = <T,>({eachIn, mapTo}: MapProps<T>): React.ReactNode => {
    return <></>
}

export default Map;