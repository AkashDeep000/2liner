import { useRouter } from 'next/router';

export async function getStaticPaths() {
  return { paths:[{ params: { time: '1' } },
    { params: { time: '2' } }], fallback: false };
}

export default function Page({ data, tim }) {
  // Render data...
  
 
  return(
    <>
    <h5>Page Slug : {data}</h5>
    <b>Time : {tim}</b>
    </>
    )
}

// This gets called on every request
export async function getStaticProps({ params }) {
  // Fetch data from external API
  const { time }  = params;
  
  const data = time;
  const tim = JSON.stringify(new Date());
  // Pass data to the page via props
  return { props: { data, tim }, revalidate: 30}
}
