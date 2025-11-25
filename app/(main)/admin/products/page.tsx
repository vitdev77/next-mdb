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

export default async function ProductPage() {
  const products = await prisma.product.findMany();

  return (
    <Container className="min-h-[calc(100vh-114px)]">
      <Sidebar />
      <div className="w-full p-6">
        <h1 className="mb-4 text-2xl font-bold">All Products</h1>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Product ID</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Image Path</TableHead>
                <TableHead>Color ID</TableHead>
                <TableHead>Series ID</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-muted-foreground text-center"
                  >
                    No products found
                  </TableCell>
                </TableRow>
              ) : (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>Midea</TableCell>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground/50">
                      {product.imageUrl}
                    </TableCell>
                    <TableCell>{product.productColorId}</TableCell>
                    <TableCell>{product.seriesId}</TableCell>
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
