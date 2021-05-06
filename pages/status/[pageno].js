import { connectToDatabase } from "../../util/mongodb";
import { useRouter } from 'next/router';


export async function getStaticPaths() {
  return { paths:[] , fallback: true };
}

export async function getStaticProps({ params }) {
  const { pageno }  = params;
  const skiper = (Number(pageno)-1)*5;
  const { db } = await connectToDatabase();
  
  const status = await db.collection('status')
    .find({})
    .skip(skiper)
    .limit(5)
    .toArray();
return {
    props: {
      status: JSON.parse(JSON.stringify(status)),
    },
  };

}

export default function Tweet({ status }) {
  const router = useRouter();
  if (router.isFallback) {
    return (<div className="spinner" role="spinner"><div className="spinner-icon"></div></div>)
  }

  return (
        <ul>
        {status.map((statu) => (
          <li>
            <h2>{statu.content}</h2>
          
          </li>
        ))}
      </ul>
  );
}