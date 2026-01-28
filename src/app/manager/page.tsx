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
          Users
        </h1>
        <Button>
          Add New User
        </Button>
      </div>

      <div className="w-full">
        <div className="flex items-center gap-4 py-4">
          <div className="flex gap-2">
            <Input></Input>
            <Button>Status</Button>
            <Button>Plan</Button>
            <Button>Role</Button>
          </div>
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
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
                    Name
                  </TableHead>
                  <TableHead>
                    Role
                  </TableHead>
                  <TableHead>
                    Plan
                  </TableHead>
                  <TableHead>
                    Email
                  </TableHead>
                  <TableHead>
                    Country
                  </TableHead>
                  <TableHead>
                    Status
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
            <Button disabled>Preview</Button>
            <Button>Next</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}