import Logo from "./Logo";

const NavigationBar = () => {
  return (
    <div className="mx-auto flex h-11 w-full max-w-[--max-width] items-center justify-between px-4">
      <Logo />
    </div>
  );
};

export default NavigationBar;
