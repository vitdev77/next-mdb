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
import { CreateBrandForm } from "./create-brand-form";

export default async function BrandsPage() {
  const brands = await prisma.brand.findMany();

  return (
    <Container className="min-h-[calc(100vh-114px)]">
      <Sidebar />
      <div className="w-full p-6">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="text-2xl font-bold">All Brands</h1>
            <CreateBrandForm />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Brand ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Image Path</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {brands.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-muted-foreground text-center"
                    >
                      No brands found
                    </TableCell>
                  </TableRow>
                ) : (
                  brands.map((brand) => (
                    <TableRow key={brand.id}>
                      <TableCell>{brand.id}</TableCell>
                      <TableCell className="font-medium">
                        {brand.name}
                      </TableCell>
                      <TableCell className="text-muted-foreground/50">
                        {brand.imageUrl}
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
      </div>
    </Container>
  );
}
