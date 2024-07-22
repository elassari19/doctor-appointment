import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { forgotPasswordSchema } from '@/schema/userSchema';
import { db } from '@/lib/db';
import { sendEmail } from '@/lib/nodeMailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = forgotPasswordSchema.parse(body);

    // email already exists
    const user = await db.user.findUnique({
      where: { email: email },
    });
    if (!user?.email)
      return NextResponse.json({ status: 404, message: 'Account not exists' });

    // send email to user
    const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });
    const link = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;
    await sendEmail(
      process.env.PUBLIC_NEXT_GMAIL_APP_USER!,
      'Foreget Password',
      link,
      `
      <h1>Reset New Password</h1>
      <p>Click the link below to reset your password</p>
      <a href="${link}">Reset Password</a>
      `
    );
  } catch (error: any) {
    // data not valid
    if (error.name === 'ZodError')
      return NextResponse.json({
        status: 402,
        message: error.issues,
      });

    // something wrong
    return NextResponse.json({
      status: 500,
      message: error,
    });
  }
}
