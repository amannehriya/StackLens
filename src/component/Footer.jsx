import React from 'react'

function Footer() {
  return (
         <footer className="text-center text-xs text-gray-400 pb-8">
        © {new Date().getFullYear()} StackLens · Demo UI
      </footer>
  )
}

export default Footer