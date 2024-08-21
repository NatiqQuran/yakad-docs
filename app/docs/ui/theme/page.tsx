import {
  Button,
  Card,
  Container,
  GridContainer,
  GridItem,
  Hr,
  Row,
  Spacer,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Theme,
  Tr,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { iconsCode } from "@yakad/symbols/iconsCode";

interface themeModeProps {
  name: "Light" | "Dark" | "System";
  value: "light" | "dark" | "system";
  symbol: iconsCode;
}
const themeModeList: themeModeProps[] = [
  { name: "Light", value: "light", symbol: "light_mode" },
  { name: "Dark", value: "dark", symbol: "dark_mode" },
  { name: "System", value: "system", symbol: "contrast" },
];

interface themeColorProps {
  name: "Green" | "Red" | "Blue" | "Yellow" | "Purple";
  value: "green" | "red" | "blue" | "yellow" | "purple";
}
const themeColorList: themeColorProps[] = [
  { name: "Green", value: "green" },
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Yellow", value: "yellow" },
  { name: "Purple", value: "purple" },
];

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>Theme</h1>
      <Hr />
      <p>Discription</p>
      <Card>
        <Row>
          <span>
            <code>{'import { Theme } from "@yakad/ui"'}</code>
            <br />
            <br />
            <code>{"<Theme>Content</Theme>"}</code>
          </span>
          <Spacer />
          <Button icon={<Symbol icon="content_copy" />}></Button>
        </Row>
      </Card>
      <h2>Properties</h2>
      <p>Properties that are accepted as attributes:</p>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>mode</Td>
            <Td>{'"light" | "dark" | "system"'}</Td>
          </Tr>
          <Tr>
            <Td>color</Td>
            <Td>{'"green" | "red" | "yellow" | "blue" | "purple"'}</Td>
          </Tr>
          <Tr>
            <Td>zoom</Td>
            <Td>{" number "}</Td>
          </Tr>
        </Tbody>
      </Table>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <h2>Theme Mode</h2>
      <GridContainer>
        {themeModeList.map((themeModeItem, index) => (
          <GridItem key={index} sm={12} xl={4}>
            <Theme mode={themeModeItem.value}>
              <Card align="center">
                <Stack align="center">
                  <Symbol icon={themeModeItem.symbol}></Symbol>
                  <div>{themeModeItem.name}</div>
                </Stack>
              </Card>
            </Theme>
          </GridItem>
        ))}
      </GridContainer>
      <h2>Theme Color</h2>
      <GridContainer columns={10}>
        {themeColorList.map((themeColorItem, index) => (
          <GridItem key={index} xs={12} md={5} xl={2}>
            <Theme color={themeColorItem.value}>
              <Card>
                <Stack align="center">
                  <Symbol icon="color_lens" />
                  <div>{themeColorItem.name}</div>
                  <Button size="small" variant="filled">
                    Button
                  </Button>
                  <Button variant="filledtonal">Button</Button>
                </Stack>
              </Card>
            </Theme>
          </GridItem>
        ))}
      </GridContainer>
      <h2>Theme Zoom</h2>
      <h2>Coming Soon</h2>
      <a
        target="_blank"
        href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/theme"
      >
        <h3>Source code in github</h3>
      </a>
    </Container>
  );
}
