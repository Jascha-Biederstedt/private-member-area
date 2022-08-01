import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Join = () => {
  const router = useRouter();

  const { data: session, status } = useSession();

  const loading = status === 'loading';

  if (loading) {
    return null;
  }

  if (!session) {
    router.push('/');
    return;
  }

  if (session.user.isSubscriber) {
    router.push('/members');
    return;
  }

  return (
    <div>
      <Head>
        <title>Private Area</title>
        <meta name='description' content='Private Area' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='text-center '>
        <h1 className=' mt-20 font-extrabold text-2xl'>Private Area</h1>

        <p className='mt-10'>Join for just $5/m</p>

        <button className='mt-10 bg-black text-white px-5 py-2'>
          Create a subscription
        </button>
      </div>
    </div>
  );
};

export default Join;
