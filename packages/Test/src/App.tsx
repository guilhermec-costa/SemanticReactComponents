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
  useDevice,
  useAsyncEffect,
  useElementSize,
  useKeyCombo,
  Delayed
} from "@semanticComponents/index";
import { LegacyRef, useEffect, useRef, useState } from "react";

const App = () => {
    const [modalOpen, toggleModalOpen] = useToggle(false);
    const componentRef = useRef(null);
    const divIntersecting = useIsIntersectingScreen(componentRef);
    const clickRef = useClickOutside(() => console.log("clicked outside component ref"));
    const [ref, size] = useElementSize<HTMLDivElement>();

    useKeyCombo([
      {
        keys: ["Control", "Enter"],
        callback: () => console.log("executing callback")
      }
    ])

    const device = useDevice(1200);
    
    function cb(obj:any) {
      return <div>{obj.name}</div>;
    }

    useAsyncEffect(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const result = await response.json();
      console.log(result)
    }, [modalOpen]);

    return <>
        <button onClick={toggleModalOpen} ref={componentRef}>change modal view</button>
        <div style={{background: "red", height: "80vh"}} ref={ref}>hello world</div>
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

        <Delayed delay={3000}><div>hello world</div></Delayed>
    </>
}

export default App;