import axios from "axios"
import { toast } from "react-hot-toast"

export const getCategories = () => {
  let data
  axios
    .get("https://grocer-api.vercel.app/category/all")
    .then(({ success, data }) => {
      if (!success) return
      console.log(data)
      data = data
    })
    .catch(() => {
      console.log("error")
      return toast.error("Something went wrong!")
    })
  return data
}
