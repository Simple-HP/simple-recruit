"use client";

import Image from "next/image";

export function CeoMessage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 代表メッセージセクション */}
        <h2
          className="text-5xl md:text-6xl font-medium mb-2 text-primary text-center"
          style={{
            fontFamily: "'Five Boroughs', sans-serif",
            fontWeight: "500",
            whiteSpace: "normal",
            overflowWrap: "break-word",
            wordWrap: "break-word",
          }}
        >
          Message
        </h2>
        <p className="text-xl text-slate-700 font-medium text-center mb-2">代表メッセージ</p>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative group">
              <div className="relative aspect-[3/4] w-[66.7%] mx-auto overflow-hidden rounded-none shadow-lg">
                <Image
                  src="/new-ceo-portrait.png"
                  alt="代表取締役 大嶋 琢人"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-none shadow-lg">
                <p className="text-sm font-medium">代表取締役</p>
                <p className="text-xl font-bold font-heading">大嶋 琢人</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 order-3 lg:order-2">
            <div className="relative bg-secondary/50 p-8 rounded-none">
              <div className="absolute top-6 left-6 text-primary/10 text-9xl font-serif">"</div>

              <div className="relative z-10">
                <p className="text-2xl font-bold mb-6 text-primary font-heading">
                  「私たちが介在することで、誰かの"未来"が少しでも良くなるなら。」
                </p>

                <div className="space-y-4 text-slate-700">
                  <p>
                    Simple株式会社は、「自身が介在することですべての人のよりよい未来に繋がっているか」という理念のもと、日々の仕事に向き合っています。
                  </p>

                  <p>
                    私たちの事業は、"人"の人生に深く関わる仕事です。
                    だからこそ、目の前の一つひとつの行動が「本当にその人の未来に繋がっているか？」を常に問い続けています。
                  </p>

                  <p>
                    転職に悩む方の話をじっくり聴くことも、求人者のニーズに寄り添い、最適な方をご紹介することも、履歴書を一緒に整えることも、面接に向けて背中を押すことも——
                    そのすべてに、私たちが"介在する意味"があると信じています。
                  </p>

                  <p>
                    私は2019年の創業からこの会社に関わり、2023年に代表を引き継ぎました。
                    この業界で約10年、人の人生の転機に向き合い続けて思うのは、「伴走する」ということの大切さと責任の重さです。
                  </p>

                  <p>
                    だからこそ私たちは、"人材紹介"という言葉をもっと誠実に、もっとあたたかく使っていきたい。
                    ただのマッチングではなく、人生の選択に寄り添うこと。 それが、Simpleの本質だと信じています。
                  </p>

                  <p>
                    そして何より大切にしているのは、私たち自身がその価値を信じて、毎日を楽しく、Happyに働けること。
                    誰かの未来に関わるには、まず自分たちが前向きであることが不可欠だからです。
                  </p>

                  <div className="space-y-6">
                    <p className="text-center">
                      <span className="text-primary text-2xl md:text-3xl font-bold block">
                        "明日を、もっと好きに。"
                      </span>
                    </p>
                    <p>
                      このビジョンに共感してくれる方と、未来を一緒につくっていけたら嬉しいです。
                      <br />
                      お会いできる日を、心から楽しみにしています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
