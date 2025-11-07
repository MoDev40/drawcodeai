import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    emailVerified?: Date | null | undefined;
    image: string;
    role: string;
    credit: number;
    createdAt: Date;
    updatedAt: Date;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
