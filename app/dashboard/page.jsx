"use client"

import { ContentCard } from "@/app/components"
import { HiRectangleGroup, HiTag, HiShoppingCart, HiUserGroup } from "react-icons/hi2"

const contents = [
  {
    id: "content1",
    item: "admins",
    link: "/dashboard",
    Icon: HiRectangleGroup,
    quantity: "ONLY 1",
  },
  {
    id: "content2",
    item: "categories",
    link: "/dashboard/categories",
    Icon: HiTag,
    quantity: "30+",
  },
  {
    id: "content3",
    item: "products",
    link: "/dashboard/products",
    Icon: HiShoppingCart,
    quantity: "500+",
  },
  {
    id: "content4",
    item: "users",
    link: "/dashboard/users",
    Icon: HiUserGroup,
    quantity: "100+",
  },
]

export default function Dashboard() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        justify-center
        gap-5
        w-full
        h-full
      "
    >
      {contents?.map(({ id, item, link, Icon, quantity }) => (
        <ContentCard key={id} item={item} link={link} Icon={Icon} quantity={quantity} />
      ))}
    </div>
  )
}
