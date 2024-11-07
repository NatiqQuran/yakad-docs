import Natiq from "@/app/NatiqLogo";
import { Getstart } from "@/app/content";
import LogoIcon from "@/app/logoicon";
import Symbol from "@yakad/symbols";
import {
    AppBar,
    Button,
    Card,
    Chekbox,
    Container,
    Hr,
    InputField,
    Row,
    Spacer,
    Stack,
    SvgIcon,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@yakad/ui";
import Link from "next/link";
import React from "react";

export default function Page() {
    const disabledConfirmButton = () => {};

    return (
        <Container maxWidth="md">
            <h1>SvgIcon</h1>
            <Hr />
            <p>To place the SvgIcon different sizes on the site, import it</p>
            <Card>
                <Row>
                    <span>
                        <code>{'import { SvgIcon } from "@yakad/ui"'}</code>
                        <br />
                        <br />
                        <code>{"<SvgIcon /><IconName /></SvgIcon>"}</code>
                    </span>
                    <Spacer />
                    <Button icon={<Symbol icon="content_copy" />}></Button>
                </Row>
            </Card>
            <p>Properties that are accepted as attributes:</p>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Property</Th>
                        <Th>Value</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Size</Td>
                        <Td>Number</Td>
                    </Tr>
                </Tbody>
            </Table>
            <h3>Size</h3>
            <p>
                With this property, you can adjust the size of the icons you
                place.
            </p>
            <Card style={{ maxWidth: "80rem" }}>
                <Row align="center">
                    <SvgIcon size={5}>
                        <LogoIcon />
                    </SvgIcon>
                    <SvgIcon size={10}>
                        <LogoIcon />
                    </SvgIcon>
                    <SvgIcon size={15}>
                        <LogoIcon />
                    </SvgIcon>
                    <SvgIcon size={15}>
                        <LogoIcon />
                    </SvgIcon>
                    <SvgIcon size={10}>
                        <LogoIcon />
                    </SvgIcon>
                    <SvgIcon size={5}>
                        <LogoIcon />
                    </SvgIcon>
                </Row>
            </Card>
            <h2>Examples</h2>
            <h3>Example 1</h3>
            <Card>
                <Row>
                    <SvgIcon size={5}>
                        <Natiq />
                    </SvgIcon>
                    <p>Natiq Quran</p>
                </Row>
            </Card>
            <h3>Example 2</h3>
            <AppBar>
                <SvgIcon size={5}>
                    <LogoIcon />
                </SvgIcon>
                <h1>Yakad</h1>
                <Spacer />
                <Link href="./docs">
                    <Button variant="text">documents</Button>
                </Link>
                <a href="https://github.com/NatiqQuran/yakad">
                    <Button variant="text">github</Button>
                </a>
            </AppBar>
            <h3>Example 3</h3>
            <Card>
                <Row style={{ gap: "10rem" }}>
                    <SvgIcon size={30}>
                        <LogoIcon />
                    </SvgIcon>
                    <h1 style={{ fontSize: "100px", color: "#3064f4" }}>
                        Yakad
                    </h1>
                </Row>
                <Stack align="center">
                    <Button variant="filled" size="large">
                        Get Start
                    </Button>
                    <p>or</p>
                    <Button variant="link">Learn More</Button>
                </Stack>
            </Card>
            <h2>Links</h2>
            <a
                target="_blank"
                href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/theme"
            >
                Source code in github
            </a>
            <br />
            <a
                target="_blank"
                href="https://github.com/NatiqQuran/yakad/tree/main/packages/ui/theme"
            >
                Source code in github
            </a>
        </Container>
    );
}
