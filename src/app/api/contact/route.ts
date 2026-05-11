import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/features/contact-form/model/schema";
import { Resend } from "resend";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;


const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: "kyrillossamer770@gmail.com",
  subject: `[Portfolio] ${subject}`,
  text: `From: ${name} <${email}>\n\n${message}`,
});

    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}