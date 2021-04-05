import Head from 'next/head'

import Link from 'next/link'
export default function Home() {
  return (
    <>
      <a href="/imgplay-mod" download="ImgPlayMod>
     <button styly={{
  background-color:  -webkit-linear-gradient(35deg, rgba(245, 51, 150, 1), rgba(245, 125, 86, 1));
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 20px;
}}>Download</button>
       </a>
      <br />
<hr />
  <Link href="/db">
    <a>DB</a>
          </Link>
          <br />
  <Link href="/client">
          <a>Client</a>
        </Link>
<Link href="/time">
    <a>Time</a>
</Link>
    </>
  )
}
