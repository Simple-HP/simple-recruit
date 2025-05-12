import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MapPin, Clock, Banknote, Calendar, Award, Coffee, Gift, Heart } from "lucide-react"

export default function CareerAdvisorEntryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/simple-logo.png" alt="Simple株式会社ロゴ" width={40} height={40} className="rounded-none" />
            <span className="text-xl font-bold text-primary font-heading">Simple株式会社</span>
          </div>
          <Link href="/#positions">
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
          <Image
            src="/office-casual-interaction.png"
            alt="キャリアアドバイザーの業務イメージ"
            fill
            className="object-cover"
            priority
            style={{ objectPosition: "center 30%" }}
          />
          <div id="page-top" className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">キャリアアドバイザー（未経験）</h1>
            </div>
          </div>
        </div>

        {/* コンテンツセクション */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="bg-white rounded-none shadow-lg overflow-hidden border border-gray-100">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-bold">勤務地</h2>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-none">
                      <p className="mb-2">東京都品川区東五反田五丁目23番7号 五反田不二越ビル4・5階</p>
                      <p className="text-sm text-primary font-medium mb-2">2023年6月移転の新オフィス!</p>
                      <p className="text-sm text-muted-foreground mb-4">転居を伴う転勤はありません</p>

                      <div className="border-t border-gray-200 pt-3 mt-3">
                        <h3 className="font-medium mb-2">アクセス</h3>
                        <p className="text-sm">
                          五反田駅から徒歩3分
                          <br />
                          （山手線、都営浅草線、東急池上線）
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                      <Banknote className="h-5 w-5 text-primary" />
                      <h2 className="text-xl font-bold">給与</h2>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-none">
                      <p className="text-xl font-medium mb-2">月給28.5万円～</p>
                      <p className="text-sm text-muted-foreground">+ 達成手当</p>

                      <div className="border-t border-gray-200 pt-3 mt-3">
                        <h3 className="font-medium mb-2">雇用形態</h3>
                        <p className="text-sm">
                          正社員
                          <br />
                          （試用期間6ヶ月）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 勤務時間 */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">勤務時間</h2>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-3">フレックスタイム制</h3>
                        <ul className="space-y-2 text-sm">
                          <li>標準労働時間1日8時間</li>
                          <li className="font-medium text-primary">コアタイム 13:00～17:00</li>
                          <li>フレキシブルタイム 8:00～13:00、17:00～22:00</li>
                          <li>休憩 11:00～16:00の中で1時間</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-3">一般的な勤務パターン</h3>
                        <p className="text-sm mb-3">
                          夕方以降の電話面談が多いため、多くの社員は「11:00～20:00勤務」が基本です。
                        </p>
                        <div className="bg-primary/10 p-3 rounded-none">
                          <h4 className="text-sm font-medium mb-1">平均残業時間</h4>
                          <p className="text-sm">
                            月15時間～20時間程度です。
                            <br />
                            閑散期（4～8月）は定時退社できる日も多数あります。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 休日・休暇 */}
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">休日・休暇</h2>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-3">週休・祝日</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="font-medium">完全週休2日制（土・日）</li>
                          <li className="text-xs text-muted-foreground">
                            ※繁忙期（9月～3月）には臨時で業務する場合があります。その際は代休の取得が可能です。
                          </li>
                          <li>祝日休み</li>
                          <li>年末年始休暇</li>
                          <li>GW休暇</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium mb-3">各種休暇制度</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            有給休暇
                            <span className="text-xs text-muted-foreground ml-2">
                              入社時に5日付与、翌年3月1日に5日付与
                            </span>
                          </li>
                          <li>慶弔休暇</li>
                          <li>産前・産後休暇</li>
                          <li>育児休暇</li>
                          <li>介護休暇</li>
                          <li>ドナー休暇制度</li>
                          <li>裁判員休暇制度</li>
                          <li>特別有給休暇</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 待遇・福利厚生 */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">待遇・福利厚生</h2>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                      <div>
                        <h3 className="font-medium mb-3 flex items-center">
                          <Banknote className="h-4 w-4 mr-2 text-primary" />
                          手当・保険
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li className="font-medium text-primary">インセンティブあり！</li>
                          <li className="pl-4 text-xs text-muted-foreground">
                            実績に応じ、月次でインセンティブを支給します
                          </li>
                          <li>交通費（上限3万円/月）</li>
                          <li>時間外手当（固定残業超過分）</li>
                          <li>社会保険完備（雇用・労災・健康・厚生年金）</li>
                          <li>退職金制度（確定給付年金「はぐくみ基金」）</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3 flex items-center">
                          <Coffee className="h-4 w-4 mr-2 text-primary" />
                          オフィス環境
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>ウォーターサーバー完備</li>
                          <li>コーヒー紅茶飲み放題</li>
                          <li>こたつコーナー</li>
                          <li className="font-medium text-primary">広々ラウンジ(リフレッシュエリア）</li>
                          <li>屋内禁煙</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3 flex items-center">
                          <Heart className="h-4 w-4 mr-2 text-primary" />
                          社内イベント・交流
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>welcomeランチ（入社祝いランチ）</li>
                          <li>チーム達成会、食事費用負担</li>
                          <li>シャッフルランチ（社内交流を目的の交流会）</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-3 flex items-center">
                          <Gift className="h-4 w-4 mr-2 text-primary" />
                          その他サポート
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>インフルエンザ予防接種補助</li>
                          <li>内閣府ベビーシッター券利用可能</li>
                          <li>ジョブリターン制度</li>
                          <li>書籍購入補助</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 応募ボタン */}
            <div className="mt-12 text-center">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfaZBHltB4aARNJjq1SzfbZu4ec_gTEO9VUP9e5grtTD9aQpw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg rounded-none">
                  この職種に応募する
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer id="page-bottom" className="border-t py-8 bg-[#4496d2] text-white">
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
