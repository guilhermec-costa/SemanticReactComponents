import React from "react"

const validInteractions = ["mousemove", "keydown", "click", "scroll"];

const useIdleDetection = (timeout:number = 30000): boolean => {
  const [isIdle, setIsIdle] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log("idle state: ", isIdle);
  }, [isIdle])

  React.useEffect(() => {
    let idleTimeout: NodeJS.Timeout;

    const resetIdleTimer = () => {
      setIsIdle(false);
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => setIsIdle(true), timeout);
    }

    const handleUserActivity = () => {
      resetIdleTimer();
    };

    for(const interaction of validInteractions) {
      window.addEventListener(interaction, handleUserActivity);
    }
    
    resetIdleTimer();

    return () => {
      for(const interaction of validInteractions)
        window.removeEventListener(interaction, handleUserActivity);

      clearTimeout(idleTimeout);
    }
  }, [timeout]);

  return isIdle;
} 

export default useIdleDetection;