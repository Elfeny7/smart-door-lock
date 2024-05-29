import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Side (Form) */}
          <div className="w-full md:w-1/2 p-8">
            <div className="mb-8 text-center">
              
              <h1 className="text-2xl font-bold">Welcome back!</h1>
              <p className="text-gray-600">Enter to get unlimited access to data & information.</p>
            </div>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-gray-900">Remember me</label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Log in
              </button>
            </form>
          </div>

          {/* Right Side (Image) */}
          <div className="hidden md:block md:w-1/2 bg-blue-600">
            <img src="/abs.jpg" alt="Decorative" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  )
}
