import If from "../../semanticComponents/src/components/If";
import For from "../../semanticComponents/src/components/For";

const App = () => {
    return <>
        <If 
            condition={false}
            children={<>Hello world</>}
        /> 
        <For 
            eachIn={[1, 2, 3]}
            render={(item) => <h3>{item}</h3>}
        />
    </>
}

export default App;