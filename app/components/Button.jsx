const Button = ({ children, onClick, color, disabled, className }) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={`
      px-4 
      py-2 
      text-sm 
      font-medium 
      rounded-lg 
      flex 
      items-center 
      justify-center 
      focus:ring-4 
      ${!color ? "text-white bg-green-600 hover:bg-green-700 focus:ring-green-800" : ""}
      ${color === "white" ? "text-black bg-white hover:bg-gray-200 focus:ring-white/50" : ""}
      ${color === "black" ? "text-white bg-black hover:bg-gray-900 focus:ring-black/50" : ""}
      w-full
      whitespace-nowrap
      ${className}
    `}
  >
    {children}
  </button>
)
export default Button
