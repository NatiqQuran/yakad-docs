import { AppBar, Page, Main } from "@yakad/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Page>
      <AppBar>
        <h1>Yakad Docs</h1>
      </AppBar>
      <Main>{children}</Main>
    </Page>
  );
}
