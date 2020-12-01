import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { apiClient } from "../../api/apiClient";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactForm.scss";
import Modal from "react-modal";

export const ContactForm = () => {
  const siteKey = process.env.GATSBY_SITE_RECAPTCHA_KEY || "";
  const apiUrl = process.env.GATSBY_API_URL || "";
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      position: 'fixed'
    }
  };

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
              console.error("Missing recaptcha token.");
              return;
            }

            const payload = {
              phone: values.phone,
              token
            };

            setIsOpen(true);
            await apiClient.post(apiUrl, payload);
            actions.resetForm({});

          }}
        >
          {() => (
            <Form className="uk-container">
              <div className="consultation uk-padding-small">
                <hr className="hr--primary consultation__header uk-width-1-2" />
                <div className="consultation__form">
                  <label htmlFor="phone">Nechte nám své telefonní číslo. Zavoláme vám a domluvíme si vhodný termín.</label>
                  <Field className="consultation__form-input consultation__form-input--left" type="tel" name="phone" placeholder="Telefon:" />
                  <Field className="consultation__form-input consultation__form-input--left" type="email" name="email" placeholder="Email:" />
                  <Field className="consultation__form-input consultation__form-input--left" type="text" name="jmeno" placeholder="Jméno:" />
                  <Field className="consultation__form-text consultation__form-input--left" rows={3} type="textarea" name="text" placeholder="Prosím formulujte dotaz" />
                  <ErrorMessage name="phone" />
                  <button type="submit" className="consultation__form-submit">Odeslat zpravu</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>

      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnEsc={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
        overlayClassName="consultation__overlay"
        parentSelector={() => document.body}
      >
        <div className="uk-modal-container">
            <h2>Zavoláme vám</h2>
            <button className="uk-modal-close-default uk-icon uk-close" type="button" uk-close="" onClick={closeModal}>
            </button>
          <p>
            Vaše telefoní číslo bylo předáno a budeme vás v nejbližším možném termínu kontaktovat.
          </p>
        </div>
      </Modal>
    </div>
  );
};
