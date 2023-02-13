
import { useBook } from "../context/BookContext";

export const useBookAccess = () => {
  const {token} = useBook()
  return token
}

