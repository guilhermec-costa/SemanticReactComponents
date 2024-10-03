import {
  If, For, useMounted, useToggle, useInterval,
  usePrevious,
  useIsIntersectingScreen,
  useClickOutside,
  Show,
  Switch,
  Case,
  With,
  Desktop,
  useDevice
} from "@semanticComponents/index";
import { LegacyRef, useEffect, useRef, useState } from "react";

const App = () => {
    const [modalOpen, toggleModalOpen] = useToggle(false);
    const componentRef = useRef(null);
    const divIntersecting = useIsIntersectingScreen(componentRef);
    const clickRef = useClickOutside(() => console.log("clicked outside component ref"));

    const device = useDevice(1200);
    
    function cb(obj:any) {
      return <div>{obj.name}</div>;
    }

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
        <Show when={true}><div>hello world</div></Show>
        <Switch expression={"hello"}>
          <Case value={"hello 1"}>case 1</Case>
          <Case value={"hello"}>case 2</Case>
          <Case default>default case</Case>
        </Switch>

        <With value={{name: "churross"}}>
          {cb}
        </With>
        {cb({name: "churross"})}

        <Desktop>
          <div>hello world</div>
        </Desktop>
    </>
}

export default App;