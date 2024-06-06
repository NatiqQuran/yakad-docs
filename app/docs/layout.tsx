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
        { name: "InputField", onclick: () => router.push("/docs/inputfield") },
        { name: "CodeField", onclick: () => router.push("/docs/codefield") },
        { name: "Container", onclick: () => router.push("/docs/container") },

        {
          name: "clickAwayListiner",
          onclick: () => router.push("/docs/clickawaylistiner"),
        },
        { name: "Footer", onclick: () => router.push("/docs/footer") },
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
