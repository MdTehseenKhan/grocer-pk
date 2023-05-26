"use client"

export default function Container({ children, className }) {
  return (
    <div
      className={`
        mx-auto
        px-5
        md:px-8 
        w-full
        xl:container
        ${className}
      `}
    >
      {children}
    </div>
  )
}
