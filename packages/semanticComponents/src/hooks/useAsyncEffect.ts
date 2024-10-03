import React, { useEffect } from "react"

const useAsyncEffect = async (
  cb: () => Promise<void | (() => void)>,
  deps: React.DependencyList = []) => {

  React.useEffect(() => {
    const effect = async () => {
      try {
        const cleanup = await cb();
        if(cleanup) return cleanup;
      } catch(err) {
        console.error(err);
      }
    };

    effect();
  }, deps);

}

export default useAsyncEffect;