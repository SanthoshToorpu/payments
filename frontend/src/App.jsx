import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import {Home , Dashboard, Signup, Signin, Transfer} from './Components'
const App = () => {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="">Payments.Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default App