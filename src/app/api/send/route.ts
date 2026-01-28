import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_VFCj7U6r_2DmYCnTzcShaFTVnhDk7iN6E");

export async function POST(request: Request) {
  // const { username, subject, email, content, file } = await request.json();

  const formData = await request.formData();
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;
  // file
  const file = formData.get("file") as File;
  const buffer = await Buffer.from(await file.arrayBuffer());

  try {
    // const { username, subject, email, content, file } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['naoki17pxt26@gmail.com'],
      subject: subject,
      react: EmailTemplate({
        username: username,
        email: email,
        content: content,
      }) as React.ReactElement,
      attachments: [{filename: file.filename, content: buffer }]
    });

    return Response.json({ ok: true });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}