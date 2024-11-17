import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import './index.css'
import { Routes, Route } from 'react-router-dom'
import BookListing from './components/BookListing'
import Books from './components/Books'
import Register from './components/register'
import Reset from './components/reset'
import Users from './components/Users'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/books-listing" element={<BookListing />} />
        <Route path="/books-listing/books" element={<Books />} />

      </Routes>
    </>

  )
}

export default App
