import Head from 'next/head'

import Link from 'next/link'
export default function Home() {
  return (
    <>
      <a href="/imgplay-mod" download="ImgPlayMod>
     <button className="logo">Download</button>
       </a>
      <br />
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
