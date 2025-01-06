import React from "react";

const Whatsappicon = () => {
  return (
    <a
      href="https://wa.me/7453851791" // Replace with your WhatsApp number
      target="_blank"
      className="fixed bottom-2 right-5 w-10 h-10 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      title="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
    </a>
  );
};

export default Whatsappicon;