import { Container, GridContainer, GridItem, Card } from "@yakad/ui";
import Symbol from "@yakad/symbols";
import { IconCode } from "@yakad/symbols/build/types";

interface iconCardsProps {
  symbol: IconCode;
}
const iconCardsList: iconCardsProps[] = [
  { symbol: "widgets" },
  { symbol: "waving_hand" },
  { symbol: "verified" },
  { symbol: "zoom_out" },
  { symbol: "zoom_out" },
  { symbol: "airlines" },
  { symbol: "assessment" },
  { symbol: "vaccines" },
  { symbol: "web_stories" },
  { symbol: "face" },
  { symbol: "fact_check" },
  { symbol: "kayaking" },
];

export default function Example3() {
  return (
    <Container maxWidth="sm">
      <GridContainer>
        {iconCardsList.map((iconCardsList, index) => (
          <GridItem key={index} xs={6} sm={4} md={3} xl={2}>
            <Card align="center">
              <Symbol icon={iconCardsList.symbol} />
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
}
