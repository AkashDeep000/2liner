import { useState, useEffect } from 'react'

const useOnScreen = (ref) => {
  
  const [isIntersecting, setIntersecting] = useState(false)

const callbackFunction = (entries) => {
  const [ entry ] = entries
setIntersecting(entry.isIntersecting)
}

const option = {
  root: null,
  rootMargin: "500px",
  threshold: 0.1
}
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction)
    
   if(ref.current) observer.observe(ref.current)
   return() => {
     if(ref.current) observer.disconnect(ref.current)
   }
   
   
  }, [ref, option])
  
console.log(isIntersecting)
  return isIntersecting

}

// infinite scrolling with intersection observer
export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'ADVANCE_PAGE' });
          }
        });
      }).observe(node);
    },
    [dispatch]
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
}

// next code block here





export default useOnScreen