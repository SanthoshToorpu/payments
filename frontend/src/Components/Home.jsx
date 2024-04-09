import React from 'react';

const Home = () => {
  return (
    <div>
        <div className='flex flex-col min-h-screen'>        
      <main className="flex-1 flex flex-col">
        <section className="flex-1 grid items-center justify-center min-h-[400px]">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">Seamless Payments</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The easiest way to send money to friends and family, right from your phone.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-md mx-auto"
                  placeholder="Enter your email"
                  type="email"
                />
                <div className='flex justify-center'>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 bg-black text-white mx-2"
                  type="button" onClick={() => window.location.href="/signup"}
                >
                  Sign Up
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 bg-gray-200"
                  type="button" onClick={() => window.location.href="/signin"}
                >
                  Sign In
                </button>
                </div>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <a className="underline underline-offset-2" href="#">
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
        </section>
        <hr className='h-1 bg-black'/>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">How it works</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                It's as easy as 1-2-3. Sign up, add your payment method, and start sending money.
              </p>
            </div>
            <div className="mx-auto w-full py-10 max-w-3xl grid gap-10 lg:grid-cols-3 lg:gap-16 md:gap-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="border border-gray-200 border-dashed rounded-lg border-gray-200 dark:border-gray-800">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Image"
                    className="aspect-image overflow-hidden rounded-lg object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Create your account in minutes.</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="border border-gray-200 border-dashed rounded-lg border-gray-200 dark:border-gray-800">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Image"
                    className="aspect-image overflow-hidden rounded-lg object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold">Add Payment Method</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Securely add your credit card.</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="border border-gray-200 border-dashed rounded-lg border-gray-200 dark:border-gray-800">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Image"
                    className="aspect-image overflow-hidden rounded-lg object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold">Send Money</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Instantly transfer funds to your friends.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
        </div>
    </div>
  );
};

export default Home;
