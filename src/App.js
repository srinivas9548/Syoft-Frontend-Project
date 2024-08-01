import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import DashboardPage from './components/DashboardPage'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path='/not-found' element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  </BrowserRouter>
)

export default App