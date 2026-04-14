import React, { Children } from 'react'

export const Button = ({children,color}) => {
    return (
        <div> 
            <button className={`${color} text-white px-4 py-2 rounded-sm font-semibold transition-transform hover:brightness-125`}>{children}</button>
        </div>
    )
}
export default Button