import './App.css'
import Card from './components/Card'

function App() {

  const users = ["Abhishek" , "Abhirup" , "Abhi"];

  return (
    <div className='flex justify-center items-center flex-col gap-3'>
      {users.map((user) => (
        <Card name={user}/>
      ))}
    </div>
  )
}

export default App
