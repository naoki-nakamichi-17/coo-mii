import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { managers, statusClass } from "@/data/managers";
import { MoreHorizontal } from "lucide-react";

export default function ManagerPage() {
  return (
    <>
    <div>
      <div className="flex items-center justify-between space-y-2">
        <h1>
          担当者一覧
        </h1>
        <Button>
          ユーザ追加
        </Button>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-4 py-4">
          <div className="flex gap-2">
            <Input></Input>
            <Button>ステータス</Button>
            <Button>計画</Button>
            <Button>権限</Button>
          </div>
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">＝</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="rounded-md border">
          <div className="relative w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Checkbox id="terms-checkbox" name="terms-checkbox" />
                  </TableHead>
                  <TableHead>
                    名前
                  </TableHead>
                  <TableHead>
                    権限
                  </TableHead>
                  <TableHead>
                    役職
                  </TableHead>
                  <TableHead>
                    メールアドレス
                  </TableHead>
                  <TableHead>
                    国籍
                  </TableHead>
                  <TableHead>
                    ステータス
                  </TableHead>
                  <TableHead>
                    {/* 空白 */}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {managers.map((manager) => (
                  <TableRow key={manager.id}>
                    <TableCell>
                      <Checkbox id={`manager-${manager.id}`} />
                    </TableCell>

                    <TableCell>{manager.name}</TableCell>
                    <TableCell>{manager.role}</TableCell>
                    <TableCell>{manager.plan}</TableCell>
                    <TableCell>{manager.email}</TableCell>
                    <TableCell>{manager.country}</TableCell>

                    <TableCell>
                      <Badge
                        variant="outline"
                        className={statusClass[manager.status]}
                      >
                        {manager.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="size-9">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View User</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-2 pt-4">
          <div className="text-muted-foreground flex-1 text-sm">
            0 of 40 row(s) selected.
          </div>
          <div className="space-x-2">
            <Button disabled>前へ</Button>
            <Button>次へ</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}