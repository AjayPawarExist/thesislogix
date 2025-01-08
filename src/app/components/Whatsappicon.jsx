// whatsapp icon on home page

import React from "react";

const Whatsappicon = () => {
  return (
    <a
      href="https://wa.me/7453851791" // Replace with your WhatsApp number
      target="_blank"
      className="fixed bottom-2 right-5 w-12 h-12 bg-green-500 rounded shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      title="Chat with us on WhatsApp"
    >
      {/* image of whatsapp icon  */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default Whatsappicon;