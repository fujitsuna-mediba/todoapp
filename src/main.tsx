import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Test />
    <Analytics />
  </React.StrictMode>
)
