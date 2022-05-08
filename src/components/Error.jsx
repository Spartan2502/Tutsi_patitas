import React from 'react'

export const Error = ({children}) => {
    return (
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-2" role="alert">
            <p className="font-bold">{children}</p>
        </div>
    )
}
