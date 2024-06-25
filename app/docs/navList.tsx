"use client";

import { useRouter } from "next/navigation";
import { XmenuList } from "@yakad/x";

export default function NavList() {
  const router = useRouter();

  const menuItems = [
    {
      name: "Overview",
      onclick: () => router.push("/docs"),
    },
    {
      name: "Yakad UI",
      childs: [
        { name: "AppBar", onclick: () => router.push("/docs/ui/appbar") },
        { name: "Button", onclick: () => router.push("/docs/ui/button") },
        { name: "Card", onclick: () => router.push("/docs/ui/card") },
        {
          name: "InputField",
          onclick: () => router.push("/docs/ui/inputfield"),
        },
        { name: "CodeField", onclick: () => router.push("/docs/ui/codefield") },
        { name: "Container", onclick: () => router.push("/docs/ui/container") },
        { name: "Radio", onclick: () => router.push("/docs/ui/Radio") },
        { name: "Checkbox", onclick: () => router.push("/docs/ui/checkbox") },
        { name: "grid", onclick: () => router.push("/docs/ui/grid") },
        { name: "hr", onclick: () => router.push("/docs/ui/hr") },
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
    { name: "Yakad Symbol", onclick: () => router.push("/docs/symbol") },
    {
      name: "Yakad Lib",
    },
  ];

  return <XmenuList menuItems={menuItems} />;
}
