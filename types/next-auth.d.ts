import { DefaultSession } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

interface DatabaseUser {
  id: string;
  name: string;
  email: string;
  emailVerified?: Date | null;
  image: string;
  role: string;
  credits: number;
  createdAt: Date;
  updatedAt: Date;
}

declare module 'next-auth' {
  interface User extends DatabaseUser {}

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    user?: DatabaseUser;
  }
}
