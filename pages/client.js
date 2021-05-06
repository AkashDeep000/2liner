import useSWR from 'swr'
import fetcher from '../libs/fetch'

export default function Profile() {
  const { data, error } = useSWR('http://0.0.0.0:3000/_next/data/development/status/1.json', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>
  
        {data.pageProps.status.map((issue) => {
        return (
          <p key={issue._id} style={{ margin: '6px 0', height: 50 }}>
            - {issue.content} 
          </p>
        )
      })}
  </div>
}