import If from "../../semanticComponents/src/components/If";
import For from "../../semanticComponents/src/components/For";
import useToggle from "../../semanticComponents/src/hooks/useToggle";
import useMounted from "../../semanticComponents/src/hooks/useMounted";
import { useEffect } from "react";

const App = () => {
    const [modalOpen, toggleModalOpen] = useToggle(false);
		const mountedState = useMounted();

    return <>
        <button onClick={toggleModalOpen}>change modal view</button>
        <If
					condition={modalOpen}
					render={
						<For
							eachIn={[1, 2, 3]}
							render={(item) => <h3>{item}</h3>}
						/>
          }
        />
    </>
}

export default App;