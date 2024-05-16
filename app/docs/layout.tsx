"use client";

import { useRouter } from "next/navigation";
import { Xpanel } from "@yakad/x";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const menuItems = [
    {
      name: "Overview",
      onclick: () => router.push("/docs"),
    },
    {
      name: "Yakad UI",
      childs: [
        { name: "AppBar", onclick: () => router.push("/docs/appbar") },
        { name: "Button", onclick: () => router.push("/docs/button") },
        { name: "Card", onclick: () => router.push("/docs/card") },
        { name: "Form", onclick: () => router.push("/docs/form") },
        { name: "Codefield", onclick: () => router.push("/docs/codefield") },
        { name: "inputfield", onclick: () => router.push("/docs/inputfield") },
        { name: "Container", onclick: () => router.push("/docs/container") },
        { name: "Footer" },
      ],
    },

    {
      name: "Yakad X",
      childs: [
        { name: "XbackButton" },
        { name: "Xbackground" },
        { name: "XforwardButton" },
        { name: "Xgetstart" },
        { name: "Xpanel" },
        { name: "Xtable" },
      ],
    },
    {
      name: "Yakad Symbols",
      childs: [
        { name: "Users" },
        { name: "Organizations" },
        { name: "Permissions" },
      ],
    },
    {
      name: "Yakad Lib",
      childs: [
        { name: "Users" },
        { name: "Organizations" },
        { name: "Permissions" },
      ],
    },
  ];

  return (
    <Xpanel name="Yakad Docs" menuItems={menuItems}>
      {children}
    </Xpanel>
  );
}
