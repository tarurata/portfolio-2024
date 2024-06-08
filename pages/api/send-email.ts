// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const RATE_LIMIT = 5;
const TIME_FRAME = 60 * 1000; // 1 minute
let requests = 0;

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        if (requests >= RATE_LIMIT) {
            return res.status(429).json({ error: 'Too many requests. Please try again later.' });
        }

        const { name, email, message, recaptchaToken } = req.body;

        // Verify reCAPTCHA token
        const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`, {
            method: 'POST',
        });
        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return res.status(400).json({ error: 'reCAPTCHA verification failed. Please try again.' });
        }

        requests++;
        setTimeout(() => {
            requests--;
        }, TIME_FRAME);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: 'saycheese5963@gmail.com',
            subject: `Contact Form Submission from ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
