interface SocialItemProps {
  icon: JSX.Element;
  text: string;
  link: string;
}

const SocialItem = ({ icon, text, link }: SocialItemProps) => {
  return (
    <a
      href={link}
      className="dark:text-strock text-8xl inline-flex flex-col items-center gap-3 border p-2 rounded-lg text-darkStroke border-text2 hover:border-primary hover:duration-300 hover:ease-in-out"
    >
      {icon}
      <span className="text-xl font-semibold">{text}</span>
    </a>
  );
};

export default SocialItem;
