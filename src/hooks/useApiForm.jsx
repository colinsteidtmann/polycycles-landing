import { useState } from "react";
// Constants
import { FormStatuses } from "#constants/forms";
import {useGeneralStore} from "#hooks";

export const useApiForm = (apiFn) => {
    const [loading, setLoading] = useState(false);
    const formStatus = useGeneralStore(state => state.formStatus);
    const setFormStatus = useGeneralStore(state => state.setFormStatus);

    const handleSubmit = async (inputs) => {
        setLoading(true);
        const response = await apiFn(inputs);
        if (response.status === 200) {
            setFormStatus(FormStatuses.SENT);
        } else {
            setFormStatus(FormStatuses.ERROR);
        }
        setLoading(false);
    }

    return { loading, handleSubmit, formStatus, setFormStatus };
};

export default useApiForm;