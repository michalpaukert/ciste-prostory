import * as React from "react"
import { ContentLayout } from "../components/Layout/ContentLayout"
import Articles from "./articles"

export const ContactPage = () => {
  return <ContentLayout title="clanky">
    <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
      <p>
        <label>Email: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </ContentLayout>;
};
export default ContactPage;
