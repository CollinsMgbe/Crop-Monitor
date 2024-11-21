import React from 'react'

const Alerts = () => {
  return (
        <div className="p-6 bg-red-100">
            <h2 className="text-xl font-bold text-red-600 animate-pulse">Alerts!!</h2>
            <ul className="mt-2">
            <li className="text-red-800 animate-bounce">Acidic pH Levels detected.</li>
            <li className="text-red-800 animate-bounce">Execessive Chrolopyhll content detected.</li>
            <li className="text-red-800 animate-bounce">Fungal Diseases detected.</li>
            
            </ul>
        </div>

        )
    }

export default Alerts;