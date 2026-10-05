export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">FocusFlow</h1>
        <p className="text-gray-600 text-center">Plan, prioritize, and journal</p>
        <a href="/journal" className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded">Go to Journal</a>
      </div>
    </div>
  )
}
