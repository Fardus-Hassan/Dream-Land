import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import GlobalContext from './utility/GlobalContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={router} />
    </GlobalContext>
  </React.StrictMode>,
)
