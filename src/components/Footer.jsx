import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300 py-10">
      <div>
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-7 h-7 object-cover object-center"
        />
      </div>
      <div className="flex items-center md:gap-16 gap-8">
        {footerIconsList.map((icon, index) => (
          <a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:-translate-y-5 transition-all duration-700"
          >
            {icon.name === "Call" ? (
              <svg className="md:w-10 w-8 h-10 h-8" viewBox="0 0 24 24" fill="#25D366">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-.99.45-.99.99 0 9.36 7.6 16.96 16.96 16.96.54 0 .99-.45.99-.99v-3.5c0-.54-.45-.99-.99-.99z"/>
              </svg>
            ) : icon.name === "Gmail" ? (
              <svg className="md:w-10 w-8 h-10 h-8" viewBox="0 0 24 24" fill="#0077B5">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            ) : (
              <img
                src={icon.icon}
                alt={icon.name}
                className="md:size-10 size-8"
              />
            )}
          </a>
        ))}
      </div>
      <p className="font-regular md:text-lg text-sm">
        2025 © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
