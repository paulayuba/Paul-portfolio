import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebookF , FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/paulayuba/" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/" },
  { icon: <FaFacebookF />, path: "" },
  { icon: <FaWhatsapp  />, path: "" },
];

const Social = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-accent hover:text-gray-400 transition-all duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
