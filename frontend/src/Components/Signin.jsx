
import React from 'react'

const Signin = () => {
  return (
    <div className="w-full">
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
      <div className="container flex flex-col items-center gap-10 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Paywise</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Seamlessly transfer money to friends and family. Securely pay for your purchases. All in one app.
          </p>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <form className="flex flex-col space-y-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 self-start">
              Sign In
            </button>
            <p className="text-sm text-gray-500 dark:text-gray-400">New user? Sign up with your email.</p>
          </form>
        </div>
      </div>
    </section>
    {/* Other sections */}
    {/* ... */}
    {/* Footer */}
    <div className="bg-gray-100 dark:bg-gray-800">
      <footer className="w-full py-6">
        <div className="container flex items-center justify-center space-x-4 px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Paywise. All rights reserved.</p>
          <nav className="flex ml-auto space-x-4">
            <a className="text-xs underline underline-offset-[2px]" href="#">
              Privacy
            </a>
            <a className="text-xs underline underline-offset-[2px]" href="#">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default Signin