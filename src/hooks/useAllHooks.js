import axios from 'axios'
import { useEffect, useState } from 'react'


const useAllHooks = (userQuantity = 20) => {

    const [stateUser, setStateUser] = useState()

    useEffect(() => {
      const URL = `https://randomuser.me/api/?results=${userQuantity}`
      axios.get(URL)
        .then( res => setStateUser(res.data.results))
        .catch (err => console.log(err))
    }, [])
    
  return stateUser
  
}

export default useAllHooks