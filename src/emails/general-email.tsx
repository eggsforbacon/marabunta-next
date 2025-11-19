import {
    Html,
    Head,
    Preview,
    Body,
    Text,
    Link,
    Section,
    Row,
    Container,
    Hr,
} from "@react-email/components";

const GeneralEmail = (
    {email, message}: { email: string, message: string[] }) => {

    return (
        <Html>
            <Head/>
            <Preview>Nueva encuesta en el cotizador</Preview>
            <Body style={bodyStyle}>
                <Container style={containerStyle}>
                    <Section>
                        <Row>
                            <Text style={headingStyle}>Nueva cotización</Text>
                        </Row>
                    </Section>
                    <Hr style={hrStyle}/>
                    <Section>
                        {message.map((line, i) => {
                            if (line === "") return <></>;
                            if (line === "---") return <Hr key={i} style={hrStyle}/>;
                            if (line === "Servicios:" || line === "Elementos:") return <Text key={i}
                                                                                             style={classStyle}>{line}</Text>;
                            const parts = line.split("?")
                            return (
                                <Row key={i}>
                                    <Text style={textStyle}>
                                        <span style={titleInlineStyle}>{parts[0]}?</span> {parts[1]}
                                    </Text>
                                </Row>
                            );
                        })}
                        <Row>
                            <Text style={textStyle}>
                                <strong style={strongStyle}>Correo de contacto provisto:</strong>{" "}
                                <Link href={`mailto:${email}`} style={linkStyle}>{email}</Link>
                            </Text>
                        </Row>
                    </Section>
                    <Hr style={hrStyle}/>
                </Container>
            </Body>
        </Html>
    );
}


const bodyStyle = {
    margin: '0 auto',
    padding: '0 16px',
    backgroundColor: '#FAFAFA',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    width: '100%',
};

const containerStyle = {
    margin: '40px auto',
    maxWidth: '600px',
    border: '1px solid #737373',
    borderRadius: '4px',
    padding: '24px',
    backgroundColor: '#ffffff',
};

const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#0e0e0e',
    margin: '0 0 16px 0',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
    lineHeight: '1.3',
};

const textStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#0e0e0e',
    margin: '0 0 12px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    wordWrap: 'break-word' as const,
};

const titleInlineStyle = {
    fontWeight: 'bold',
    color: '#0e0e0e',
};

const classStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    lineHeight: '1.5',
    color: '#c91132',
    margin: '0 0 12px 0',
    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
}

const strongStyle = {
    fontWeight: 'bold',
    color: '#0e0e0e',
};

const linkStyle = {
    color: '#129cc0',
    textDecoration: 'underline',
};

const hrStyle = {
    margin: '24px 0',
    border: 'none',
    borderTop: '1px solid #d4d4d4',
    width: '100%',
};

export default GeneralEmail;