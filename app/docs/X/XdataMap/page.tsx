import LogoIcon from "@/app/logoicon";
import {
  Container,
  Hr,
  Tr,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  CodeBox,
} from "@yakad/ui";
import { XdataMap } from "@yakad/x";

const dataFromServer: any[] = [
  {
    name: "Mercedes-Benz",
    color: "black",
    type: "G_Class",
  },
  {
    name: "Maclaren",
    color: "red",
    type: "turbo",
  },
  {
    name: "BMW",
    color: "withe",
    type: "I8",
  },
  {
    name: "Ford",
    color: "withe",
    type: "t85",
  },
];

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>XdataMap</h1>
      <Hr />
      <p>A simple fast intro XdataMap</p>
      <CodeBox>
        <code>{'import { XgetStart } from "@yakad/x";'}</code>
        <br />
        <br />
        <code>{"<XgetStart>Contenet</XgetStart>"}</code>
      </CodeBox>
      <h2>Properties</h2>
      <p>Properties that are accepted as attributes:</p>
      <h2>Properties</h2>
      <h3>variant</h3>
      <XdataMap data={dataFromServer} />
    </Container>
  );
}
