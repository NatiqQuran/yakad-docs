import { Button, Card, Container, GridContainer, GridItem } from "@yakad/ui";
import Symbol from "@yakad/symbols";

export default function Docsgride() {
  return (
    <Container maxWidth="md">
      <GridContainer>
        <GridItem md={12} lg={6} xl={4}>
          <Card>
            <Button
              variant="filled"
              loadingPosition="center"
              loadingVariant="dots"
              disabled
            ></Button>
          </Card>
        </GridItem>
        <GridItem md={12} lg={6} xl={4}>
          <Card>
            <Button
              variant="filled"
              icon="zoom_in"
              loadingPosition="auto"
              loadingVariant="scaleOut"
              disabled
            >
              Loading
            </Button>
          </Card>
        </GridItem>
        <GridItem md={12} lg={6} xl={4}>
          <Card>
            <Button
              variant="filled"
              loadingPosition="auto"
              loadingVariant="spinner"
              disabled
            ></Button>
          </Card>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
GridItem;
