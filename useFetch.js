import { useEffect, useState } from "react"



export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch( url );
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }

    // CADA VEZ QUE EL URL CAMBIE, ENTONCES SE VA A VOLVER A DISPARAR ESTE USEEFFECT
    // SI EL URL ES EL MISMO, ENTONCES NO HACE NADA

    // PUEDE TENER TAREAS ASINCRONAS, PERO NO SE PUEDE DEFINIR QUE SU CALLBACK VA A SER ASINCRONO
    useEffect(() => {
        getFetch();
    }, [ url ])
    


    return {
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError
    };
}
