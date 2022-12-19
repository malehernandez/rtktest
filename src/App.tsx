import "./App.css"
import UserView from "./features/users/userView"
import { useAppDispatch } from './app/hooks'
import { fetchUsers } from "./features/users/usersSlice"
function App() {
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <h1>Redux/toolkit Playground</h1>
      <div>
        <h1>Counter</h1>
      </div>
      <div className="card">
        <button onClick={() => dispatch(fetchUsers())}>Load</button>
        <UserView></UserView>
        <p></p>
      </div>
    </div>
  )
}

export default App
