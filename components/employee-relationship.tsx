"use client"

import type React from "react"
import Image from "next/image"
import { Users, UserPlus, Briefcase } from "lucide-react"

type Department = {
  id: string
  name: string
  color: string
  icon: React.ReactNode
  description: string
  expanded?: boolean
}

type Employee = {
  id: string
  name: string
  position: string
  department: string
  image: string
  connections: string[]
}

const departments: Department[] = [
  {
    id: "management",
    name: "経営陣",
    color: "bg-primary",
    icon: <Briefcase className="h-5 w-5" />,
    description: "会社の方向性を決定し、全体の戦略を立案します。",
    expanded: true,
  },
  {
    id: "sales",
    name: "営業部",
    color: "bg-orange-500",
    icon: <UserPlus className="h-5 w-5" />,
    description: "企業クライアントとの関係構築と新規開拓を担当します。",
    expanded: true,
  },
  {
    id: "coordinator",
    name: "人材コーディネーター部",
    color: "bg-emerald-500",
    icon: <Users className="h-5 w-5" />,
    description: "求職者と企業のマッチングを行い、採用プロセスをサポートします。",
    expanded: true,
  },
]

const employees: Employee[] = [
  {
    id: "ceo",
    name: "大嶋 琢人",
    position: "代表取締役",
    department: "management",
    image: "/ceo-portrait.png",
    connections: ["sales_manager", "coordinator_manager"],
  },
  {
    id: "sales_manager",
    name: "佐藤 健太",
    position: "営業部長",
    department: "sales",
    image: "/professional-man-suit.png",
    connections: ["sales_1", "sales_2"],
  },
  {
    id: "coordinator_manager",
    name: "田中 美咲",
    position: "人材コーディネーター部長",
    department: "coordinator",
    image: "/professional-woman-smiling.png",
    connections: ["coordinator_1", "coordinator_2"],
  },
  {
    id: "sales_1",
    name: "鈴木 一郎",
    position: "シニア営業",
    department: "sales",
    image: "/employee-4.png",
    connections: [],
  },
  {
    id: "sales_2",
    name: "山田 花子",
    position: "営業",
    department: "sales",
    image: "/employee-2.png",
    connections: [],
  },
  {
    id: "coordinator_1",
    name: "伊藤 直樹",
    position: "シニアコーディネーター",
    department: "coordinator",
    image: "/employee-1.png",
    connections: [],
  },
  {
    id: "coordinator_2",
    name: "中村 優子",
    position: "コーディネーター",
    department: "coordinator",
    image: "/young-professional-woman.png",
    connections: [],
  },
]

export function EmployeeRelationship() {
  return (
    <section className="py-20 bg-[#f8f8f8]">
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
              Relationships chart
            </h2>
          </div>
          <p className="text-xl text-slate-700 font-medium">社員相関図</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="bg-white rounded-none p-6 shadow-md">
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <Image
                src="/simple_relationship-chart.png"
                alt="Simple株式会社 社員相関図"
                width={1000}
                height={1500}
                className="w-full h-auto rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
