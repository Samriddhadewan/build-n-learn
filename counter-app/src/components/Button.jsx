import React from 'react'

const Button = ({children, type, handler}) => {
    const style = 
        type === "danger" 
        ? "bg-red-500 text-white py-2 px-3 rounded shadow cursor-pointer" 
        : "bg-blue-500 text-white py-2 px-3 rounded shadow cursor-pointer"


  return (
    <div className={style} onClick={handler}>
        {children}
    </div>
  )
}

export default Button