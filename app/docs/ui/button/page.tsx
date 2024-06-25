import {
  Button,
  Container,
  Main,
  Row,
  Stack,
  Hr,
  Card,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
} from "@yakad/ui";

export default function Page() {
  return (
    <Main>
      <Container maxWidth="md">
        <h1>Yakad Buttons</h1>

        <p style={{ fontSize: "18px" }}>
          Properties that are accepted as attributes:
        </p>
        <Table>
          <Thead>
            <Tr>
              <Th>Property</Th>
              <Th>Value</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Size</Td>
              <Td>small | medium | large</Td>
            </Tr>
            <Tr>
              <Td>Variant</Td>
              <Td>
                text | outlined | filled | filledtonal | tonal | elevated | link
                | fab
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h1>Size:</h1>
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
        </Card>
        <h1>Variant:</h1>
        <Card style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}>
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
        </Card>

        <h1>FAB size:</h1>
        <Card
          style={{
            maxWidth: "90rem",
            margin: "auto",
          }}
        >
          <Stack>
            <Row
              style={{
                justifyContent: "center",
              }}
            >
              <Button variant="fab" size="small">
                SMALL
              </Button>
              <Button variant="fab" size="medium">
                MEDIUM
              </Button>
              <Button variant="fab" size="large">
                LARGE
              </Button>
            </Row>
            <Row
              style={{
                justifyContent: "center",
              }}
            >
              <Button variant="fab" size="small" icon="add"></Button>
              <Button variant="fab" size="medium" icon="add"></Button>
              <Button variant="fab" size="large" icon="add"></Button>
            </Row>
          </Stack>
          <Hr />
          <h2>All kinds of FAB buttons with different sizes</h2>
        </Card>

        <h1>Borderstyle:</h1>

        <Card style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}>
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
        </Card>
        <h1>icon:</h1>
        <Card style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}>
          <Row
            style={{
              justifyContent: "center",
            }}
          >
            <Button variant="outlined" icon="search">
              Search
            </Button>
            <Button iconPosition="end" variant="outlined" icon="search">
              Search
            </Button>
            <Button variant="outlined" icon="search"></Button>
          </Row>
          <Hr />
          <h2>All kinds of buttons with different sizes</h2>
        </Card>
        <ButtonLoading />
      </Container>
    </Main>
  );
}

function ButtonLoading() {
  return (
    <Stack align="start">
      <h1>Loading:</h1>
      <Card style={{ maxWidth: "90rem", margin: "auto", padding: "50px" }}>
        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="dots"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="dots"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="dots"
            iconPosition="end"
            disabled
          ></Button>
        </Row>
        <Row style={{ justifyContent: "center", padding: "20px" }}>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="scaleOut"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="scaleOut"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="scaleOut"
            disabled
          ></Button>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="spinner"
            disabled
          >
            Loading
          </Button>{" "}
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="spinner"
            iconPosition="end"
            disabled
          >
            Loading
          </Button>{" "}
          <Button
            variant="outlined"
            icon="search"
            loadingPosition="auto"
            loadingVariant="spinner"
            disabled
          ></Button>
        </Row>
        <Hr />
        <h2>All kinds of buttons with different sizes</h2>
      </Card>
      <h1>Loading Variant:</h1>

      <Card style={{ maxWidth: "90rem", padding: "50px" }} align="center">
        <Row align="center">
          <Button
            variant="outlined"
            icon="search"
            loadingVariant="dots"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingVariant="scaleOut"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
          <Button
            variant="outlined"
            icon="search"
            loadingVariant="spinner"
            loadingPosition="center"
            disabled
          >
            Loading
          </Button>
        </Row>
        <Hr />
        <h2>All kinds of buttons with different sizes</h2>
      </Card>
    </Stack>
  );
}

function ButtonIcon() {
  return <div></div>;
}
