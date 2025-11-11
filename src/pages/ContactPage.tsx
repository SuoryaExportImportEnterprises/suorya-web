import { ContactPage as ContactComponent } from "../components/ContactPage";
import { SEO } from "../components/layout/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Suorya | Contact Us"
        description="Get in touch with Suorya — visit our showroom, email us, or request wholesale details."
        url="https://suorya.com/contact"
      />
      <ContactComponent />
    </>
  );
}
