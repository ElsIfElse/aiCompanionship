import './App.css'
import ChatPage from './pages/ChatPage'
import  {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/chat' element={<ChatPage/>}/>
        </Routes>
      </Router>
       
    </>
  )
}

export default App
