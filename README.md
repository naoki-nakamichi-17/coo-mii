# xxx-xxx（xxxxシステム）

xxx-xxx は、xxxxxxxxx の Web アプリケーションです。

xxxxxxxxxxx
xxxxxxxxxxx

---

## 技術スタック

| 区分           | 技術                                       |
| -------------- | ------------------------------------------ |
| フロントエンド | Next.js 14+ (App Router)                   |
| UI             | React, TypeScript, Tailwind CSS, shadcn/ui |
| バックエンド   | Supabase (PostgreSQL + Auth + API)         |
| 認証           | Supabase Auth                              |
| ホスティング   | AWS amplify                                |

---

## ディレクトリ構成

```text
src/app
├─ (auth)/                 # 認証系（ログイン・登録）
│  ├─ login/
│  │  └─ page.tsx
│  └─ layout.tsx           # 認証用レイアウト
│
├─ (app)/                  # ログイン後のメインアプリ
│  ├─ layout.tsx           # Sidebar + Header + Footer
│  ├─ dashboard/
│  │  └─ page.tsx
│  ├─ assessment/
│  │  └─ page.tsx          # アセスメント入力画面
│  └─ users/
│     └─ page.tsx          # 利用者管理
│
├─ api/                    # Next.js Route Handlers
│  ├─ place-list/
│  │  └─ route.ts
│  └─ ...
│
├─ layout.tsx              # ルートレイアウト
└─ page.tsx                # 初期ページ
```

---

## UI コンポーネント

```text
src/components
├─ layouts/
│ ├─ Header.tsx
│ ├─ Sidebar.tsx
│ └─ Footer.tsx
│
├─ ui/ # shadcn/ui
│ ├─ button.tsx
│ ├─ table.tsx
│ ├─ dialog.tsx
│ └─ ...
```

---

## Supabase 環境構築

### 1. Supabase プロジェクト作成

https://supabase.com で新規プロジェクトを作成

### 2. APIキー取得

Project Settings → API から以下を取得

- Project URL
- anon public key

### 3. 環境変数設定

`.env.local`

NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxx

---

## インストール & 起動

git clone https://github.com/naoki-nakamichi-17/coo-mii.git
cd coo-mii
npm install
npm run dev

ブラウザで以下を開きます：

http://localhost:3000

---

## 開発モードで使っている仕組み

| 機能       | 実装                         |
| ---------- | ---------------------------- |
| 認証       | Supabase Auth                |
| データ取得 | Supabase client + API Routes |
| 状態管理   | React Hooks                  |
| UI         | shadcn + Tailwind            |

---

## 設計方針

- 認証画面と業務画面を Route Groups で分離
- APIは Next.js Route Handler に集約
- UIは shadcn コンポーネントで統一
- Supabase を単一のデータソースとして使用

---

## デプロイ（AWS Amplify）

1. GitHub に push
2. xxxxxxxxxxx
3. xxxxxxxxxxx
4. xxxxxxxxxxx
5. Deploy

---

## ライセンス

xxxxxxxxx

---
