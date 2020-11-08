import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiClient } from "../../api/apiClient";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.scss";

export const ContactForm = () => {
  const siteKey = process.env.GATSBY_SITE_RECAPTCHA_KEY || "";
  const apiUrl = process.env.GATSBY_API_URL || "";
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  return (
    <div className="uk-container">
      <ReCAPTCHA
        ref={recaptchaRef}
        size={"invisible"}
        sitekey={siteKey}
      />
        <Formik
          initialValues={{
            phone: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.phone) {
              return { phone: 'Prosím vyplňte telefon, abysme vám mohli zavolat.' };
            }
            return errors;
          }}
          onSubmit={async (values, actions) => {

            const token = await recaptchaRef.current?.executeAsync();
            if (!token) {
              console.log("Missing recaptcha token.");
              return;
            }

            const payload = {
              phone: values.phone,
              token
            }
            await apiClient.post(apiUrl, payload);
          }}
        >
          {() => (
            <Form className="uk-container">
              <div className="consultation uk-padding-small">
                <h3 className="consultation__header">Konzultace je zdarma</h3>
                <hr className="hr--primary consultation__header uk-width-1-2" />
                <div className="consultation__form">
                  <label htmlFor="phone">Nechte nam sve telefonni cislo. Zavolame vam a domluvime si vhodny termin.</label>
                  <Field className="consultation__form-input" type="tel" name="phone" placeholder="Vase telefonni cislo" />
                  <ErrorMessage name="phone" />
                  <button type="submit" className="consultation__form-submit">Odeslat zpravu</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
    </div>
  );
};