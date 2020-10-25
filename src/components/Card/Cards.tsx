import React from "react";
import { Card } from "./Card";

export const Cards: React.FC = () => (
  <div className="uk-container uk-container-small">
    <div
      className="uk-grid uk-grid-small"
      uk-height-match="target: > div > .uk-card"
    >
      <Card
        image={"/images/poradna.png"}
        title="sluzby"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
      <Card
        image={"/images/poradna.png"}
        title="sluzby"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
      <Card
        image={"/images/poradna.png"}
        title="sluzby"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
      <Card
        image={"/images/poradna.png"}
        title="validace a mereni"
        text="Veskere mereni je provadeno spickovymi certifikovanymi pristroji s pravidelnym servisem a kalbraci "
      />
      <Card
        image={"/images/poradna.png"}
        title="Klimatizace"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
      <Card
        image={"/images/poradna.png"}
        title="poradenská činnost"
        text="Nase spolecnost zajistuje servis vzduchotechniky vcetne dodavek HEPA filtru, jejich vymen a atestu. Samozrejmosti je zarucni i pozarucni servis."
      />
    </div>
  </div>
);
