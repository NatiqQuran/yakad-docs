import { Xpanel } from "@yakad/x";
import NavList from "./navList";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Xpanel name="Yakad Docs" navigationChildren={<NavList />}>
      {children}
    </Xpanel>
  );
}
