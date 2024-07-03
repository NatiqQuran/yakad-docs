import { AppBar, Button, Main, Page as Pg, Spacer, SvgIcon } from "@yakad/ui";
import Link from "next/link";
import LogoIcon from "./logoicon";
import { Getstart, Cards, Tables } from "./content";
import IntroFooter from "./footer";

export default function Home() {
  return (
    <Pg>
      <IntroHeader />
      <Main>
        <Getstart />
        <Cards />
        <Tables />
        <IntroFooter />
      </Main>
    </Pg>
  );
}

function IntroHeader() {
  return (
    <AppBar>
      <SvgIcon size={5}>
        <LogoIcon />
      </SvgIcon>
      <h1>Yakad</h1>
      <Spacer />
      <Link href="./docs">
        <Button variant="text">documents</Button>
      </Link>
      <a href="https://github.com/NatiqQuran/yakad">
        <Button variant="text">github</Button>
      </a>
    </AppBar>
  );
}
