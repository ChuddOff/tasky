import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import DarkMode from "../darkmode";

const Header = () => {
  return (
    <Navbar
      isBordered={true}
      className="select-none bg-white dark:bg-[#141417]"
    >
      <NavbarBrand className="flex gap-[20px]">
        <Link href="/">
          <p className="font-bold text-[24px] uppercase text-black dark:text-white">
            Tasky
          </p>
        </Link>
        <DarkMode />
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
            <p className="font-normal text-[18px] text-black dark:text-white">
              Как использовать?
            </p>
          </Button>
        </NavbarItem>
        <NavbarItem></NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/signin"
            className="flex gap-[5px]"
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            Войти
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
