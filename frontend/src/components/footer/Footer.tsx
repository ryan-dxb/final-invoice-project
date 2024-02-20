import React, { FC } from "react";

interface FooterProps {
  // Add your prop types here
}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="fixed left-64 bottom-0 right-0 h-16 flex items-center justify-center shadow-sm">
      <div className="flex flex-col">
        <h3>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="
            "
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-500"
          >
            Ryan Pereira
          </a>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
