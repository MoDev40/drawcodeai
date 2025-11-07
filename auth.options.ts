import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { prisma } from './lib/client';

export const authOptions = {
  secret: process.env.AUTH_SECRET as string,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      const data = await prisma.user.findUnique({
        where: { email: token.email! },
      });
      const user = { ...data, emailVerified: undefined };
      return { ...token, user } as unknown as any;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: token.user,
      } as unknown as any;
    },
  },
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthOptions;
