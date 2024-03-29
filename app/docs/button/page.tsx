import {
  AppBar,
  Button,
  Container,
  Footer,
  Main,
  Page,
  Row,
  Spacer,
  Stack,
  Hr,
  Card,
  SvgIcon,
  Loading,
} from "@yakad/ui";
import Symbol from "@yakad/symbols";
import Link from "next/link";

export default function DocsButton() {
  return (
    <Container maxWidth="lg">
      <h1>Yakad Buttons</h1>

      <Main>
        <Container maxWidth="md">
          <h1>Size:</h1>
          <Stack>
            <Card
              style={{
                maxWidth: "90rem",
                margin: "auto",
              }}
            >
              <Row
                style={{
                  justifyContent: "center",
                }}
              >
                <Button variant="filledtonal" size="small">
                  SMALL
                </Button>
                <Button variant="filledtonal" size="medium">
                  MEDIUM
                </Button>
                <Button variant="filledtonal" size="large">
                  LARGE
                </Button>
              </Row>
              <Hr />
              <h2>All kinds of buttons with different sizes</h2>
              <h2>Code type : TS</h2>
            </Card>
            <h1>Variant:</h1>
            <Card
              style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}
            >
              <Row
                style={{
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <Button variant="elevated">ELEVATED</Button>
                <Button variant="fab">FAB</Button>
                <Button variant="filled">FILLED</Button>
                <Button variant="filledtonal">FILLEDTONAL</Button>
              </Row>
              <Row
                style={{
                  justifyContent: "center",
                }}
              >
                <Button variant="link">LINK</Button>
                <Button variant="outlined">OUTLINEDE</Button>
                <Button variant="text">TEXT</Button>
                <Button variant="tonal">TONAL</Button>
              </Row>
              <Hr />
              <h2>A variety of buttons with different shapes to use</h2>
              <h2>Code type : TS</h2>
            </Card>
            <h1>Borderstyle:</h1>

            <div style={{ borderStyle: "2rem" }}>
              <Card
                style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}
              >
                <Row
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Button variant="filledtonal" borderStyle="none">
                    NONE
                  </Button>
                  <Button variant="filledtonal" borderStyle="rounded">
                    ROUNDED
                  </Button>
                  <Button variant="filledtonal" borderStyle="semi">
                    SEMI
                  </Button>
                  <Button variant="filledtonal" borderStyle="squircle">
                    squircle
                  </Button>
                </Row>
                <Hr />
                <h2>A variety of buttons with different shapes to use </h2>
                <h2>Code type : TS</h2>
              </Card>
            </div>
            <h1>icon:</h1>
            <Card
              style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}
            >
              <Row
                style={{
                  justifyContent: "center",
                }}
              >
                <Button variant="outlined" icon={<Symbol icon="search" />}>
                  Search
                </Button>
                <Button
                  iconPosition="end"
                  variant="outlined"
                  icon={<Symbol icon="search" />}
                >
                  Search
                </Button>
                <Button
                  variant="outlined"
                  icon={<Symbol icon="search" />}
                ></Button>
              </Row>
              <Hr />
              <h2>All kinds of buttons with different sizes</h2>
              <h2>Code type : TS</h2>
            </Card>
            <ButtonLoading />
          </Stack>
        </Container>
      </Main>
    </Container>
  );
}

function ButtonLoading() {
  return (
    <div>
      <h1>Loading:</h1>
      <Card style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}>
        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="dots"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="dots"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="dots"
            iconPosition="end"
            disabled
          ></Button>
        </Row>
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="scaleOut"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="scaleOut"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="scaleOut"
            disabled
          ></Button>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="spinner"
            disabled
          >
            Loading
          </Button>{" "}
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="spinner"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>{" "}
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingPosition="auto"
            loadingVariant="spinner"
            disabled
          ></Button>
        </Row>
        <Hr />
        <h2>All kinds of buttons with different sizes</h2>
        <h2>Code type : TS</h2>
      </Card>
      <h1>Loading Variant:</h1>

      <Card style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}>
        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingVariant="dots"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingVariant="scaleOut"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon={<Symbol icon="search" />}
            loadingVariant="spinner"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
        </Row>
        <Hr />
        <h2>All kinds of buttons with different sizes</h2>
        <h2>Code type : TS</h2>
      </Card>
    </div>
  );
}

function ButtonIcon() {
  return <div></div>;
}
