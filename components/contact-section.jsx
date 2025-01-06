import { Mail, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactCard = ({ Icon, title, content, href }) => (
  <Card className="border-[#082F5D] border-2 bg-gradient-to-b from-[#03132A] to-[#020F1F]">
    <CardContent className="flex flex-col items-center justify-center p-6 lg:p-12 text-center">
      <a
        href={href}
        className="h-16 w-16 rounded-full bg-gradient-to-br from-[#2780EB] to-[#829DBD] flex items-center justify-center mb-4"
      >
        <Icon className="h-8 w-8 text-white" />
      </a>
      <h3 className="text-2xl lg:text-4xl font-medium mb-2 text-white">
        {title}
      </h3>
      <p className="text-[#d7d6d6] mt-4">{content}</p>
    </CardContent>
  </Card>
);

export default function ContactSection() {
  return (
    <div className="min-h-screen text-white px-4 py-16 -mt-24 relative">
      <div className="absolute inset-0">
        <div
          className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-blue-800 via-transparent to-transparent rounded-full blur-2xl opacity-70"
          style={{ top: "-500px", left: "0px" }}
        ></div>
        <div
          className="absolute w-[800px] h-[800px] bg-gradient-to-tl from-blue-800 via-transparent to-transparent rounded-full blur-2xl opacity-70"
          style={{ top: "-500px", right: "0px" }}
        ></div>

        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-16 space-y-4 pt-40">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#EBEBEB]">
              Get in touch with
            </h2>
            <p className="text-[#828284] max-w-2xl mx-auto text-lg">
              With seamless integrations, businesses can connect various
              software tools ranging from project management and CRM systems to
              accounting and more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ContactCard
              Icon={Mail}
              title="Email Address"
              content="support@cloudoai.com"
              href="mailto:support@cloudoai.com"
            />
            <ContactCard
              Icon={Phone}
              title="Phone"
              content="+36 569 4596 478"
              href="tel:+365694596478"
            />
            <ContactCard
              Icon={MessageCircle}
              title="Live Chat"
              content="support@cloudoai.com"
              href="mailto:support@cloudoai.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
