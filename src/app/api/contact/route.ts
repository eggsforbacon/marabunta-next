import {NextRequest, NextResponse} from 'next/server'
import {sendMail} from "@/lib/nodemailer";
import GeneralEmail from "@/emails/general-email";
import {render} from "@react-email/render";

export async function POST(request: NextRequest) {
    const data: { email: string, message: string } = await request.json();
    const subject = `Nueva cotización en Marabunta! | (${data.email})`;
    const text = data.message.split("\n");
    console.log(">>> TEXT: ", text);
    const html = await render(GeneralEmail({
        email: data.email, message: text,
    }), {
        pretty: true,
    });
    console.info(">>> HTML: ", html);
    return sendMail({subject, text, html}).then((result) => {
        if (result?.accepted.length ?? 0 > 0) {
            return NextResponse.json({
                status: 200,
                message: "Mensaje entregado con éxito"
            });
        } else {
            return NextResponse.json({
                status: 500,
                message: "Unknown server error."
            })
        }
    }).catch((error) => {
        return NextResponse.json({
            status: error.status,
            message: error.message,
        })
    });
}