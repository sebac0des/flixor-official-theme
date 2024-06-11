import Link from "next/link";

// Components
import Logo from "./logo";
import { Button } from "./ui/button";

interface Props {
  buttonText: string;
  buttonUrl: string;
}

const Header = (props: Props) => {
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <Logo />
      <Button asChild>
        <Link href={props.buttonUrl}>{props.buttonText}</Link>
      </Button>
    </header>
  );
};

export default Header;
