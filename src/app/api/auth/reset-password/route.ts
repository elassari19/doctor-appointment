import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { resetPasswordSchema } from '@/schema/userSchema';
import { db } from '@/lib/db';
import { hash } from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, newPassword } = resetPasswordSchema.parse(body);

    // email already exists
    const user = await db.user.findUnique({
      where: { email: email },
    });
    if (!user?.email)
      return NextResponse.json({ status: 404, message: 'Account not exists' });

    // hash password
    const HashNewPassword = await hash(newPassword, 10);

    // update password
    await db.user.update({
      where: { email: email },
      data: { password: HashNewPassword },
    });
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
