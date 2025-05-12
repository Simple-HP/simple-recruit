"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function LoungeArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/simple-logo.png" alt="Simple株式会社ロゴ" width={40} height={40} className="rounded-none" />
            <span className="text-xl font-bold text-primary font-heading">Simple株式会社</span>
          </div>
          <Link href="/#simple-fulfillment">
            <Button variant="ghost" className="gap-2 rounded-none">
              <ChevronLeft size={16} />
              採用サイトに戻る
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <div className="relative w-full h-[40vh] overflow-hidden">
          <Image src="/office-lounge.png" alt="オフィスのラウンジスペース" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                【Simple最大の推し】休憩ラウンジを紹介します！！
              </h1>
            </div>
          </div>
        </div>

        {/* コンテンツセクション */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <article className="prose prose-lg max-w-none">
              <p className="text-lg">
                弊社には。
                <br />
                他の会社には中々無い。
                <br />
                あるものがあります。
              </p>

              <p className="text-xl font-bold my-6">それが、この「広すぎるラウンジ」です！！！！</p>

              <div className="relative aspect-video rounded-none overflow-hidden my-8">
                <Image src="/wide-lounge.webp" alt="広すぎるラウンジの様子" fill className="object-cover" />
              </div>

              <p>
                面積にしておよそ320㎡。恐らくテニスコート1.3面分ぐらいはありそうです。
                <br />
                社員数50名弱に対して、テニスコート1.3面分の休憩スペース。
              </p>

              <div className="bg-primary/10 p-6 rounded-none my-8 text-center">
                <p className="text-xl font-bold text-primary">広いんです。</p>
                <p className="text-xl font-bold text-primary">そこが推しなんです。</p>
              </div>

              <p>このラウンジは、「休憩」「月次総会」「交流会」などで使用しています☆</p>

              <h3 className="text-xl font-bold mt-10 mb-4">【休憩】</h3>

              <p>弊社の定時は11:00～20:00。営業職という特性上、毎日の休憩時間は特に決まっていません。</p>

              <ul className="my-6">
                <li>お腹が空いたなと思った時に休憩に行くも良し。</li>
                <li>早めにご飯食べちゃうと後の時間が長いから…！とギリギリまで粘って16:00頃休憩に行くも良し。</li>
                <li>業務のキリが良いタイミングで目が合った人に「コンビニ行きましょ～♪」と声を掛けることもあります。</li>
              </ul>

              <p>
                自宅からお弁当を持ってくる人もいれば、外で買って来る人もいます♪
                <br />
                （弊社の近所には、ファミマ、まいばす、KFC、磯丸水産、ココイチetc...があるので食には困りません＼(^o^)／）
              </p>

              <p className="text-lg font-medium my-6">
                ご飯の買い出しに行って、帰って来る場所が、ここ。広すぎるラウンジ。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="bg-gray-50 p-4 rounded-none">
                  <h4 className="font-bold mb-2">◆カウンタースタイル◆</h4>
                  <div className="relative aspect-video rounded-none overflow-hidden">
                    <Image src="/counter-style.webp" alt="カウンタースタイルの席" fill className="object-cover" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    窓際に設置されたカウンター席。外の景色を眺めながらランチを楽しめます。
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-none">
                  <h4 className="font-bold mb-2">◆テーブルスタイル①◆</h4>
                  <div className="relative aspect-video rounded-none overflow-hidden">
                    <Image
                      src="/table-style.webp"
                      alt="テーブルスタイルの席"
                      fill
                      className="object-cover"
                      objectPosition="center 30%"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    大人数でも座れる大きなテーブル。チームでのランチミーティングにも最適です。
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-none">
                  <h4 className="font-bold mb-2">◆テーブルスタイル②（骨盤矯正椅子もあります♪）◆</h4>
                  <div className="relative aspect-video rounded-none overflow-hidden">
                    <Image src="/ergonomic-table.webp" alt="骨盤矯正椅子のあるテーブル" fill className="object-cover" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    長時間座っても疲れにくい、体に優しい椅子を採用しています。
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-none">
                  <h4 className="font-bold mb-2">◆謎に座面の長いソファスタイル◆</h4>
                  <div className="relative aspect-video rounded-none overflow-hidden">
                    <Image src="/long-sofa-style.webp" alt="長いソファ" fill className="object-cover" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    ゆったりとくつろげる長いソファ。休憩時間にリラックスできます。
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-none mb-10">
                <h4 className="font-bold mb-2">◆モニターのある作業スペース◆</h4>
                <div className="relative aspect-video rounded-none overflow-hidden">
                  <Image src="/monitor-workspace.webp" alt="モニターのある作業スペース" fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  大画面モニターを備えた作業スペース。カジュアルなミーティングや資料の確認に便利です。
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-none mb-10">
                <h4 className="font-bold mb-2">◆冬だけ登場！大人気のこたつスタイル◆</h4>
                <div className="relative aspect-video rounded-none overflow-hidden">
                  <Image src="/kotatsu-style.webp" alt="オフィスのこたつスペース" fill className="object-cover" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  冬季限定で登場する人気のこたつ。ほっこりとした雰囲気で休憩時間を過ごせます。
                </p>
              </div>

              <p className="my-6">
                テーブルと椅子の違いだけでもこれだけの種類を取り揃えておりますので、とにかく飽きません！
              </p>

              <div className="bg-gray-50 p-6 rounded-none my-8">
                <p className="mb-4">「今日はちょっと眠すぎるので、10分でご飯食べてこたつで50分寝よう。」とか、</p>
                <p className="mb-4">「今日は腰が痛いので、骨盤矯正椅子で姿勢正しくご飯食べよう。」とか、</p>
                <p className="font-medium">その日の気分で色んな場所が選べるのもワクワクします♪</p>
              </div>

              <h3 className="text-xl font-bold mt-10 mb-4">【月次総会】</h3>

              <p>毎月、月初は全社員がラウンジに集合して月次総会を行います。</p>

              <p className="my-4">
                "総会"と聞くと堅苦しい会議のような雰囲気があるかもしれませんが、弊社の総会はとてもフラットな雰囲気です♪
              </p>

              <p>それもきっとこの広すぎるラウンジのリラックスムードのおかげかもしれません＼(^o^)／</p>

              <h3 className="text-xl font-bold mt-10 mb-4">【交流会】</h3>

              <p>新入社員歓迎会や繁忙期お疲れ様会などの全社員参加型の交流会や、</p>

              <p className="my-4">
                稀に個人企画で立ち上がる"ゲーム大会(マリオカート、マリオパーティーetc...)"や"カルタ大会(古典的な遊びすぎる会)"や"ジブリ鑑賞会(金曜ロードショーがジブリの日に、敢えて違うジブリ作品を見るという謎の反抗企画)"なども、ラウンジで開催されたりします☆
              </p>

              <p>
                お店に行かずとも、「いつもの慣れた空間でお酒が飲める♪」「ある程度大きな声で話しても怒られない♪」などのメリットもあり、ラウンジ飲みは弊社の魅力の一つです＼(^o^)／
              </p>

              <div className="bg-primary/10 p-8 rounded-none text-center my-12">
                <p className="text-xl font-bold text-primary mb-4">
                  ぜひ、弊社の"広すぎるラウンジ"で一緒に働いてみませんか？（笑）
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/positions/career-advisor-entry#page-top">
                    <Button className="bg-primary hover:bg-primary/90 mt-4 rounded-none">
                      <span className="font-medium text-white text-sm">未経験の方はこちら</span>
                    </Button>
                  </Link>
                  <Link href="/positions/career-advisor-experienced#page-top">
                    <Button className="bg-primary hover:bg-primary/90 mt-4 rounded-none">
                      <span className="font-medium text-white text-sm">経験者の方はこちら</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t py-8 bg-[#4496d2] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/simple-logo.png"
                alt="Simple株式会社ロゴ"
                width={32}
                height={32}
                className="rounded-none bg-white"
              />
              <span className="font-bold">Simple株式会社</span>
            </div>
            <p className="text-white/80 text-sm">© {new Date().getFullYear()} Simple株式会社 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
