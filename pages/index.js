import Head from 'next/head'

import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Link href="/status/love">
          <a>love</a>
        </Link>
  <Link href="/db">
          <a>DB</a>
        </Link>
    </>
  )
}
