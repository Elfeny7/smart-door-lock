import Head from 'next/head'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-blue-500 text-white p-8 flex justify-center items-center w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Hello DOor</h2>
            <p className="text-lg">Imagine this new experience with a smart door, dude! Picture yourself strolling up to your crib, and bam! 
            Before you even reach for the handle, it swings open like, "Hey, welcome home!" </p>
          </div>
        </div>
        <div className="p-8 w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-1">Email Address</label>
                <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Your Email Address"/>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 mb-1">Password</label>
                <input type="password" id="password" name="password" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Your Password"/>
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="remember" name="remember" className="mr-2"/>
                <label htmlFor="remember" className="text-gray-600">Remember me</label>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
