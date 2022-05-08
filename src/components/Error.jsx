import React from 'react'

export const Error = ({children}) => {
    return (
        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-2" role="alert">
            <p class="font-bold">{children}</p>
        </div>
    )
}
