import { AppBar, Container } from "@yakad/ui";
import { Xpanel } from "@yakad/x";

export default function Page() {
    return (
        <Xpanel
            navigationchildren={<h1>Flame</h1>}
            name="Menu"
            appbarchildren={<h1>Oleg</h1>}
        >
            <Container size="md">
                <h2>Your content here</h2>
            </Container>
        </Xpanel>
    );
}
