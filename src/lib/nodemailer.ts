'use server';
import nodemailer from 'nodemailer';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: SMTP_SERVER_HOST,
    port: 587,
    secure: true,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
});

export async function sendMail(
    {subject, text, html}: {
        subject: string;
        text: string[];
        html?: string;
    }) {
    try {
        await transporter.verify();
    } catch (error) {
        console.error('Something Went Wrong:', error);
        return;
    }
    const SITE_MAIL_RECEIVER = process.env.SITE_MAIL_RECEIVER ?? "sistemas.marabunta@marabunta.co";
    const info = await transporter.sendMail({
        from: SMTP_SERVER_USERNAME,
        to: SITE_MAIL_RECEIVER,
        subject: subject,
        text: text.join('\n'),
        html: html ? html : '',
    });
    console.log('Message Sent', info.messageId);
    console.log('Mail sent to', SITE_MAIL_RECEIVER);
    return info;
}