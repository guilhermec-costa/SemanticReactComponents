import {
  If, For, useMounted, useToggle, useInterval,
  usePrevious,
  useIsIntersectingScreen,
  useClickOutside,
  Show,
  Switch,
  Case
} from "@semanticComponents/index";
import { LegacyRef, useEffect, useRef, useState } from "react";

const App = () => {
    const [modalOpen, toggleModalOpen] = useToggle(false);
    const componentRef = useRef(null);
    const divIntersecting = useIsIntersectingScreen(componentRef);
    const clickRef = useClickOutside(() => console.log("clicked outside component ref"));

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
        <div ref={clickRef as LegacyRef<HTMLDivElement>}>random div</div>
        <Show when={true}><div>hello world</div></Show>


        <Switch expression={"hello"}>
          <Case value={"hello 1"}>case 1</Case>
          <Case value={"hello"}>case 2</Case>
        </Switch>
    </>
}

export default App;