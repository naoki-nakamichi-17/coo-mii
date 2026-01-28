import { assessmentQuestions } from "@/data/assessmentQuestions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function AssessmentPage() {
  return (
    <div className="h-full overflow-y-auto p-6 space-y-6 text-foreground">
      <h1 className="text-xl font-bold">アセスメントシート入力</h1>
      <Separator />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="text-sm font-semibold text-green-600">
              「できている」の回答基準
            </h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>いつももしくはよく自分でできる</li>
              <li>質問内容によく当てはまる</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 space-y-2">
            <h3 className="text-sm font-semibold text-red-600">
              「できていない」の回答基準
            </h3>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              <li>たまにもしくはほとんど自分でできない</li>
              <li>できる日もあればできない日もある</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* ここTableHeader化したい */}
      {/* <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
        <h2 className="text-lg font-semibold">健康・生活</h2>
      </div>
      <Separator /> */}

      <div className="rounded-lg border">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead className="w-[50px] text-center">№</TableHead>
              <TableHead className="w-[80px] py-5 text-center whitespace-normal break-words leading-tight">できている</TableHead>
              <TableHead className="w-[80px] py-5 text-center whitespace-normal break-words leading-tight">だいたいできている</TableHead>
              <TableHead className="w-[80px] py-5 text-center whitespace-normal break-words leading-tight">あまりできていない</TableHead>
              <TableHead className="w-[80px] py-5 text-center whitespace-normal break-words leading-tight">できていない</TableHead>
              <TableHead className="w-3/4">内容</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {assessmentQuestions.map((q) => (
              <TableRow key={q.id} className="h-10">
                <TableCell className="text-center font-medium">
                  {q.code}
                </TableCell>
                <RadioGroup className="contents">
                  <TableCell className="text-center">
                    <RadioGroupItem id={`q-${q.id}`} value="ok" />
                  </TableCell>
                  <TableCell className="text-center">
                    <RadioGroupItem id={`q-${q.id}`} value="maybeok" />
                  </TableCell>
                  <TableCell className="text-center">
                    <RadioGroupItem id={`q-${q.id}`} value="maybeno" />
                  </TableCell>
                  <TableCell className="text-center">
                    <RadioGroupItem id={`q-${q.id}`} value="no" />
                  </TableCell>
                </RadioGroup>

                <TableCell className="text-sm">{q.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
