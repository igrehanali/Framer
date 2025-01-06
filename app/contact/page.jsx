import ContactForm from "@/components/contact-form";
import ContactSection from "@/components/contact-section";
import FAQ from "@/components/faq";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactSection />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default page;
