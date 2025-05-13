"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { EmployeeRelationship } from "@/components/employee-relationship";
import { CeoMessage } from "@/components/ceo-message";
import { HamburgerMenu } from "@/components/hamburger-menu";
import { WorkEpisodes } from "@/components/work-episodes";
import { SimpleFulfillment } from "@/components/simple-fulfillment";
// import { Calendar } from 'lucide-react' // Removed duplicate import

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const [showReferralFlow, setShowReferralFlow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // スクロール位置が0の場合、またはスクロールが上向きの場合はヘッダーを表示
      if (currentScrollY <= 0) {
        setShowHeader(true);
      }
      // スクロールが下向きの場合はヘッダーを非表示
      else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      }
      // スクロールが上向きの場合はヘッダーを表示
      else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-white shadow-sm transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo_corporate.webp"
              alt="Simple Inc. ロゴ"
              width={150}
              height={40}
              className="rounded-none h-8 w-auto"
            />
            <span className="text-xl font-bold text-[#4496d2] font-heading hidden sm:inline">採用HP</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#referral"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("referral")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              リファラル応募
            </a>
            <a
              href="#positions"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              募集職種
            </a>
            <a
              href="#employee-relationship"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("employee-relationship")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              社員相関図
            </a>
            <a
              href="#work-episodes"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work-episodes")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              エピソード
            </a>
            <a
              href="#simple-fulfillment"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("simple-fulfillment")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Simple but unique
            </a>
            <a
              href="#company-events"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("company-events")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              社内行事
            </a>
            <a
              href="#ceo-message"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const ceoSection = document.getElementById("ceo-message");
                if (ceoSection) {
                  // スクロール位置を少し上に調整して、見出しと写真の両方が見えるようにする
                  const headerHeight = 80; // ヘッダーの高さの概算
                  const yOffset = -headerHeight; // 少し上にオフセット
                  const y = ceoSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              代表メッセージ
            </a>
          </nav>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfaZBHltB4aARNJjq1SzfbZu4ec_gTEO9VUP9e5grtTD9aQpw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 transition-colors rounded-none">エントリー</Button>
          </Link>
        </div>
      </header>

      {/* ハンバーガーメニュー（スクロール時に表示） */}
      {!showHeader && (
        <HamburgerMenu>
          <a
            href="#"
            className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
            onClick={() => setOpen(false)}
          >
            リファラル特設ページ
          </a>
          <a
            href="#referral"
            className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("referral")?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            リファラル応募
          </a>
          <a
            href="#positions"
            className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("positions")?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            募集職種
          </a>
          <a
            href="#employee-relationship"
            className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("employee-relationship")?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            社員相関図
          </a>
          <a
            href="#work-episodes"
            className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work-episodes")?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            エピソード
          </a>
          <a
            href="#simple-fulfillment"
            className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("simple-fulfillment")?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            Simple but unique
          </a>
          <a
            href="#company-events"
            className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("company-events")?.scrollIntoView({ behavior: "smooth" });
              setOpen(false);
            }}
          >
            社内行事
          </a>
          <a
            href="#ceo-message"
            className="px-2 py-3 hover:bg-primary/10 rounded-none transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const ceoSection = document.getElementById("ceo-message");
              if (ceoSection) {
                // スクロール位置を少し上に調整して、見出しと写真の両方が見えるようにする
                const headerHeight = 80; // ヘッダーの高さの概算
                const yOffset = -headerHeight; // 少し上にオフセット
                const y = ceoSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setOpen(false);
              }
            }}
          >
            代表メッセージ
          </a>
        </HamburgerMenu>
      )}

      {/* ヒーローセクション */}
      <section className="relative bg-white overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/team-members-peace-signs-new.jpeg"
            alt="Simple株式会社のチームメンバー"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 py-16 md:py-32 z-10 relative">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <div className="space-y-6 text-center">
                <h1 className="text-base md:text-5xl font-bold tracking-tight text-white/80 drop-shadow-lg">
                  <span className="text-xl md:text-4xl block mb-2 text-white/80 drop-shadow-lg">
                    「出会えてよかった」人になる
                  </span>
                </h1>

                <div className="space-y-2">
                  <p className="text-sm md:text-lg text-white/70 drop-shadow-lg">
                    何に悩んでいるかわからなくなったとき、
                  </p>
                  <p className="text-sm md:text-lg text-white/70 drop-shadow-lg">前に進めなくなったとき、</p>
                  <p className="text-sm md:text-lg text-white/70 drop-shadow-lg">あのとき、あなたがいてくれたから</p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm md:text-lg text-white/70 drop-shadow-lg">わたしたちは、そんな存在を目指し</p>
                  <p className="text-sm md:text-lg text-white/70 drop-shadow-lg">
                    日々ひとりひとりの声に向き合っています
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm md:text-lg text-white/70 drop-shadow-lg">
                    「出会えてよかった」と思ってもらえる人でありたい
                  </p>
                  <p className="text-sm md:text-lg text-white/70 drop-shadow-lg">それがSimple Pride</p>
                  <p className="text-sm md:text-lg text-white/70 drop-shadow-lg">大切にしている想いです</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* リファラル応募セクション */}
      <section id="referral" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10 cursor-pointer" onClick={() => setShowReferralFlow(!showReferralFlow)}>
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
                Referral Program
              </h2>
            </div>
            <p className="text-xl text-slate-700 font-medium">リファラル応募をご検討中の方へ</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
            <p className="text-sm text-primary mt-4 flex items-center justify-center gap-1">
              {showReferralFlow ? "閉じる" : "クリックして詳細を見る"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform ${showReferralFlow ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </p>
          </div>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              showReferralFlow ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mb-10">
              <p className="text-lg text-muted-foreground mb-6">
                リファラル応募の方は、一次選考免除で二次面接（人事責任者との面接）からスタートしていただきます！
              </p>
            </div>

            <div className="bg-primary/5 p-8">
              <h3 className="text-xl font-medium mb-4 flex items-center">リファラル応募の流れ</h3>
              <ol className="space-y-4 ml-6 list-decimal">
                <li className="pl-2">
                  <span className="font-medium">社員からの紹介</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Simple株式会社の社員から紹介を受け、リファラル応募フォームに必要事項を記入します。
                  </p>
                </li>
                <li className="pl-2">
                  <span className="font-medium">面接（1〜2回）</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    リファラル応募の場合、通常より少ない回数の面接で選考を進めることが可能です。
                  </p>
                </li>
                <li className="pl-2">
                  <span className="font-medium">内定・入社</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    入社日の調整や入社前の準備についても、紹介者と人事部が連携してサポートします。
                  </p>
                </li>
              </ol>
              <div className="mt-6 text-center">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe01Bc_wcmSsIYymGgSO1_NL7ns3Lu1-MedRCsGnYOPd6UQ_Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-primary hover:bg-primary/90 rounded-none">リファラル応募フォームへ</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 募集職種セクション */}
      <section id="positions" className="py-20 bg-[#f8f9fc]">
        <div className="container">
          <div className="text-center mb-10">
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
                Recruit
              </h2>
            </div>
            <p className="text-xl text-slate-700 font-medium">募集職種</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/positions/career-advisor-entry#page-top" className="block" scroll={true}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group rounded-none">
                <CardContent className="p-6 relative min-h-[220px]">
                  <div className="absolute inset-0 z-0 transition-all duration-300 group-hover:opacity-25 group-hover:bg-white/50">
                    <Image
                      src="/office-casual-interaction.png"
                      alt="キャリアアドバイザーのイメージ"
                      fill
                      className="object-cover opacity-15 object-center rounded-none"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-primary flex flex-col justify-center items-center text-white">
                      <p className="text-xs font-medium">月給28.5万円〜 / 正社員 / 東京都品川区</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full pt-[10px]">
                    <h3 className="text-xl font-semibold mb-1 text-primary">キャリアアドバイザー</h3>
                    <p className="text-sm text-primary/70 mb-4">未経験</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/positions/career-advisor-experienced#page-top" className="block" scroll={true}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group rounded-none">
                <CardContent className="p-6 relative min-h-[220px]">
                  <div className="absolute inset-0 z-0 transition-all duration-300 group-hover:opacity-25 group-hover:bg-white/50">
                    <Image
                      src="/career-advisors-team.png"
                      alt="キャリアアドバイザー（経験者）チームのイメージ"
                      fill
                      className="object-cover opacity-15 object-center rounded-none"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-primary flex flex-col justify-center items-center text-white">
                      <p className="text-xs font-medium">月給33万円〜 / 正社員 / 東京都品川区</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full pt-[10px]">
                    <h3 className="text-xl font-semibold mb-1 text-primary">キャリアアドバイザー</h3>
                    <p className="text-sm text-primary/70 mb-4">経験者</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 社員相関図セクション */}
      <section id="employee-relationship">
        <EmployeeRelationship />
      </section>

      {/* 働き方エピソードセクション */}
      <section id="work-episodes">
        <WorkEpisodes />
      </section>

      {/* Simple充セクション */}
      <section id="simple-fulfillment">
        <SimpleFulfillment />
      </section>

      {/* 社内行事セクション */}
      <section id="company-events" className="py-20 bg-white">
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
              Company Events
            </h2>
          </div>
          <p className="text-xl text-slate-700 font-medium text-center mb-2">社内行事</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary/30 p-6 rounded-none overflow-hidden mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 overflow-hidden rounded-none">
                  <video
                    className="w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    autoPlay
                    muted
                    style={{ objectPosition: "center 15%" }}
                  >
                    <source src="/videos/welcome-event.mov" type="video/quicktime" />
                    <source src="/videos/welcome-event.mov" type="video/mp4" />
                    お使いのブラウザはビデオタグをサポートしていません。
                  </video>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">新入社員歓迎会</h3>
                  <p className="text-muted-foreground mb-4">
                    新しく仲間になったメンバーを温かく迎えるピザパーティーを開催。社長の「かんぱ～い！」を合図に歓迎会がスタート！部署を超えた交流を深める貴重な機会となっています。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/30 p-6 rounded-none overflow-hidden mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 overflow-hidden rounded-none">
                  <Image
                    src="/company-bbq-gathering.jpeg"
                    alt="社内BBQイベントの様子"
                    fill
                    className="object-cover rounded-none"
                    style={{ objectPosition: "center" }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">BBQ</h3>
                  <p className="text-muted-foreground mb-4">
                    毎年夏には恒例のBBQを開催！お酒をお供に恋バナからお仕事の話まで会話が弾みます♪
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/30 p-6 rounded-none overflow-hidden mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 overflow-hidden rounded-none">
                  <video className="w-full h-full object-cover" preload="metadata" playsInline autoPlay muted>
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-5171181122428409296img_7310-6H9SztH4AsBny85gGEJePuueKjPfo9.mov"
                      type="video/quicktime"
                    />
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/-5171181122428409296img_7310-6H9SztH4AsBny85gGEJePuueKjPfo9.mov"
                      type="video/mp4"
                    />
                    お使いのブラウザはビデオタグをサポートしていません。
                  </video>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">浅草酉の市ご参拝</h3>
                  <p className="text-muted-foreground mb-4">
                    毎年11月はみんなで浅草の酉の市へ！熊手を買って商売繁盛を祈願します！縁起物と共に思い出も増えていきます。社員同士の絆を深める大切な年間行事の一つです。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/30 p-6 rounded-none overflow-hidden mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 overflow-hidden rounded-none">
                  <video
                    className="w-full h-full object-cover"
                    preload="metadata"
                    playsInline
                    autoPlay
                    muted
                    style={{ objectPosition: "center 20%" }}
                  >
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0179-kUmzf7FhNFXjXTZvE9F7sTdStUPene.MOV"
                      type="video/quicktime"
                    />
                    <source
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0179-kUmzf7FhNFXjXTZvE9F7sTdStUPene.MOV"
                      type="video/mp4"
                    />
                    お使いのブラウザはビデオタグをサポートしていません。
                  </video>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">忘年会</h3>
                  <p className="text-muted-foreground mb-4">
                    毎年12月には社員全員参加の忘年会を開催！BINGOやクイズ大会など楽しめる内容が盛り沢山です(^^)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 代表メッセージセクション */}
      <section id="ceo-message">
        <CeoMessage />
      </section>

      {/* エントリーセクション */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0636%20%281%29.jpg-GgzAJsDI6Gn7iHVqfKoDnmwytRYypO.jpeg"
          alt="Simple株式会社のチームメンバー"
          fill
          className="object-cover rounded-none"
          objectPosition="center top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex flex-col items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4 w-full">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSe01Bc_wcmSsIYymGgSO1_NL7ns3Lu1-MedRCsGnYOPd6UQ_Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block group md:w-1/2"
              >
                <div className="bg-primary p-4 text-center transition-transform group-hover:translate-y-[-5px] shadow-lg h-full mx-auto w-1/2">
                  <p className="text-base font-medium mb-2">Reffaral Program / リファラル採用</p>
                  <div className="w-6 h-0.5 bg-white mx-auto"></div>
                </div>
              </Link>

              <Link href="/positions/career-advisor-experienced#page-top" className="block group md:w-1/2">
                <div className="bg-primary p-4 text-center transition-transform group-hover:translate-y-[-5px] shadow-lg h-full mx-auto w-1/2">
                  <p className="text-base font-medium mb-2">Career / 中途採用</p>
                  <div className="w-6 h-0.5 bg-white mx-auto"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12 bg-[#4496d2] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo_corporate.webp"
                  alt="Simple Inc. ロゴ"
                  width={150}
                  height={40}
                  className="rounded-none h-8 w-auto bg-white p-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">採用情報</h3>
                <ul className="space-y-2 text-white/80">
                  <li>
                    <a href="#positions" className="hover:text-white transition-colors">
                      募集職種
                    </a>
                  </li>
                  <li>
                    <a
                      href="#referral"
                      className="hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("referral")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      リファラル応募
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>東京都品川区</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-6 text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} Simple株式会社 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
