import { Xpanel } from "@yakad/x";
import NavList from "./navList";
import IntroFooter from "../footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Xpanel name="Yakad Docs" navigationChildren={<NavList />}>
            <div style={{ paddingBottom: "5rem" }}>{children}</div>
            <IntroFooter />
        </Xpanel>
    );
}
