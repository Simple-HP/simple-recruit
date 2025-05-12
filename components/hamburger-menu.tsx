"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function HamburgerMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed top-4 right-4 z-50 bg-[#4496d2] text-white hover:bg-[#4496d2]/90 border-none shadow-md rounded-none h-12 w-12"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">メニューを開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-2">
              <Image src="/simple-logo.png" alt="Simple株式会社ロゴ" width={32} height={32} className="rounded-none" />
              <h2 className="text-lg font-semibold">Simple株式会社</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="rounded-none">
              <X className="h-5 w-5" />
              <span className="sr-only">閉じる</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-6">
            <a
              href="#positions"
              className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
              onClick={() => setOpen(false)}
            >
              募集職種
            </a>
            <a
              href="#job-description"
              className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
              onClick={() => setOpen(false)}
            >
              仕事内容
            </a>
            <a
              href="#work-environment"
              className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
              onClick={() => setOpen(false)}
            >
              働き方
            </a>
            <a
              href="#work-episodes"
              className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
              onClick={() => setOpen(false)}
            >
              エピソード
            </a>
            <a
              href="#employee-relationship"
              className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
              onClick={() => setOpen(false)}
            >
              社員相関図
            </a>
            <a
              href="#ceo-message"
              className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
              onClick={() => setOpen(false)}
            >
              代表メッセージ
            </a>
          </nav>
          <div className="mt-auto border-t pt-4">
            <Button className="w-full bg-primary hover:bg-primary/90">エントリー</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
