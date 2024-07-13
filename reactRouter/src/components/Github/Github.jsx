
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //     fetch('https://api.github.com/users/Rohantelang01')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setData(data)
  //     })
  
  
  // }, [])
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white'
    p-4 text-3xl>
  Github follower - {data.followers}
    </div>
  )
}

export default Github

export const githubInFoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Rohantelang01")
  return response.json()
}