import {
  Container,
  GridContainer,
  GridItem,
  Button,
  Card,
  Row,
  Hr,
  Stack,
  Spacer,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { access } from "fs";
import Home from "@/app/page";

export default function DocsAppbar() {
  return (
    <Container maxWidth="md">
      <h1 style={{ fontSize: "3rem" }}>Yakad Symbols</h1>
      <h2>Symbol Types</h2>
      <GridContainer columns={10}>
        <GridItem xs={12} md={5} xl={2}>
          <Card>
            <Stack align="center">
              <Symbol type="default" icon="settings" />
              <div>default</div>
            </Stack>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Stack align="center">
              <Symbol type="twoTone" icon="settings" />
              <div>twoTone</div>
            </Stack>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Stack align="center">
              <Symbol type="outlined" icon="settings" />
              <div>outlined</div>
            </Stack>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Stack align="center">
              <Symbol type="round" icon="settings" />
              <div>round</div>
            </Stack>
          </Card>
        </GridItem>
        <GridItem xs={12} md={5} xl={2}>
          <Card align="center">
            <Stack align="center">
              <Symbol type="sharp" icon="settings" />
              <div>sharp</div>
            </Stack>
          </Card>
        </GridItem>
      </GridContainer>
      <h2>Symbols Sizes</h2>
      <GridContainer>
        <GridItem sm={12} xl={4}>
          <Card align="center">
            <Stack align="center">
              <Symbol size={"small"} icon="groups" />
              <div>small</div>
            </Stack>
          </Card>
        </GridItem>
        <GridItem sm={12} xl={4}>
          <Card align="center">
            <Stack align="center">
              <Symbol size={"medium"} icon="groups" />
              <div>medium</div>
            </Stack>
          </Card>
        </GridItem>
        <GridItem sm={12} xl={4}>
          <Card align="center">
            <Stack align="center">
              <Symbol size={"large"} icon="groups" />
              <div>large</div>
            </Stack>
          </Card>
        </GridItem>
        <GridItem lg={1}></GridItem>
      </GridContainer>
      <h2>Symbol Buttons</h2>
      <Card>
        <Row align="center">
          <Button variant="outlined" icon={<Symbol icon="shopping_bag" />} />
          <Button variant="filledtonal" loadingVariant="dots">
            Loading
          </Button>
          <Button
            variant="filled"
            loadingPosition="auto"
            loadingVariant="scaleOut"
            disabled
          >
            jhtfvtyfgy
          </Button>
          <Button icon={<Symbol icon="login" />} />
          <Button icon={<Symbol icon="account_circle" />} />
          <Button icon={<Symbol icon="menu" />} />
          <Button
            variant="outlined"
            loadingPosition="auto"
            loadingVariant="spinner"
            disabled
          />
        </Row>
      </Card>
      <h2>Symbols Icon</h2>
      <Card>
        <Row align="center">
          <Symbol icon="home" />
          <Symbol icon="public" />
          <Symbol icon="delete" />
          <Symbol icon="settings" />
          <Symbol icon="star" />
          <Symbol icon="thumb_up_alt" />
          <Symbol icon="account_balance" />
          <Symbol icon="refresh" />
          <Symbol icon="verified_user" />
          <Symbol icon="logout" />
        </Row>
      </Card>
      <a href="https://fonts.google.com/icons" target="_blank">
        <p>Click on the link to see all icons Link</p>
      </a>
    </Container>
  );
}
