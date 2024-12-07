"use client"

import { useEffect, useState } from "react"
import { X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] p-0 bg-transparent border-none">
        <DialogHeader>
          <DialogTitle className="sr-only">Promoción Hot Sale</DialogTitle>
        </DialogHeader>
        <DialogClose className="absolute right-4 top-4 z-50">
          <div className="rounded-full bg-white/10 backdrop-blur-sm p-2 hover:bg-white/20 transition-colors">
            <X className="h-7 w-7 text-red" />
          </div>
        </DialogClose>
        <div className="relative w-full aspect-square">
        <img
  src="assets/banner/navidad.png"
  alt="Hot Sale 20% de descuento"
  className="w-full h-full object-contain"
/>
        </div>
      </DialogContent>
    </Dialog>
  )
}

