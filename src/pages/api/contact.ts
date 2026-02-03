export const prerender = false; // Ensure this is server-rendered

import type { APIRoute } from "astro";
import Mailgun from "mailgun.js";
import formData from "form-data";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const type = data.get("type");
    const message = data.get("message");

    // Validate inputs
    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }

    // Mailgun Setup
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
        username: "api",
        key: import.meta.env.MAILGUN_API_KEY,
    });

    const domain = import.meta.env.MAILGUN_DOMAIN;
    const toEmail = import.meta.env.CONTACT_EMAIL || "kfjiztom@gmail.com"; // Fallback or env var

    try {
        const emailData = {
            from: `Untamed Blooms Form <postmaster@${domain}>`,
            to: [toEmail],
            subject: `New Inquiry: ${type} - ${name}`,
            text: `
Name: ${name}
Email: ${email}
Inquiry Type: ${type}

Message:
${message}
      `,
            html: `
        <h2>New Inquiry from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong></p>
        <p>${message.toString().replace(/\n/g, "<br>")}</p>
      `,
        };

        await mg.messages.create(domain, emailData);

        return new Response(
            JSON.stringify({
                message: "Success!",
            }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Mailgun Error:", error);
        return new Response(
            JSON.stringify({
                message: "Failed to send email. Please try again later.",
            }),
            { status: 500 }
        );
    }
};
