interface ButtonType {
  placeholder: string;
}

const NavButton = ({ placeholder }: ButtonType) => {
  return <button className="bg-slate-950 rounded-md">{placeholder}</button>;
};

export default NavButton;
