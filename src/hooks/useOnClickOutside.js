import React, { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {

  useEffect(() => {
    const listener = (event) => {
      console.log('ref', ref.current);
      console.log('event', event);
      if(!ref.current || ref.current.contains(event.target) || event.keyCode !== 27) { 
        return;
      }
      handler();
    };
    
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("keydown", listener)

    return () => { //Unmount
      document.addEventListener("touchstart", listener);
      document.addEventListener("mousedown", listener);
      document.addEventListener("keydown", listener)
    };
  }, [ref, handler])
};

export default useOnClickOutside;
