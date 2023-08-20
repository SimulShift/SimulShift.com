import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {Outlet} from 'react-router-dom'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import LoginContextProvider from './auth/LoginContext'
import ThemeRegistry from './Theme/ThemeRegistry'
import MainNav from './navbar/MainNav'
import About from './pages/about/page'
import {Container} from '@mui/joy'
import ChatBotPage from './pages/chatbot/page'
import Admin from './pages/admin/page'
import Home from './pages/home/page'

export const metadata = {
  title: 'SimulShift',
  description:
    'SimulShift is a streamer who is building a chatbot for twitch and eventually other platforms such as Discord.',
}

const NavbarWrapper = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <MainNav style={{marginTop: 0.7, marginBottom: 1}} />
      <Outlet />
    </Container>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/', // yes, again
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/chatbot',
        element: <ChatBotPage />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <ThemeRegistry>
        <RouterProvider router={router}></RouterProvider>
      </ThemeRegistry>
    </LoginContextProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
