import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 container md:max-w-[600px] rounded">
        <div className="mt-4">
          <p className="font-bold">Contact Info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            width={60}
            height={60}
            src="https://placeimg.com/480/480/animals"
            alt={"Avatar Image"}
          ></Image>
        </div>
        <div className="mt-4">
          <ContactData title="Address" description="Tokyo" />
          <ContactData title="E-mail" description="example@example.com" />
          <ContactData title="Phone" description="000-0000-0000" />
        </div>
        <div className="mt-6 flex justify-around">
          <SocialIcon href="https://twitter.com/tailwindcss" src="twitter-icon.svg" size={24} alt="twitter icon" />
          <SocialIcon href="https://facebook.com/tailwindcss" src="facebook-icon.svg" size={24} alt="facebook icon" />
          <SocialIcon href="https://github.com/tailwindcss" src="github-icon.svg" size={24} alt="github icon" />
        </div>
      </div>
    </Layout>
  );
};

const ContactData = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="my-2">
      <p className="font-bold">{title}</p>
      <p className="text-xs mt-2 text-gray-600">{description}</p>
    </div>
  );
};

const SocialIcon = ({ href, src, size, alt }: { href: string; src: string; size: number; alt: string }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image className="w-6 h-6 mr-3" src={`/70-social-icons/${src}`} width={size} height={size} alt={alt} />
    </a>
  );
};

export default Contact;
