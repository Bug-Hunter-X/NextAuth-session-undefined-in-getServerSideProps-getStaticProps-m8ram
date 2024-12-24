```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session: session,
    },
  };
}
export default function MyComponent({ session }) {
  // ... use session here, it will be available
  return (
    <div>
       {/* ... your JSX ... */}
       <p>Session: {JSON.stringify(session)}</p>
    </div>
  );
}
```