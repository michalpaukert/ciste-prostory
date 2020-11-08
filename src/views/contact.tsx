import * as React from "react"
import { ContentLayout } from "../components/Layout/ContentLayout"
import { ContactForm } from "../components/Form/ContactForm"

export const ContactPage = () => {
  return <ContentLayout title="clanky">
    <ContactForm />
  </ContentLayout>;
};
export default ContactPage;
