import { useEffect } from "react";

const useDebounce = (callback: () => void, delay: number) => {
  
    useEffect(() => {
        const id = setTimeout(callback, delay)
        
        return () => clearTimeout(id);
    })
    
}
export default useDebounce;