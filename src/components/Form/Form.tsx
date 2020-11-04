import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiClient } from "../../api/apiClient";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
  const siteKey = process.env.GATSBY_SITE_RECAPTCHA_KEY || "";
  const apiUrl = process.env.GATSBY_API_URL || "";
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  return (
    <>
      <ReCAPTCHA
        ref={recaptchaRef}
        size={"invisible"}
        sitekey={siteKey}
      />,
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
            apiClient.post(apiUrl, payload);
          }}
        >
          {() => (
            <Form>
              <label htmlFor="name">Telefon: </label>
              <Field type="tel" name="phone" />
              <ErrorMessage name="phone" />
              <button type="submit">Send</button>
            </Form>
          )}
        </Formik>
    </>
  )
}
