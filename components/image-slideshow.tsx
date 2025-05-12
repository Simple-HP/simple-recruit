"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface SlideshowProps {
  images: string[]
  interval?: number
}

export function ImageSlideshow({ images, interval = 3000 }: SlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(1)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    // 画像のプリロードは省略（Next.jsのImageコンポーネントが最適化を行う）

    const timer = setInterval(() => {
      // トランジション開始
      setTransitioning(true)

      // トランジション完了後に次の画像インデックスを設定
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex)
        setNextImageIndex((nextImageIndex + 1) % images.length)
        setTransitioning(false)
      }, 500) // トランジション時間を500msに短縮
    }, interval) // intervalパラメータを使用して3秒間隔で切り替え

    return () => clearInterval(timer)
  }, [images, nextImageIndex, interval])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 現在の画像 */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"}`}
      >
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={
            currentImageIndex === 0 && images[currentImageIndex].includes("team-members-peace-signs")
              ? "Simple株式会社のチームメンバー"
              : `オフィスの様子 ${currentImageIndex + 1}`
          }
          fill
          className="object-cover"
          style={
            currentImageIndex === 0 && images[currentImageIndex].includes("team-members-peace-signs")
              ? { objectPosition: "center 20%" }
              : {}
          }
          priority
        />
      </div>

      {/* 次の画像（トランジション中に表示） */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${transitioning ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src={images[nextImageIndex] || "/placeholder.svg"}
          alt={
            nextImageIndex === 0 && images[nextImageIndex].includes("team-members-peace-signs")
              ? "Simple株式会社のチームメンバー"
              : `オフィスの様子 ${nextImageIndex + 1}`
          }
          fill
          className="object-cover"
          style={
            nextImageIndex === 0 && images[nextImageIndex].includes("team-members-peace-signs")
              ? { objectPosition: "center 20%" }
              : {}
          }
          priority
        />
      </div>
    </div>
  )
}
