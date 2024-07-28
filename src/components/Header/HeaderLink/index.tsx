interface HeaderLinkProps {
  text: string;
  onClick: () => void;
}

const HeaderLink: React.FC<HeaderLinkProps> = (props) => {
  return (
    <p className="text-body hover:cursor-pointer hover:text-primary">
      {props.text}
    </p>
  );
};

export default HeaderLink;
