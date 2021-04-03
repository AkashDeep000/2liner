import useSWR from 'swr'

export default function Profile() {
  const { status, error } = useSWR('/api/status', fetcher)

  if (error) return <div>failed to load</div>
  if (! status) return <div>loading...</div>
  return   ( <ul>
        {status.map((statu) => (
          <li>
            <h2>{statu.content}</h2>
          
          </li>
        ))}
      </ul>)
}
