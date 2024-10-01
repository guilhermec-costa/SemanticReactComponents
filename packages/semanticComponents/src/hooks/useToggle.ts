import React from "react";

const useToggle =  (initialValue: boolean): [boolean, () => void] => {
    const [baseValue, setBaseValue] = React.useState(initialValue);
    const toggle = () => setBaseValue(v => !v);
    return [baseValue, toggle];
}

export default useToggle;
