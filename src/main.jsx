import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './assets/styles/global.css'   // ✅ global CSS here

// Import Bootstrap CSS once here
// import 'bootstrap/dist/css/bootstrap.min.css'

// (Optional) import Bootstrap JS if you need dropdowns, modals, etc.
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
