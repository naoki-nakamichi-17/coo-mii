"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Location = {
  id: string;
  name: string;
  area: string;
  address: string | null;
  url: string | null;
};

export default function LocationClient() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    area: "",
    address: "",
    url: "",
  });

  // 初回表示
  useEffect(() => {
    const fetchLocations = async () => {
      const res = await fetch("/api/place-list");
      const json = await res.json();
      setLocations(json.data);
      setLoading(false);
    };
    fetchLocations();
  }, []);

  // 追加
  const createLocation = async () => {
    const res = await fetch("/api/place-list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const json = await res.json();
    if (!res.ok) {
      alert(json.error);
      return;
    }
    setLocations((prev) => [...prev, json.data]);
    setOpen(false);
    setForm({ name: "", area: "", address: "", url: "" });
  };
  if (loading) return <div>読み込み中...</div>;
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">事業所一覧</h2>
        <button
          onClick={() => setOpen(true)}
          className="px-3 pt-2 rounded bg-gray-300 text-white text-lg hover:cursor-pointer"
        >
          <p className="material-icons material-icon-preview">add_circle</p>
        </button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>エリア</TableHead>
            <TableHead>オフィス名</TableHead>
            <TableHead>住所</TableHead>
            <TableHead>リンク</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {locations.map((loc) => (
            <TableRow key={loc.id}>
              <TableCell>{loc.area}</TableCell>
              <TableCell>{loc.name}</TableCell>
              <TableCell>{loc.address}</TableCell>
              <TableCell>
                {loc.url && (
                  <a
                    href={loc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    リンク
                  </a>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* 追加モーダル */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>拠点を追加</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>エリア</Label>
              <Input value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
            </div>
            <div>
              <Label>オフィス名</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <Label>住所</Label>
              <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            </div>
            <div>
              <Label>URL</Label>
              <Input value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
            </div>

            <button
              onClick={createLocation}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              登録
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
