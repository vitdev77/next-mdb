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

export default async function ColorsPage() {
  const productColors = await prisma.productColor.findMany();

  return (
    <Container className="min-h-[calc(100vh-114px)]">
      <Sidebar />
      <div className="w-full p-6">
        <h1 className="mb-4 text-2xl font-bold">All Product Colors</h1>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Color ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productColors.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-muted-foreground text-center"
                  >
                    No product colors found
                  </TableCell>
                </TableRow>
              ) : (
                productColors.map((productColor) => (
                  <TableRow key={productColor.id}>
                    <TableCell>{productColor.id}</TableCell>
                    <TableCell className="font-medium">
                      {productColor.name}
                    </TableCell>
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
