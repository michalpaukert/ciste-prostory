import React from "react";
import { HeaderCard } from "./header-card";
import "./header-cards.scss";

export const HeaderCards: React.FC = () => (
  <div className="uk-container uk-container-small">
    <div
      className="uk-grid uk-grid-small"
      uk-height-match="target: > div > .uk-card"
    >
      <HeaderCard
        image={"/images/poradna.png"}
        title="sluzby"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
      <HeaderCard
        image={"/images/poradna.png"}
        title="sluzby"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
      <HeaderCard
        image={"/images/poradna.png"}
        title="sluzby"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
      <HeaderCard
        image={"/images/poradna.png"}
        title="validace a mereni"
        text="Veskere mereni je provadeno spickovymi certifikovanymi pristroji s pravidelnym servisem a kalbraci "
      />
      <HeaderCard
        image={"/images/poradna.png"}
        title="Klimatizace"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
      <HeaderCard
        image={"/images/poradna.png"}
        title="poradenská činnost"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
    </div>
  </div>
);
