import React from "react"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { ErrorMessage, Field, Form, Formik } from "formik"

export const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const siteKey = process.env.SITE_RECAPTCHA_KEY || '';

  return (
    <>
      {JSON.stringify(process.env)}
      <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
        <Formik
          initialValues={{
            phone: '',
          }}
          validate={values => {
            const errors = {phone: ''};
            if (!values.phone) {
              errors.phone = 'Prosím vyplňte telefon, abysme vám mohli zavolat.'
            }
            return errors;
          }}
          onSubmit={async (values, actions) => {
            if (!executeRecaptcha) {
              return;
            }
            const result = await executeRecaptcha('homepage');
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
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
