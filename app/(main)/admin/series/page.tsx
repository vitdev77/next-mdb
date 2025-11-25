import { Container } from "@/components/container";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { PenIcon, Trash2 } from "lucide-react";

export default async function SeriesPage() {
  const series = await prisma.series.findMany();

  return (
    <Container className="min-h-[calc(100vh-114px)]">
      <Sidebar />
      <div className="w-full p-6">
        <h1 className="mb-4 text-2xl font-bold">All Series</h1>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Series ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Brand ID</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {series.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-muted-foreground text-center"
                  >
                    No series found
                  </TableCell>
                </TableRow>
              ) : (
                series.map((seriesItem) => (
                  <TableRow key={seriesItem.id}>
                    <TableCell>{seriesItem.id}</TableCell>
                    <TableCell className="font-medium">
                      {seriesItem.name}
                    </TableCell>
                    <TableCell>{seriesItem.brandId}</TableCell>
                    <TableCell>
                      <div className="flex flex-row justify-end gap-2">
                        <Button size={"sm"}>
                          <PenIcon /> Edit
                        </Button>
                        <Button variant={"destructive"} size={"sm"}>
                          <Trash2 /> Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </Container>
  );
}
