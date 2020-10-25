import React from "react";
import "./Contact.scss";

export const Contact: React.FC = (props) => (
  <div className="contact uk-padding uk-padding-small">
    <div className="contact__wrapper">
      <div className="contact__form uk-text-center">
        <h2>Kontaktujte nas</h2>
        <hr />
        <div className="mail-tel">
          <img src="images/mail.png" />
          <a href="mailto:info@brnocreative">info@brnocreative</a>
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
);
