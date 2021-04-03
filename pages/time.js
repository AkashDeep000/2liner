export default function Page({ data }) {
  // Render data...
  
 const  date = Date(data.utc_datetime);
  return(
    <>
    <li>{data.timezone}</li>
    <li>{date}</li>
    </>
    )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`http://worldtimeapi.org/api/ip`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data }, revalidate: 60}
}
