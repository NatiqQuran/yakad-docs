import {
  AppBar,
  Button,
  Container,
  Footer,
  Main,
  Page as Pg,
  Row,
  Spacer,
  Stack,
  SvgIcon,
  Theme,
} from "@yakad/ui";
import Link from "next/link";
import { Xbackground, XgetStart } from "@yakad/x";
import LogoIcon from "./logoicon";

export default function Home() {
  return (  
    <Pg>
      <AppBar style={{ padding: "3rem" }}>
        <SvgIcon size={5}>
          <LogoIcon />
        </SvgIcon>
        <h1>Yakad</h1>
        <Link href="./docs">
          <Button variant="text">documents</Button>
        </Link>
        <a href="https://github.com/NatiqQuran/yakad">
          <Button variant="text">github</Button>
        </a>
        <Spacer />
      </AppBar>
      <Main>
        <Xbackground variant="dotted">
          <XgetStart logo={<LogoIcon />}>
            <h1 style={{ fontSize: "7rem" }}>Yakad</h1>
            <p style={{ fontSize: "2rem" }}>
              <i>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
                fuga minima cum voluptates culpa id nisi ratione dolorem vitae
                nesciunt reiciendis ex, qui ullam voluptatibus? Blanditiis enim
                exercitationem ducimus nemo.
              </i>
            </p>
            <Link href="./docs">
              <Button variant="filled">Documents</Button>
            </Link>
            <h2>or</h2>
            <Button variant="link">Learn More!</Button>
          </XgetStart>
        </Xbackground>
      </Main>
    </Pg>
  );
}
