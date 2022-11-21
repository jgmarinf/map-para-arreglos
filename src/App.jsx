import axios from 'axios'
import './App.css'
import CardUser from './components/CardUser'
import useAllHooks from './hooks/useAllHooks';

function App() {
  const stateUse = useAllHooks(10)
  


  return (
    <div className="App">
     {
      stateUse?.map(user=> (<CardUser user={user} key={user.cell}></CardUser>) )
     }
    </div>
  )
}

export default App
