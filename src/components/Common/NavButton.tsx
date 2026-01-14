interface ButtonType {
  placeholder: string;
}

const NavButton = ({ placeholder }: ButtonType) => {
  return <button className="bg-slate-900 wrap-break-word  font-arimo font-light hover:bg-slate-900/80 transition-all ease-linear cursor-pointer rounded-full text-white px-4 py-2.5">{placeholder}</button>;
};

export default NavButton;
