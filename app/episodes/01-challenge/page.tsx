"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function CareerAdvisorEpisode() {
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
            src="https://drive.google.com/file/d/16xcx6cr6cO9r5ZRo9z01jWFqSDocaPA7/view?usp=drive_link"
            alt="キャリアアドバイザーの様子"
            fill
            className="object-cover"
            priority
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">
                ＜＜１日密着！＞＞
                <br />
                キャリアアドバイザー
                <br />
                ってどんな仕事？
              </h1>
            </div>
          </div>
        </div>

        {/* コンテンツセクション */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <article className="prose prose-lg max-w-none">
              <p>みなさん こんにちは！Simple株式会社の古鳥です。</p>

              <p>
                そもそもキャリアアドバイザーの業務って…？
                <br />
                どんなことがやりがいなの…？本当の所、結構大変なんじゃないの…？
              </p>

              <p>
                など、気になるポイントを社員密着レポを通してお伝えしたいと思います！
                <br />
                今回は、入社2年目（2024年4月入社）の奈良原さんにご協力いただきました♫
                <br />
                ぜひご一読ください！
              </p>

              <div className="my-8 bg-gray-50 p-6 rounded-none overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-full md:w-1/3">
                    <Image
                      src="/naraharasan.webp"
                      alt="奈良原さん / しんぷる保育のキャリアアドバイザー"
                      width={300}
                      height={300}
                      className="rounded-none mx-auto shadow-md"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-xl font-medium text-primary mb-3">
                      奈良原さん / しんぷる保育のキャリアアドバイザー
                    </h3>
                    <div className="text-muted-foreground space-y-2">
                      <p>
                        <strong>＜趣味・休日の過ごし方＞</strong>
                        アイドルが好きで月に1〜2回はライブへ。休日はNetflixを見ながらリラックスしたり、友人とカフェ巡りをしたりと、オンとオフのメリハリをつけて過ごしています♪
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-medium text-primary text-center my-6">
                ・ﾟ保育チーム奈良原さんのとある1日のスケジュール・ﾟ
              </h3>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">10：50　出社</h4>
                <p>
                  PCを立ち上げて、メールチェック、Chatworkチェックをして、今日やるタスクをまとめたり、
                  <br />
                  しばらく席から立たなくていいように、自席に飲み物とお菓子を確保します笑
                </p>
                <p>弊社には駄菓子コーナーがあるので、小腹が空いた時にとっても助かっています(*^^*)</p>
              </div>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">11：00　始業</h4>
                <p>チーム内で朝のMTGを行います。</p>
                <p>
                  朝のMTGでは社内共有をしたり、昨日までに成約した案件があったらそれを発表して褒め合ったり、
                  <br />
                  社内外問わず、昨日起きた"良かったこと"を1人1個ずつ発表して、明るい気持ちで一日がスタートします☆
                </p>
                <p>
                  また、自分の業務がパンクしてる時は、新規の求職者対応をチームの中で業務に余裕がある人に依頼したりして、1人だけに負荷がかかりすぎて潰れてしまわないように、みんなで協力して進めています(*^^*)
                </p>
              </div>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">12：00～　週次レビュー</h4>
                <p>
                  自分が担当している求職者さんの状況をチーム長に説明しながら、
                  <br />
                  その人が転職する上で一番大事にしたい事を整理して、提案先の相談をしたりします。
                </p>

                <div className="bg-primary/10 p-4 rounded-none my-4">
                  <h5 className="font-bold">『レビュー』とは…？</h5>
                  <ul className="list-disc pl-5 mt-2">
                    <li>担当している求職者さんへの提案先をどう見つけるか</li>
                    <li>その方にとってベストな就業先はどこか</li>
                    <li>
                      採用活動を行うのは心身ともに大変なので、最短でゴールできるようにするにはどんな業務をしないといけないか
                    </li>
                  </ul>
                  <p className="mt-2">といったことを確認・相談する場です。</p>
                </div>

                <p>
                  Simpleの行動指針の一つでもある「求職者Happy、事業所Happy」を心がけながら、ベストな選択をしていただけるように提案の準備を行います。
                </p>
              </div>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">14：00～15：00　ランチタイム</h4>
                <p>日によって、休憩を取る時間はバラバラですが、だいたいこの時間になります。</p>
                <p>
                  先輩後輩の上下関係がなくフラットな雰囲気なので、社内のラウンジで居合わせたメンバーと食べることが多いです。チームの先輩や同期と一緒に、オフィス近くの本場カレー屋さんに行ったり、先日は達成ランチでチームのメンバーとスシローで豪遊しました(*^^*)笑
                  <br />
                  （達成ランチ：月間目標を達成したグループへ会社からランチのプレゼント！）
                </p>
              </div>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">15：00～　MC（マッチングコール）タイム！</h4>
                <p>
                  先輩とレビューをして求職者さんに提案する求人の方向性が定まったので、
                  <br />
                  MCをして、どんどん求人探しを進めていく時間になります♪
                </p>

                <div className="bg-primary/10 p-4 rounded-none my-4">
                  <h5 className="font-bold">『MC』とは…？</h5>
                  <p className="mt-2">
                    通勤圏内の保育園に架電をして、「募集状況の確認」や「こういった保育士さんがお仕事を探しているのですが、条件に合いますか？」など、"保育士さんと保育園の条件をマッチングする為の架電"です。
                  </p>
                  <p className="mt-2">
                    私は元々保育業界で働いていたので、保育園の状況を考えると、
                    <br />
                    15:00以降はお昼寝明けかおやつの時間帯で、比較的園内が落ち着いてるイメージなので、
                    <br />
                    園長先生がお手隙そうなこの時間を狙っています☆
                  </p>
                </div>
              </div>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">17：00～　求職者さんへの提案先の整理やメルマガ配信</h4>
                <p>
                  MCで見つけた求人の情報をまとめて、電話やLINEで分かりやすく提案出来るように、
                  <br />
                  情報を整理したり、社内でその園に詳しい人が居たら情報を聞きに行ったり、、、
                </p>
                <p>
                  また、MCで求人を見つけたけど、今対応している求職者さんの条件には合わないなぁ…という求人は、
                  <br />
                  メルマガとして、他の求職者さんに一斉配信を行ったりもします！
                </p>
                <p>
                  しんぷるでは、これまでに沢山の保育士さんが登録をしてくださっていますが、
                  <br />
                  時期などの要因で、登録してすぐに希望に合った求人を提案できない事もあります…(´；ω；｀)
                  <br />
                  そういった人達に向けて、「お待たせしました！求人出ました～！」とメルマガ配信をする事で、
                  <br />
                  様々な希望条件の方たちに求人が行き渡るというわけです(*^^*)
                </p>
              </div>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">18：00～　求職者さんとの電話面談</h4>
                <p>
                  18時以降は、1日の中で求職者さんと1番電話が繋がりやすい時間帯になります。
                  <br />
                  初回のお電話でタイミングが悪くお話できなかった方に再度お電話して、
                  <br />
                  ご希望条件のヒアリングをしたり、保育園のご紹介をしたりしています。
                  <br />
                  お電話が難しい方もいるので、ショートメールやLINEでアプローチすることもあります！
                  <br />
                  出来るだけ求職者さんに負担のないように、コミュニケーションをとることを心がけています☺️
                </p>
                <p>
                  転職したい時期、ご希望条件の基本的なヒアリングはもちろんのこと、
                  <br />
                  本当に困っていることは何なのかを意識して面談を行っています。
                  <br />
                  例え今回転職を選択されなくても、次困ったときに頼っていただけるような関係性を築けるように心がけています(*^^*)
                </p>
              </div>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">20：00～20：30　退勤☆</h4>
                <p>
                  明日でも良い業務は明日の自分に任せて、今日しか出来ない業務が終わっていたら、
                  <br />
                  20：00ぴったりにタイムカードを切っちゃいます(*^^*)☆
                </p>
                <p>
                  求職者さんのお仕事が終わるタイミングやご都合によっては、
                  <br />
                  稀に21：00～求職者さんとのアポが入る日もあります！
                  <br />
                  その日は、日中の間に在宅業務に切り替えてお家で架電対応する事もあります♪
                </p>
                <p>
                  リモートワークでも業務ができる仕組みが整っているので、ワークライフバランスがとりやすいなと感じていますが、出社したほうが気軽に相談できたりするので、わたしは出社するほうが好きです(*^^*)
                </p>
              </div>

              <div className="timeline-item pl-8 pb-6 relative">
                <div className="timeline-dot"></div>
                <h4 className="font-bold text-lg">21：00　就業後</h4>
                <p>わたしは会社の同期や先輩を誘って、よくご飯に行きます！</p>
                <p>
                  仕事の事からプライベートな事まで相談できる人たちが周りに沢山居るので、
                  <br />
                  会社に居る時も会社を出た後も楽しく充実して過ごすことができています♪
                </p>
              </div>

              <h3 className="text-xl font-medium text-primary text-center my-6">
                ・ﾟ以上！奈良原さんのとある1日のスケジュールでした・ﾟ
              </h3>

              <div className="bg-gray-50 p-6 rounded-none my-8">
                <h4 className="font-bold text-lg text-primary">◎嬉しかったエピソード◎</h4>
                <p className="mt-4">
                  『他の会社も登録したけど、そっちは断りました！』
                  <br />
                  『奈良原さんだから言えるんですけど。。』
                  <br />
                  『同じ職場にいたら良かった。。一緒に働きたかったです』
                  <br />
                  など、もちろん目標数字を達成した時も嬉しいんですけど、それ以上に人と人のつながりの中で『奈良原さんにお願いして良かったです！』と言っていただける事が、人材紹介ならではの嬉しい瞬間かなと思います！
                </p>
                <p className="mt-4">
                  他にも
                  <br />
                  『同じ保育士として、そこも理解してもらえるんですか？』
                  <br />
                  など求職者さんに共感できる事が多くて嬉しいですし、キャリアアドバイザーとしての仕事に誇りを持てる瞬間だなと思いました(*^^*)♪
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-none my-8">
                <h4 className="font-bold text-lg text-primary">◎成長を感じたエピソード◎</h4>
                <p className="mt-4">
                  初めの頃は、求職者さんがどういう所で働きたいのか、何に悩んでいるのか自分でも分からない方の悩み相談で終わってしまい解決に導く事が出来ず、悩んでいたのですが、色々な求職者さんと話をして、様々な境遇やエピソードを聞いていく内に、その人の根底の悩みに行き着く事が出来、こういう選択肢がありますよ！こういう選択肢もありますよ！等の解決策を出せるようになってきたなと思います(^^)
                </p>
                <p className="mt-4">
                  『まさかこんなにすぐ転職先が見つかると思ってなかったです。』
                  <br />
                  『転職活動に踏み出す勇気をもらえました！』と言っていただいた時は、私…成長したなぁ…！と感じました♪
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-none my-8">
                <h4 className="font-bold text-lg text-primary">◎大変だったなと思ったエピソード◎</h4>
                <p className="mt-4">
                  通勤圏内に存在しているありったけの求人を求職者さんに提案しても、中々求職者さんがここだ！と思える求人を提案できなかった時に、どういう園がこの人に合っているのかが分からなくなってしまった時、この仕事って難しいなと思います。
                </p>
                <p className="mt-4">
                  自分にとっては「こんなに良い求人、他に無いよ…！」と思っても、求職者さんにとってはそうでもなかったりするんですよね…。それがショックという訳ではなくて、「まだこの人のニーズに辿り着けていなかったか…」と悔しい気持ちになるんです。
                  <br />
                  ただ、そんな時には周りに相談できる先輩が沢山居てくれて、頼れる同期もいてくれるので、なんだかみんなで謎解きしてるみたいに楽しんで求人を探し直します！＼(^o^)／
                </p>
                <p className="mt-4">
                  特にSimpleには、保育士経験のあるアドバイザーが多いので、保育園あるあるとか保育士の悩みにより寄り添った答えが見つけられるなと思いますし、逆に自分も保育士経験があるので頼られることもあります♪
                </p>
                <p className="mt-4">
                  他にも、経理の経験や他の営業職経験があるアドバイザーもいるので、保育以外の一般職の業界の事も教えてもらえますし、とにかく「みんなでゴールに向かっている！」という感じは強くありますね…！
                </p>
                <p className="mt-4">
                  大変だったエピソードを語るはずが、改めてSimpleの良い所を再確認しちゃいました…(^o^)☆笑
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-none text-center my-12">
                <p className="text-xl font-bold text-primary mb-4">ぜひ、Simple株式会社で一緒に働いてみませんか？</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/positions/career-advisor-entry#page-top">
                    <Button className="bg-primary hover:bg-primary/90 mt-4 rounded-none">未経験の方はこちら</Button>
                  </Link>
                  <Link href="/positions/career-advisor-experienced#page-top">
                    <Button className="bg-primary hover:bg-primary/90 mt-4 rounded-none">経験者の方はこちら</Button>
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
