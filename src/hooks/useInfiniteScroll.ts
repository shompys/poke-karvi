import { useEffect, useState } from "react";


// pasos: 

// detectar casi final del viewport

// disparar petición 

// aplicar un delay para que no genere multiples peticiones casi en simultaneo


// const nearEndDetected = (element: any, timer: number) => { 

//     new IntersectionObserver(onChange, {
//         root: null, //podemos indicar un elemento a observar, null = default viewport
//         rootMargin: '',//establecer margenes desestimando el real a nivel observador para que sepa cuando quiero ejecutar
//         threshold: 1.0 //ejecutar el codigo si mi elemento esta totalmente dentro o indicar con %
//     }).observe(element);

// }





const useInfiniteScroll = (element: { current : HTMLDivElement | null }) => {
    const [isEnd, setIsEnd] = useState(false);

    const onChange = (
        entries: IntersectionObserverEntry[], 
        observer: IntersectionObserver
    ) => {
        
        //isIntersecting: true cuando cumple el elemento dentro del viewport
        //este evento se dispara cuando el elemento entra pero tambien sale
        if(entries[0].isIntersecting) {
            setIsEnd(true);
            observer.disconnect()
            return;
        }
        
        setIsEnd(false)
    }

    useEffect(() => {
        if(!element.current) return setIsEnd(false)
        const observer = new IntersectionObserver(onChange, {
            // root: null, //podemos indicar un elemento a observar, null = default viewport
            rootMargin: '500px 0px',//establecer margenes desestimando el real a nivel observador para que sepa cuando quiero ejecutar
            threshold: 1.0 //ejecutar el codigo si mi elemento esta totalmente dentro o indicar con %
        });
        observer.observe(element.current);
        return () => observer.disconnect()
    })
    return isEnd;
}

export default useInfiniteScroll;