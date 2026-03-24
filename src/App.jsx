import { useState } from 'react'

export default function App() {
  const [activity, setActivity] = useState('')

  const fetchActivity = async () => {
    const res = await fetch('https://www.boredapi.com/api/activity')
    const data = await res.json()
    setActivity(data.activity)
  }

  return (
    <div>
      <h1>Activity App</h1>
      <button onClick={fetchActivity}>Get Activity</button>
      <p>{activity}</p>
    </div>
  )
}