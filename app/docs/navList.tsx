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
                {
                    name: "AppBar",
                    onclick: () => router.push("/docs/ui/appbar"),
                },
                {
                    name: "Button",
                    onclick: () => router.push("/docs/ui/button"),
                },
                { name: "Card", onclick: () => router.push("/docs/ui/card") },
                {
                    name: "InputField",
                    onclick: () => router.push("/docs/ui/inputfield"),
                },
                {
                    name: "CodeField",
                    onclick: () => router.push("/docs/ui/codefield"),
                },
                {
                    name: "Container",
                    onclick: () => router.push("/docs/ui/container"),
                },
                { name: "Radio", onclick: () => router.push("/docs/ui/radio") },
                {
                    name: "CheckBox",
                    onclick: () => router.push("/docs/ui/checkBox"),
                },
                { name: "Grid", onclick: () => router.push("/docs/ui/grid") },
                { name: "Hr", onclick: () => router.push("/docs/ui/hr") },
                {
                    name: "ClickOusideListiner",
                    onclick: () => router.push("/docs/ui/clickoutsidelistiner"),
                },
                {
                    name: "Footer",
                    onclick: () => router.push("/docs/ui/footer"),
                },
                {
                    name: "Row",
                    onclick: () => router.push("/docs/ui/row"),
                },
                { name: "Stack", onclick: () => router.push("/docs/ui/stack") },
                { name: "Table", onclick: () => router.push("/docs/ui/table") },
                { name: "Theme", onclick: () => router.push("/docs/ui/theme") },
                {
                    name: "Loading",
                    onclick: () => router.push("/docs/ui/loading"),
                },
                {
                    name: "SvgIcon",
                    onclick: () => router.push("/docs/ui/svgIcon"),
                },
            ],
        },

        {
            name: "Yakad X",
            childs: [
                {
                    name: "Xbackground",
                    onclick: () => router.push("/docs/X/Xbackground"),
                },
                {
                    name: "XgetStart",
                    onclick: () => router.push("/docs/X/XgetStart"),
                },
                {
                    name: "XloginBox",
                    onclick: () => router.push("/docs/X/XloginBox"),
                },
                {
                    name: "XmenuList",
                    onclick: () => router.push("/docs/X/Xmenu"),
                },
                {
                    name: "Xpanel",
                    onclick: () => router.push("/docs/X/Xpanel"),
                },
                {
                    name: "XdataMap",
                    onclick: () => router.push("/docs/X/XdataMap"),
                },
                {
                    name: "Xtable",
                    onclick: () => router.push("/docs/X/Xtable"),
                },
            ],
        },
        { name: "Yakad Symbol", onclick: () => router.push("/docs/symbol") },
        {
            name: "Yakad Lib",
        },
    ];

    return <XmenuList items={menuItems} />;
}
