import Link from 'next/link'
const Layout = ({children}) => {
  return (
    <>
   
  <header>
  <Link href="/"><a className="logo" >2Liner</a></Link>
<input className="hidden" type="checkbox" id="nav-toggle" style={{display: 'none'}} />
  <label for="nav-toggle" className="pointer-cursor" >
 
  </label>

  <nav>
   <div className="nav">
  
  <ul><a href="/status">STATUS</a>
  <li><a href="/status/attitude">Attitude</a></li>
  <li><a href="/status/love">Love</a></li>
  <li><a href="/status/sad">Sad</a></li>
  <li><a href="/status/best">Best</a></li>
</ul>

 <ul><a href="/hindi-status">HINDI STATUS</a>
  <li><a href="/hindi-status/attitude">Attitude</a></li>
  <li><a href="/hindi-status/love">Love</a></li>
  <li><a href="/hindi-status/bewafa">Bewafa</a></li>
  <li><a href="/hindi-status/dosti">Dosti</a></li>
</ul>
  <ul><a href="#">PAGES</a>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/privacy">Privacy Police</a></li>
  <li><a href="/terms-and-conditions">Terms Conditions</a></li>
</ul>
</div>
  </nav>
</header>
<main>

<div className="main-head">
 <h1> This is Heading 😊</h1>
</div>
<div className="main-content">
   {children}
</div>

</main>
<sidenav>
  I'm SideNav
</sidenav>
<sidebar>
  I'm SideBar
</sidebar>
<footer>
  <p>© Copyright 2021 - 2Liner.com</p>
</footer>

    </>
  )
}



export default Layout