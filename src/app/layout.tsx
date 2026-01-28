"use client";

import "./globals.css";
import Header from "@/components/Header";
import AppSidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // サイドバーの開閉を管理
  // TODO: shad-ui化したい
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // ベースhtml表示部分
  return (
    <html lang="ja">
      <head>
        {/* マテリアルアイコンをCDNで導入( TODO: node_modulesに持ってくる?? ) */}
        {/* icomoonで自作してもヨシ */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>

      <body className="coo-mii">

        {/* ヘッダー部分(共通コンポーネント化) */}
        <Header />

        {/* ボディコンテンツ部分(共通コンポーネント化::左右) */}
        <div className="content">

          <SidebarProvider>
            <AppSidebar></AppSidebar>
            <main>
              {/* <span className="material-icons">menu</span> */}
              {/* <SidebarTrigger /> */}
              {children}
            </main>
          </SidebarProvider>

          {/* <Sidebar open={sidebarOpen} />
          <main className="main overflow-y-auto">{children}</main> */}
          {/* TODO: childで1つにして、ログイン認証を挟んで画面遷移させるようにしたい */}
        </div>

        {/* フッダー部分(共通コンポーネント化) */}
        <Footer />
      </body>
    </html>
  );
}
