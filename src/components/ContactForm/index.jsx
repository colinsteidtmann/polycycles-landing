import React from "react";
// Components
import FormikContact from "./FormikContact";
import { MailSentDisplay, MailErrorDisplay } from "#components";
// Hooks
import { useApiForm } from "#hooks";
// Other imports
import { formStatuses } from "#constants";
import { sendContactForm } from "#api";

export const ContactForm = (props) => {
    const { title } = props;
    const { displayState, ...otherVars } = useApiForm(sendContactForm);
    return ( <React.Fragment>
        <div className="row">
        
          <h3 className="fw-normal text-center my-3">
            {title}
          </h3>
          {
            (displayState === formStatuses.FORM) ? 
            <FormikContact {...otherVars} />
            :
            (displayState === formStatuses.SENT) ?

            <MailSentDisplay {...otherVars} />
            :
            <MailErrorDisplay {...otherVars} />
          }

      </div>

        </React.Fragment>
    );
};

export default ContactForm;