"use client"

export default function ContentCard({ item, link, Icon, quantity }) {
  return (
    <div
      className="
        flex
        justify-between
        p-5
        w-full
        bg-gray-900 
        text-white  
        rounded-xl
        shadow-lg
      "
    >
      <div className="content flex flex-col justify-between gap-5">
        <div className="uppercase flex flex-col">
          <div>{item}</div>
          <div className="font-black text-3xl">{quantity}</div>
        </div>

        <div className="text-green-500 font-bold">+55%</div>
        <div>yesterday</div>
      </div>
      <div className="icon">
        <div className="bg-gradient-to-br from-green-500 to-green-800 p-3 rounded-full">
          <Icon className="w-7 h-7" />
        </div>
      </div>
    </div>
  )
}
