export default function Form() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/status', {
      body: JSON.stringify({
        status: event.target.status.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="status">status</label>
      <input id="status" name="status" type="text" autoComplete="status" required />
      <button type="submit">Register</button>
    </form>
  )
}