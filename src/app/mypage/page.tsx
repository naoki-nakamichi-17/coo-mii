import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function MyPage() {
  return (
    <>
      <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12 pb-4">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value={"overview"}>利用者情報</TabsTrigger>
            <TabsTrigger value={"projects"}>アセスメント回答情報</TabsTrigger>
            <TabsTrigger value={"activities"}>診断結果確認</TabsTrigger>
            <TabsTrigger value={"members"}>個別支援計画書</TabsTrigger>
            <TabsTrigger value={"members"}>モニタリング</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

        <div className="grid gap-4 xl:grid-cols-3">
          <div className="space-y-4 xl:col-span-1">
            <Card>
              <CardContent>
                <div className="space-y-12">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="relative flex shrink-0 overflow-hidden rounded-full size-20">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h5 className="flex items-center gap-2 text-xl font-semibold">
                        Naoki Nakamichi
                      </h5>
                      <span className="">
                        <Badge>
                          beginner
                        </Badge>
                      </span>
                    </div>
                  </div>
                  <div className="bg-muted grid grid-cols-3 divide-x rounded-md border text-center *:py-3">

                  </div>
                  <div className="flex flex-col gap-y-4">

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 xl:col-span-2">
            <Card>
              <CardContent>
                <Avatar size="lg">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </CardContent>
            </Card>
          </div>
        </div>
    </>
  )
}