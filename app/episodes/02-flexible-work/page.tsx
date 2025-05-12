import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function FlexibleWorkEpisode() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/simple-logo.png" alt="Simple株式会社ロゴ" width={40} height={40} className="rounded-none" />
            <span className="text-xl font-bold text-primary font-heading">Simple株式会社</span>
          </div>
          <Link href="/#work-episodes">
            <Button variant="ghost" className="gap-2 rounded-none">
              <ChevronLeft size={16} />
              採用サイトに戻る
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
          <Image
            src="/office-casual-interaction.png"
            alt="オフィスでのカジュアルな交流の様子"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <span
                className="text-white/80 text-lg english-text whitespace-nowrap overflow-x-auto max-w-full"
                style={{ fontFamily: "'Marker Mark SVG', cursive" }}
              >
                Episode 02
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4 font-heading">
                フレックス制度を活用した柔軟な働き方
              </h1>
            </div>
          </div>
        </div>

        {/* コンテンツセクション */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-primary">
                Simple株式会社では、社員一人ひとりのライフスタイルに合わせた働き方を実現するため、フレックス制度を導入しています。
              </p>

              <h2>フレックス制度の概要</h2>
              <p>
                当社のフレックス制度は、コアタイム（13:00～17:00）以外の時間を社員が自由に設定できる仕組みです。
                朝型の方は早めに出社して夕方には帰宅できますし、子育て中の方は学校行事に合わせた勤務時間の調整も可能です。
              </p>

              <h2>社員の声</h2>
              <div className="bg-gray-50 p-6 rounded-none my-8">
                <p className="italic">
                  「子どもの習い事の送迎のため、週に2回は16時に退社しています。その分、朝は早めに出社して業務をこなしています。
                  子育てと仕事の両立が無理なく続けられるのは、このフレックス制度のおかげです。」
                </p>
                <p className="text-right font-medium mt-2">- 人材コーディネーター部 田中</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-none my-8">
                <p className="italic">
                  「通院のために月に数回、午前中に病院に行ってから出社しています。以前の会社では半休を取らなければならず負担でしたが、
                  今は自分のペースで働けるので、体調管理と仕事のバランスが取りやすくなりました。」
                </p>
                <p className="text-right font-medium mt-2">- 営業部 鈴木</p>
              </div>

              <h2>フレックス制度の活用例</h2>
              <ul>
                <li>朝型勤務：7:30～16:30</li>
                <li>標準勤務：9:30～18:30</li>
                <li>遅め勤務：10:30～19:30</li>
                <li>育児両立：8:30～17:30（週2回は16:00退社）</li>
              </ul>

              <h2>働きやすさへのこだわり</h2>
              <p>
                フレックス制度だけでなく、リモートワークの併用や、有給休暇の取得推進など、
                社員が長く働き続けられる環境づくりに力を入れています。
                「働きやすさ」と「成果」の両立を目指し、常に制度の改善を行っています。
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-square rounded-none overflow-hidden">
                  <Image src="/modern-office.png" alt="オフィス環境" fill className="object-cover" />
                </div>
                <div className="relative aspect-square rounded-none overflow-hidden">
                  <Image src="/office-pizza-party.png" alt="社内イベントの様子" fill className="object-cover" />
                </div>
              </div>

              <h2>これからの働き方</h2>
              <p>
                Simple株式会社では、今後も社員の声を聞きながら、より働きやすい環境づくりを進めていきます。
                多様な働き方を尊重し、一人ひとりが最大限のパフォーマンスを発揮できる職場を目指しています。
              </p>
            </div>

            <div className="mt-16 text-center">
              <Link href="/#work-episodes">
                <Button className="bg-primary hover:bg-primary/90 rounded-none">エピソード一覧に戻る</Button>
              </Link>
            </div>
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
