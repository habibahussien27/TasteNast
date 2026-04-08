import React, { Children } from 'react'

export const Button = ({children,color}) => {
    return (
        <div> 
            <button className={`${color} text-white px-4 py-2 rounded-md font-semibold transition-transform `}>{children}</button>
        </div>
    )
}
