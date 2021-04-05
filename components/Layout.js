import Link from 'next/link'
const Layout = ({children}) => {
  return (
    <>
   
  <header>
  <Link href="/"><a className="logo" >ModApk</a></Link>
<input className="hidden" type="checkbox" id="nav-toggle" style={{display: 'none'}} />
  <label for="nav-toggle" className="pointer-cursor" >
 
  </label>

  <nav>
   <div className="nav">
  
 
<ul><a href="">Nothing To Show 😟</a></ul>
</div>
  </nav>
</header>
<main>

<div className="main-head">
 <h1> Welcome To ModApk 👋</h1>
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
  <p>© Copyright 2021 - ModApk.vercer.app</p>
</footer>

    </>
  )
}



export default Layout
