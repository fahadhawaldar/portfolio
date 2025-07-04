import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/FahadHawaldar",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/fahad-hawaldar/",
  },
  // {
  //   icon: <FaTwitter />,
  //   href: "https://twitter.com/FahadHawaldar",
  // },
  // {
  //   icon: <FaYoutube />,
  //   href: "https://www.youtube.com/channel/UC1234567890",
  // },
];

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.href} target="_blank">
          <div className={`text-white hover:text-accent ${iconStyles}`}>
            {social.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
