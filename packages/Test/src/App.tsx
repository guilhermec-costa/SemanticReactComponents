import If from "../../semanticComponents/src/components/If";

const App = () => {
    return <>
        <If 
            condition={false}
            children={<>Hello world</>}
        /> 
    </>
}

export default App;