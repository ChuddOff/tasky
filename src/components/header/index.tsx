import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";

const Header = () => {
  return (
    <Navbar
      isBordered={true}
      className="select-none light:bg-white dark:bg-[#141417] w-full flex justify-between"
    >
      <NavbarBrand>
        <Link href="/">
          <p className="font-bold text-[24px] uppercase text-black">Tasky</p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="flex gap-[5px]">
            <Image
              src="/question.svg"
              alt="search"
              width={22}
              height={22}
              className="cursor-pointer h-[22px] dark:invert"
            />
            <p className="font-normal text-[18px] text-black">
              Как исользовать?
            </p>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Link className={"text-violet uppercase"} href="/wallet">
            <Image
              src="/wallet.svg"
              alt="wallet"
              width={32}
              height={32}
              className="cursor-pointer h-[32px] dark:invert"
            />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button href="/login" className="flex gap-[5px]">
            Войти
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
