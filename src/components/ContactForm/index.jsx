import React from "react";
// Components
import FormikContact from "./FormikContact";
// Hooks
import { useApiForm } from "#hooks";
// Other imports
import { FormStatuses } from "#constants/forms";
import { sendContactForm } from "#api";

export const ContactForm = (props) => {
    const { title } = props;
    const { displayState, ...otherVars } = useApiForm(sendContactForm);
    return ( 
      <React.Fragment>

        <div className="row">

          <h3 className="fw-normal text-center my-3">
            {title}
          </h3>

          <FormikContact {...otherVars} />

        </div>

      </React.Fragment>
    );
};

export default ContactForm;