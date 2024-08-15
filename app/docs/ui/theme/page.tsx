import Symbol from "@yakad/symbols";
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
import Link from "next/link";

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
            <Td> "light" | "dark" | "system"</Td>
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
        <GridItem sm={12} xl={4}>
          <Theme mode="light">
            <Card align="center">
              <Stack align="center">
                <Symbol icon="light_mode"></Symbol>
                <div>Light</div>
              </Stack>
            </Card>
          </Theme>
        </GridItem>
        <GridItem sm={12} xl={4}>
          <Theme mode="dark">
            <Card align="center">
              <Stack align="center">
                <Symbol icon="dark_mode"></Symbol>
                <div>Dark</div>
              </Stack>
            </Card>
          </Theme>
        </GridItem>
        <GridItem sm={12} xl={4}>
          <Theme mode="system">
            <Card align="center">
              <Stack align="center">
                <Symbol icon="laptop"></Symbol>
                <div>System</div>
              </Stack>
            </Card>
          </Theme>
        </GridItem>
      </GridContainer>
      <h2>Theme Color</h2>
      <GridContainer columns={10}>
        <GridItem xs={12} md={5} xl={2}>
          <Theme color="green">
            <Card>
              <Stack align="center">
                <Symbol type="default" icon="color_lens" />
                <div>Green</div>
                <Button size="small" variant="filled">
                  Button
                </Button>
              </Stack>
            </Card>
          </Theme>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Theme color="red">
            <Card>
              <Stack align="center">
                <Symbol type="default" icon="color_lens" />
                <div>Red</div>
                <Button size="small" variant="filled">
                  Button
                </Button>
              </Stack>
            </Card>
          </Theme>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card>
            <Theme color="yellow">
              <span>
                <Stack align="center">
                  <Symbol type="default" icon="color_lens" />
                  <div>Yellow</div>
                  <Button size="small" variant="filled">
                    Button
                  </Button>
                </Stack>
              </span>
            </Theme>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Theme color="blue">
            <Card>
              <Stack align="center" color="Red">
                <Symbol type="default" icon="color_lens" />
                <div>Blue</div>
                <Button size="small" variant="filled">
                  Button
                </Button>
              </Stack>
            </Card>
          </Theme>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Theme color="purple">
            <Card>
              <Stack align="center">
                <Symbol type="default" icon="color_lens" />
                <div>Purple</div>
                <Button size="small" variant="filled">
                  Button
                </Button>
              </Stack>
            </Card>
          </Theme>
        </GridItem>
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
