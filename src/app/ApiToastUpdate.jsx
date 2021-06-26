import React, {useState} from "react";
// Components
import {Toast} from "#components";
// Hooks
import {useGeneralStore} from "#hooks";
// Constants
import { FormStatuses } from "#constants/forms";

export const ApiToastUpdate = () => {
  const formStatus = useGeneralStore(state => state.formStatus);
  const setFormStatus = useGeneralStore(state => state.setFormStatus);

  const [showToastSucc, setShowToastSucc] = useState(true);
  const toggleShowSucc = () => {
    setFormStatus(FormStatuses.FORM);
  };

  const [showToastErr, setShowToastErr] = useState(true);
  const toggleShowErr = () => {
    setFormStatus(FormStatuses.FORM);
  };

  if (formStatus === FormStatuses.SENT) {
      return (
        <Toast 
          title="Successfully Sent!" 
          body="Great work"
          show={showToastErr}
          toggleShow={toggleShowErr}
        />
      );
  } else if (formStatus === FormStatuses.ERROR) {
      return (
        <Toast 
          title="Uh oh. Error!" 
          body="Try again or send us an email - friends@polycycles.com"
          show={showToastSucc}
          toggleShow={toggleShowSucc}
        />
      );
  } else {
    return (null);
  }
}

export default ApiToastUpdate;
