import {
  If, For, useMounted, useToggle, useInterval,
  usePrevious,
  useIsIntersectingScreen
} from "@semanticComponents/index";
import { useEffect, useRef, useState } from "react";

const App = () => {
    const [modalOpen, toggleModalOpen] = useToggle(false);
    const componentRef = useRef(null);
    const divIntersecting = useIsIntersectingScreen(componentRef);

    return <>
        <button onClick={toggleModalOpen} ref={componentRef}>change modal view</button>
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