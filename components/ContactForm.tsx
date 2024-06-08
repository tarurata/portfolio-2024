// components/ContactForm.tsx
'use client';

import { FormEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm: React.FC = () => {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!recaptchaToken) {
            alert('Please complete the reCAPTCHA.');
            return;
        }

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        formData.append('recaptchaToken', recaptchaToken);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Failed to send message.');
        }
    };

    return (
        <form className="w-full max-w-lg mt-8 bg-white bg-opacity-75 rounded-lg p-8 text-black" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-3 py-2 border rounded-lg" id="message" name="message" rows={4} required></textarea>
            </div>
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(token) => setRecaptchaToken(token)}
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
