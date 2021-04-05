import Head from 'next/head'

import Link from 'next/link'
export default function Home() {
  return (
    <>
    <a href="https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_zde6d7912f6bd94647f830f19_f1007d34eaec0729d_d20210405_m175843_c000_v0001073_t0056" download="ImgPlayMod">
     <button className="download">Download</button>
       </a>
      <br />
<hr />
    
        <br />
  <Link href="/db">
    <a>DB</a>
          </Link>
          <br />
  <Link href="/client">
          <a>Client</a>
        </Link>
          <br />
  <Link href="/time">
          <a>Time</a>
        </Link>
    </>
  )
}
