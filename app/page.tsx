import { authOptions } from '@/auth.options';
import HomeComponent from '@/components/home';
import { getServerSession } from 'next-auth/next';
async function page() {
  const session = await getServerSession(authOptions);
  return <HomeComponent user={session?.user} />;
}

export default page;
