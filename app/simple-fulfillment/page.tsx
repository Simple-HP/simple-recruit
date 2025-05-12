import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calendar, Users, Coffee, Gift, Smile, Camera, Star, Heart, Music } from "lucide-react"

export default function SimpleFulfillmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/simple-logo.png" alt="Simple株式会社ロゴ" width={40} height={40} className="rounded-md" />
            <span className="text-xl font-bold text-primary font-heading">Simple株式会社</span>
          </div>
          <Link href="/#simple-fulfillment">
            <Button variant="ghost" className="gap-2">
              <ChevronLeft size={16} />
              採用サイトに戻る
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <div className="relative w-full h-[50vh] overflow-hidden">
          <Image src="/team-celebration.png" alt="チーム全体の集合写真" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1
                className="text-4xl md:text-6xl font-bold mb-4 font-heading english-text"
                style={{ fontFamily: "'Marker Mark SVG', cursive" }}
              >
                Simple充
              </h1>
              <p className="text-xl md:text-2xl">Simple株式会社での充実した日常をご紹介</p>
            </div>
          </div>
        </div>

        {/* イントロセクション */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 font-heading">Simple充とは</h2>
            <p className="text-lg text-muted-foreground mb-8">
              「Simple充」とは、Simple株式会社での充実した日常を表す言葉です。
              私たちは仕事だけでなく、社内の交流や成長の機会を大切にし、
              一人ひとりが充実感を持って働ける環境づくりに取り組んでいます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">つながり</h3>
                <p className="text-muted-foreground">
                  部署を超えた交流で、多様な視点や考え方に触れる機会を大切にしています。
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">成長</h3>
                <p className="text-muted-foreground">
                  日々の業務や社内イベントを通じて、個人とチームの成長を促進しています。
                </p>
              </div>
              <div className="bg-secondary/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-lg mb-2">楽しさ</h3>
                <p className="text-muted-foreground">
                  仕事の充実感と共に、オフィスでの時間を楽しむ文化を大切にしています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 社内イベントセクション */}
        <section className="py-16 bg-[#f8f9fc]">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-slate-800 relative inline-block font-heading">
              社内イベント
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/office-pizza-party.png"
                    alt="社内イベントの様子"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-sm">2024年4月</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-2">新入社員歓迎会</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    4月に入社した新メンバーを迎えて、ラウンジでピザパーティーを開催しました。チームの垣根を超えて交流を深める貴重な機会となりました。
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>全社イベント</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/office-casual-interaction.png"
                    alt="ランチミーティングの様子"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-sm">毎週水曜日</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-2">シャッフルランチ</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    普段あまり話さないメンバーとランチを共にする機会を作るため、毎週水曜日はランダムにグループ分けしてランチを楽しんでいます。
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>社内交流</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/office-image-3.png"
                    alt="月次総会の様子"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-sm">毎月第一月曜日</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-2">月次総会</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    月に一度、全社員が集まって会社の状況や各チームの成果を共有します。フラットな雰囲気で、誰もが意見を言いやすい環境です。
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>全社ミーティング</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/modern-office.png"
                    alt="社内勉強会の様子"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-sm">毎月第三金曜日</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-2">社内勉強会</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    月に一度、社員が講師となって様々なテーマで勉強会を開催しています。業界知識の共有や新しいスキルの習得に役立っています。
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>スキルアップ</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/office-image-2.png"
                    alt="季節のイベント"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-sm">季節ごと</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium mb-2">季節のイベント</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    花見、夏祭り、ハロウィン、クリスマスなど、季節に合わせたイベントを開催しています。オフィスの装飾や特別なランチなど、日常に彩りを加えています。
                  </p>
                  <div className="flex items-center text-primary text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>季節イベント</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">年間イベントカレンダー</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                <div>
                  <h4 className="font-medium text-primary mb-2">1-3月</h4>
                  <ul className="space-y-2 text-sm">
                    <li>新年会（1月）</li>
                    <li>バレンタインデー企画（2月）</li>
                    <li>期末達成祝賀会（3月）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">4-6月</h4>
                  <ul className="space-y-2 text-sm">
                    <li>新入社員歓迎会（4月）</li>
                    <li>ゴールデンウィーク前パーティー（4月末）</li>
                    <li>チームビルディング研修（6月）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">7-9月</h4>
                  <ul className="space-y-2 text-sm">
                    <li>夏季BBQ大会（7月）</li>
                    <li>納涼会（8月）</li>
                    <li>スポーツ大会（9月）</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-2">10-12月</h4>
                  <ul className="space-y-2 text-sm">
                    <li>ハロウィンパーティー（10月）</li>
                    <li>感謝祭（11月）</li>
                    <li>忘年会（12月）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 社員の声セクション */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-slate-800 relative inline-block font-heading">
              社員の声
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary/30 rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src="/employee-1.png" alt="社員の写真" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">佐藤 健太</p>
                    <p className="text-sm text-muted-foreground">営業部 / 入社3年目</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  「前職では残業が多く、プライベートの時間が取れませんでしたが、Simpleに入社してからは定時で帰れる日が増え、趣味や家族との時間を大切にできるようになりました。フレックス制度のおかげで、自分のライフスタイルに合わせた働き方ができています。」
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Star className="h-4 w-4" />
                  <span>ワークライフバランスの充実</span>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src="/young-professional-woman.png" alt="社員の写真" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">中村 優子</p>
                    <p className="text-sm text-muted-foreground">人材コーディネーター部 / 入社1年目</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  「人材業界は初めてでしたが、先輩方が丁寧に教えてくださり、安心して仕事に取り組めています。何より、求職者さんから『ありがとう』と言われたときのやりがいは何物にも代えがたいです。自分の成長を実感できる職場です。」
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Star className="h-4 w-4" />
                  <span>成長実感とやりがい</span>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src="/employee-4.png" alt="社員の写真" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">鈴木 一郎</p>
                    <p className="text-sm text-muted-foreground">シニア営業 / 入社5年目</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  「社内イベントが多く、他部署の方とも自然に交流できる環境が気に入っています。特にシャッフルランチは毎回新しい発見があり楽しみです。仕事だけでなく、人間関係も充実しているので、毎日の出社が楽しいです。」
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Star className="h-4 w-4" />
                  <span>社内コミュニケーションの活発さ</span>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src="/employee-2.png" alt="社員の写真" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">山田 花子</p>
                    <p className="text-sm text-muted-foreground">営業 / 入社2年目</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground mb-4">
                  「月に一度の社内勉強会が特に好きです。様々な知識やスキルを学べるだけでなく、自分が講師を担当したときは、伝える力も鍛えられました。会社が学びの機会を大切にしてくれていることに感謝しています。」
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Star className="h-4 w-4" />
                  <span>学びと成長の機会</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* オフィスの楽しみ方セクション */}
        <section className="py-16 bg-[#f8f9fc]">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-slate-800 relative inline-block font-heading">
              オフィスの楽しみ方
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">コーヒーブレイク</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  ドリップコーヒーや紅茶が飲み放題。ちょっとした休憩に同僚と一息つけるスペースがあります。
                </p>
                <div className="relative h-40 rounded-md overflow-hidden">
                  <Image src="/modern-office.png" alt="コーヒーブレイクスペース" fill className="object-cover" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">駄菓子コーナー</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  小腹が空いた時に便利な駄菓子コーナー。懐かしいお菓子に癒されます。
                </p>
                <div className="relative h-40 rounded-md overflow-hidden">
                  <Image src="/office-pizza-party.png" alt="駄菓子コーナー" fill className="object-cover" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">ゲーム大会</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  不定期開催のゲーム大会。マリオカートやボードゲームで盛り上がります。
                </p>
                <div className="relative h-40 rounded-md overflow-hidden">
                  <Image src="/office-casual-interaction.png" alt="ゲーム大会の様子" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">BGM制度</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  毎日交代でオフィスBGMの選曲担当を決めています。好きな音楽を共有することで、新たな会話のきっかけにもなっています。
                </p>
                <div className="relative h-40 rounded-md overflow-hidden">
                  <Image src="/office-image-1.png" alt="オフィスの様子" fill className="object-cover" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">フォトスポット</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  オフィス内に季節ごとに変わるフォトスポットを設置。SNS映えする写真が撮れると社員に好評です。
                </p>
                <div className="relative h-40 rounded-md overflow-hidden">
                  <Image src="/office-image-3.png" alt="フォトスポットの様子" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 一日のタイムライン */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-slate-800 relative inline-block font-heading">
              Simple株式会社の一日
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-24 text-right font-medium text-primary">9:30</div>
                <div className="flex-1 border-l-2 border-primary/30 pl-4 pb-6 relative">
                  <div className="absolute w-3 h-3 rounded-full bg-primary left-[-7px] top-1"></div>
                  <h4 className="font-medium">出社</h4>
                  <p className="text-muted-foreground">
                    フレックス制を活用して、自分のペースで出社。
                    <br />
                    コーヒーを淹れながら、今日のタスクを確認します。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-24 text-right font-medium text-primary">10:00</div>
                <div className="flex-1 border-l-2 border-primary/30 pl-4 pb-6 relative">
                  <div className="absolute w-3 h-3 rounded-full bg-primary left-[-7px] top-1"></div>
                  <h4 className="font-medium">朝のチームミーティング</h4>
                  <p className="text-muted-foreground">
                    チーム内で今日の予定を共有。
                    <br />
                    「良かったこと」を一人ずつ発表して、ポジティブな気持ちで一日をスタート。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-24 text-right font-medium text-primary">12:30</div>
                <div className="flex-1 border-l-2 border-primary/30 pl-4 pb-6 relative">
                  <div className="absolute w-3 h-3 rounded-full bg-primary left-[-7px] top-1"></div>
                  <h4 className="font-medium">ランチタイム</h4>
                  <p className="text-muted-foreground">
                    水曜日はシャッフルランチの日。
                    <br />
                    普段話さない部署の人と一緒にランチを楽しみます。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-24 text-right font-medium text-primary">15:00</div>
                <div className="flex-1 border-l-2 border-primary/30 pl-4 pb-6 relative">
                  <div className="absolute w-3 h-3 rounded-full bg-primary left-[-7px] top-1"></div>
                  <h4 className="font-medium">おやつタイム</h4>
                  <p className="text-muted-foreground">
                    駄菓子コーナーで小腹を満たしながら、
                    <br />
                    同僚とちょっとした雑談を楽しみます。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-24 text-right font-medium text-primary">17:30</div>
                <div className="flex-1 border-l-2 border-primary/30 pl-4 relative">
                  <div className="absolute w-3 h-3 rounded-full bg-primary left-[-7px] top-1"></div>
                  <h4 className="font-medium">業務終了</h4>
                  <p className="text-muted-foreground">
                    翌日の準備をして退社。
                    <br />
                    金曜日は希望者で軽く飲み会をすることも。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Simple株式会社の一日を体験してみませんか？</h3>
              <p className="mb-6">私たちと一緒に、充実した毎日を過ごしましょう。</p>
              <Link href="/#positions">
                <Button className="bg-primary hover:bg-primary/90">募集職種を見る</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* フォトギャラリー */}
        <section className="py-16 bg-[#f8f9fc]">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-slate-800 relative inline-block font-heading">
              フォトギャラリー
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"></span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/office-pizza-party.png" alt="社内イベントの様子" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/office-casual-interaction.png" alt="オフィスでの交流" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/office-image-1.png" alt="オフィスの様子" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/office-image-2.png" alt="オフィスの様子" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/office-image-3.png" alt="オフィスの様子" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/modern-office.png" alt="モダンなオフィス" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/team-celebration.png" alt="チーム全体の集合写真" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/career-advisors-team.png" alt="キャリアアドバイザーチーム" fill className="object-cover" />
              </div>
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
                className="rounded-md bg-white"
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
