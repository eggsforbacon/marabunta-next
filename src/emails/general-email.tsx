import {
    Html,
    Head,
    Preview,
    Tailwind,
    Body,
    Text,
    Link,
    Section,
    Row,
    Container, Hr,
} from "@react-email/components";

const GeneralEmail = (
    { email, message}: { email: string, message: string }) => {

    const baseURL = process.env.REACT_EMAIL_URL ?? "/static";

    return (
        <Html>
            <Head/>
            <Tailwind config={{
                theme: {
                    extend: {
                        colors: {
                            brand: {
                                blue: "#1F3575",
                                orange: "#E84E16",
                            },
                        },
                    },
                },
            }}>
                <Body className="mx-auto my-auto bg-white px-4 font-sans">
                    <Preview>Nueva encuesta en el cotizador</Preview>
                    <Container
                        className="mx-auto my-10 max-w-[1200px] rounded border border-neutral-500 border-solid p-6">
                        <Section>
                            <Row>
                                <Text className="text-6xl font-gotham font-black">Nueva cotización: {email}</Text>
                            </Row>
                        </Section>
                        <Hr className="mx-0 my-6 w-full border border-neutral-300 border-solid"/>
                        <Section>
                            <Row>
                                <Text>"{message}"</Text>
                            </Row>
                            <Row>
                                <Text><strong>Correo de contacto provisto:</strong> <Link
                                    href={`mailto:${email}`}>{email}</Link></Text>
                            </Row>
                        </Section>
                        <Hr className="mx-0 my-6 w-full border border-neutral-300 border-solid"/>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default GeneralEmail;