"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function WorkEpisodes() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="english-text-container">
            <h2
              className="text-3xl md:text-6xl font-medium mb-2 text-primary"
              style={{
                fontFamily: "'Five Boroughs', sans-serif",
                fontWeight: "500",
                whiteSpace: "normal",
                overflowWrap: "break-word",
                wordWrap: "break-word",
              }}
            >
              Episode
            </h2>
          </div>
          <p className="text-xl text-slate-700 font-medium">エピソード</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="bg-white rounded-none shadow-md overflow-hidden">
          {/* メインエピソード（常に表示） */}
          <div className="p-6">
            <div className="flex items-baseline gap-4 mb-4">
              <div className="w-auto">
                <span
                  className="text-gray-400 font-medium block text-sm md:text-base"
                  style={{ fontFamily: "'Five Boroughs', sans-serif" }}
                >
                  Episode 01
                </span>
              </div>
              <h3 className="text-base md:text-lg font-medium text-slate-800">
                ＜1日密着＞キャリアアドバイザーってどんな仕事？
              </h3>
            </div>

            <Link href="/episodes/01-challenge" className="block">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-none shadow-md mb-6 group">
                <Image
                  src="/career-advisor-headset.webp"
                  alt="キャリアアドバイザーの様子"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: "center 30%" }}
                />
                <div className="absolute inset-0 bg-primary/0 sm:group-hover:bg-black/40 group-hover:bg-white/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="px-5 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 flex items-center space-x-1">
                    <span
                      className="font-medium text-white text-xs md:text-sm uppercase tracking-wider border-b border-white pb-0.5"
                      style={{ fontFamily: "'Five Boroughs', sans-serif" }}
                    >
                      View more
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <div className="prose max-w-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
