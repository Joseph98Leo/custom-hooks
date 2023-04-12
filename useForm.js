import { useState } from "react";



export const useForm = ( initialForm = {} ) => {
 
    const [formState, seteFormState] = useState( initialForm )

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        seteFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        seteFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
