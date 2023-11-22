import { useState } from 'react'
import { useEffect } from 'react'

export const useLocaleStorage = key => {
  const [localeData, setLocaleData] = useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localeData))
  }, [localeData])

  const handleData = data => {
    setLocaleData([...localeData, data])
  }
  return [localeData, handleData]
}
