import {NextRequest, NextResponse} from 'next/server'
import {sendMail} from "@/lib/nodemailer";
import GeneralEmail from "@/emails/general-email";
import {render} from "@react-email/render";

export async function POST(request: NextRequest) {
    const data: {
        name: string;
        project: string;
        industries: string;
        city: string;
        phone: string;
        email: string;
        message: string } = await request.json();
    console.log(data);
    const subject = `Nueva cotización en Marabunta! | (${data.email})`;
    const text = data.message.split("\n");
    const html = await render(GeneralEmail({
        name: data.name,
        project: data.project,
        industries: data.industries,
        city: data.city,
        phone: data.phone,
        email: data.email,
        message: text,
    }), {
        pretty: true,
    });
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