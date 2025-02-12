import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './index.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  return (
    <div class="bg-gray-100">
  <div class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <p class="text-sm text-gray-700">We use cookies to ensure you get the best experience on our website.
        Learn more <a href="https://larainfo.com/blogs/create-cookie-consent-design-ui-using-tailwind-css" class="text-blue-500">here</a>.</p>
      <div class="flex space-x-4">
        <button
          class="px-4 py-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">Accept</button>
        <button
          class="px-4 py-1.5 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300 ease-in-out">Decline</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default App
