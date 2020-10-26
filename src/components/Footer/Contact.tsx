import React from "react";
import "./Contact.scss";

export const Contact: React.FC = (props) => (
  <div className="contact uk-padding uk-padding-small">
    <div className="contact__wrapper uk-flex uk-flex-center">
      <div className="contact__form-wrapper">
        <div className="contact__form">
          <h2 className="contact__form-title">Kontaktujte nas</h2>
          <hr />
          <div className="uk-flex uk-flex-middle">
            <img src="images/mail.png" alt="mail" />
            <a className="contact__form-mail" href="mailto:info@brnocreative">info@brnocreative</a>
          </div>
          <div className="contact__address">
            <div>BRNO CREATIVE s.r.o.</div>
            <div>Lidicka 700/19</div>
            <div>60200 Brno</div>
            <div>ICO: 07367066</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
