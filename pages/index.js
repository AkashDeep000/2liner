import Head from 'next/head'

import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Link href="/status/love">
          <a>love</a>
        </Link>
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
    </>
  )
}
