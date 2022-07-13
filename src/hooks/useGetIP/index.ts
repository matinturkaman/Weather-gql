import axios from 'axios'
import { useEffect, useState } from 'react'

export const client = axios.create({
  baseURL: 'https://ipapi.co/json',
})

export default function useGetIP() {
  const [ip, setIP] = useState<ipProps>()

  const getIP = async () => {
    try {
      const data = await client.get('/')
      setIP(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIP()
  }, [])

  return { ip }
}
