"use client"

import Image from "next/image"
import Link from "next/link"

export function SimpleFulfillment() {
  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="container mx-auto px-4">
        <div className="english-text-container">
          <h2
            className="text-3xl md:text-6xl font-medium mb-2 text-primary text-center"
            style={{
              fontFamily: "'Five Boroughs', sans-serif",
              fontWeight: "500",
              whiteSpace: "normal",
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            Simple but unique
          </h2>
        </div>
        <p className="text-xl text-slate-700 font-medium text-center mb-2">Simpleのユニークなとこ</p>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/simple-fulfillment/lounge" className="block group">
            <div className="rounded-none overflow-hidden group transition-shadow">
              <div className="bg-primary/80 text-slate-700 px-3 py-1 mb-2 inline-block overflow-x-auto max-w-full">
                <span
                  className="font-medium text-white english-text"
                  style={{ fontFamily: "'Five Boroughs', sans-serif" }}
                >
                  Lounge
                </span>
                <br />
                <span className="text-sm text-white">ラウンジ</span>
              </div>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/office-lounge.png"
                  alt="オフィスのラウンジスペース"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity">
                  <p className="text-white font-medium text-base text-shadow">ラウンジの紹介はこちら</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground text-sm mb-4">
                  月に一度、全社員が集まって会社の状況や各チームの成果を共有します。フラットな雰囲気で、誰もが意見を言いやすい環境です。
                </p>
              </div>
            </div>
          </Link>

          <div className="rounded-none overflow-hidden group transition-shadow">
            <div className="bg-primary/80 text-slate-700 px-3 py-1 mb-2 inline-block overflow-x-auto max-w-full">
              <span
                className="font-medium text-white english-text"
                style={{ fontFamily: "'Five Boroughs', sans-serif" }}
              >
                Snack Keiko
              </span>
              <br />
              <span className="text-sm text-white">スナック桂子</span>
            </div>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/snack-keiko-bartender.jpeg"
                alt="スナック桂子の様子"
                fill
                className="object-cover transition-transform duration-300"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-5">
              {/* Heading moved to label above image */}
              <p className="text-muted-foreground text-sm mb-4">
                仕事終わりは桂子ママ（実は代表取締役の大嶋）が作ってくれる特製のお酒とおつまみでホッと一息。不定期開催なので予定が合う社員は多く参加してます(^^)
              </p>
            </div>
          </div>

          <div className="rounded-none overflow-hidden group transition-shadow">
            <div className="bg-primary/80 text-slate-700 px-3 py-1 mb-2 inline-block overflow-x-auto max-w-full">
              <span
                className="font-medium text-white english-text"
                style={{ fontFamily: "'Five Boroughs', sans-serif" }}
              >
                Snack Corner
              </span>
              <br />
              <span className="text-sm text-white">駄菓子コーナー</span>
            </div>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/office-snack-station.jpeg"
                alt="シャッフルランチで提供されるお菓子やスナック"
                fill
                className="object-cover transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-5">
              {/* Heading moved to label above image */}
              <p className="text-muted-foreground text-sm mb-4">
                業務の合間に食べています！ お菓子のアンケートを元に発注しているのであなたの好みも是非聞かせてください♪
              </p>
            </div>
          </div>

          <div className="rounded-none overflow-hidden group transition-shadow">
            <div className="bg-primary/80 text-slate-700 px-3 py-1 mb-2 inline-block overflow-x-auto max-w-full">
              <span
                className="font-medium text-white english-text"
                style={{ fontFamily: "'Five Boroughs', sans-serif" }}
              >
                Oshi Katsu
              </span>
              <br />
              <span className="text-sm text-white">推し活応援♪</span>
            </div>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/oshi-katsu-ariake-arena.png"
                alt="有明アリーナでの推し活の様子"
                fill
                className="object-cover transition-transform duration-300"
                style={{ objectPosition: "center 60%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-4">
              {/* Heading moved to label above image */}
              <p className="text-muted-foreground text-xs mb-3">
                社員の趣味や推しを応援！大切なライブのために有給取得も気軽にできます✨️仲間のためならグッズ集めにも協力し合っています＼(^o^)／
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
