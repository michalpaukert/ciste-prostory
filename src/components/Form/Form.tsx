import React, { useState } from "react"
import { GoogleReCaptcha, GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { apiClient } from "../../api/apiClient"

export const ContactForm = () => {
  const siteKey = process.env.GATSBY_SITE_RECAPTCHA_KEY;
  const apiUrl = process.env.GATSBY_API_URL || "";
  const [token, setToken] = useState("");

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
        <GoogleReCaptcha onVerify={repatchaToken => setToken(repatchaToken)} />
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
          onSubmit={(values, actions) => {
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
      </GoogleReCaptchaProvider>
    </>
  )
}
