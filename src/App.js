import { Routes, Route } from 'react-router-dom'
import WatchListPage from './pages/WatchListPage'
import LoginPage from './pages/LoginPage'
import CreateAccountPage from './pages/CreateAccountPage'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<WatchListPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create-account' element={<CreateAccountPage />} />
      </Routes>
    </div>
  )
}

export default App
