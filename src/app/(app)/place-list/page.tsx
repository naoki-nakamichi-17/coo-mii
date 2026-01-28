import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function PlaceListPage() {
  return (
    <>
    <h2>オフィス一覧</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">エリア</TableHead>
          <TableHead>オフィス名</TableHead>
          <TableHead>住所</TableHead>
          <TableHead className="text-right">リンク</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">本社</TableCell>
          <TableCell>新宿オフィス</TableCell>
          <TableCell>東京都新宿区西新宿2-1-1 新宿三井ビルディング51F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">北海道</TableCell>
          <TableCell>札幌オフィス</TableCell>
          <TableCell>北海道札幌市中央区大通西11-4-174　53山京ビル5F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">東北</TableCell>
          <TableCell>仙台オフィス</TableCell>
          <TableCell>宮城県仙台市青葉区立町27-21　仙台橋本ビルヂング2F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">首都圏・関東</TableCell>
          <TableCell>水戸オフィス</TableCell>
          <TableCell>茨城県水戸市南町1-3-35　オカバ水戸三の丸ビル4F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">首都圏・関東</TableCell>
          <TableCell>宇都宮オフィス / 宇都宮R&Dセンター</TableCell>
          <TableCell>栃木県宇都宮市東宿郷2-4-3 宇都宮大塚ビル1F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">首都圏・関東</TableCell>
          <TableCell>栃木さくら事業所</TableCell>
          <TableCell>栃木県さくら市鷲宿4300</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">首都圏・関東</TableCell>
          <TableCell>大宮オフィス</TableCell>
          <TableCell>埼玉県さいたま市大宮区宮町1-114-1 ORE大宮ビル3F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">首都圏・関東</TableCell>
          <TableCell>上尾オフィス / 上尾R&Dセンター</TableCell>
          <TableCell>埼玉県上尾市大字壱丁目1番地</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">首都圏・関東</TableCell>
          <TableCell>豊洲オフィス</TableCell>
          <TableCell>東京都江東区豊洲3-2-20 豊洲フロント7F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">首都圏・関東</TableCell>
          <TableCell>日野オフィス</TableCell>
          <TableCell>東京都日野市大坂上1-33-4 田中興業ビル3F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">首都圏・関東</TableCell>
          <TableCell>横浜オフィス / 横浜R&Dセンター</TableCell>
          <TableCell>神奈川県横浜市神奈川区栄町10-35 Jプロポートサイドビル5F</TableCell>
          <TableCell>https://persol-xtech.co.jp/company/plant/</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </>
  )
}