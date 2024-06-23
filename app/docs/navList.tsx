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
        { name: "AppBar", onclick: () => router.push("/docs/appbar") },
        { name: "Button", onclick: () => router.push("/docs/button") },
        { name: "Card", onclick: () => router.push("/docs/card") },
        { name: "InputField", onclick: () => router.push("/docs/inputfield") },
        { name: "CodeField", onclick: () => router.push("/docs/codefield") },
        { name: "Container", onclick: () => router.push("/docs/container") },
        { name: "Radio", onclick: () => router.push("/docs/Radio") },
        { name: "Checkbox", onclick: () => router.push("/docs/checkbox") },
        { name: "grid", onclick: () => router.push("/docs/grid") },
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
