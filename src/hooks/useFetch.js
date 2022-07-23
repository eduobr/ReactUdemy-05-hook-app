import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  //La idea de isMounted es que guarde la referencia cuando el
  //hook esta vivo o el componente sigue montado
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  //se va a disparar cuando el componente o en este caso el efecto se desmonte
  useEffect(() => {
    return () => {
      //este cambio no va a disparar nuevamente la renderización del
      //componente, simplemente está manteniendo la referencia al mismo
      isMounted.current = false;
    };
  }, []);

  //se ejecuta una vez que la url cambia
  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};
