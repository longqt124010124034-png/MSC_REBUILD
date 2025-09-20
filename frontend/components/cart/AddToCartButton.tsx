"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/CartProvider"
import { ShoppingCart } from "lucide-react"

export default function AddToCartButton({ courseId, className }: { courseId: string; className?: string }) {
  const { addByCourseId } = useCart()
  return (
    <Button onClick={() => addByCourseId(courseId)} className={className} variant="outline">
      <ShoppingCart className="w-4 h-4 mr-2" /> Thêm vào giỏ
    </Button>
  )
}
