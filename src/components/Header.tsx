import { SidebarToggle } from "@/components/layouts/SidebarToggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { HeaderappsPanel } from "./modal/HeaderappsPanel";
import { NotificationsPanel } from "./modal/NotificationsPanel";
import { AccountPanel } from "./modal/AccountPanel";

type ModalType = "apps" | "notifications" | "account" | null;

export default function Header() {
  const [modal, setModal] = useState<ModalType>(null);
  const open = modal !== null;

  const openModal = (type: ModalType) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <>
    <header className="header">
      <nav className="h-nav">
        <ul className="head-menu">
          <li>
            <SidebarToggle />
          </li>
          <li className="search-area">
            <input
              type="text"
              className="search-input"
              placeholder="検索キーワードを入力"
            />
            <Button className="search-button">
              <span className="material-icons">search</span>
            </Button>
          </li>
          <li className="head-right">
            <Button type="button" onClick={() => setModal("apps")} className="w-0 bg-white text-black hover:bg-sky-300">
              <span className="material-icons">apps</span>
            </Button>
            <Button type="button" onClick={() => setModal("notifications")} className="w-0 bg-white text-black hover:bg-sky-300">
              <span className="material-icons">notifications</span>
            </Button>
            <Button type="button" onClick={() => setModal("account")} className="w-0 bg-white text-black hover:bg-sky-300">
              <span className="material-icons">account_circle</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>

      {/* 共通モーダル */}
      <Dialog open={open} onOpenChange={(o) => !o && closeModal()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {modal === "apps" && "アプリ"}
              {modal === "notifications" && "通知"}
              {modal === "account" && "アカウント"}
            </DialogTitle>
          </DialogHeader>

          {modal === "apps" && <HeaderappsPanel />}
          {modal === "notifications" && <NotificationsPanel />}
          {modal === "account" && <AccountPanel />}
        </DialogContent>
      </Dialog>
  </>
  )
}
