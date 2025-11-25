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
import { Check, PenIcon, Trash2, X } from "lucide-react";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <Container className="min-h-[calc(100vh-114px)]">
      <Sidebar />
      <div className="w-full p-6">
        <h1 className="mb-4 text-2xl font-bold">All Users</h1>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">User ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Verified</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Image Path</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-muted-foreground text-center"
                  >
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-mono font-medium">
                      {user.id.slice(0, 8)}
                      <span className="text-muted-foreground text-xs">
                        ...{user.id.slice(-3)}
                      </span>
                    </TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.emailVerified === true ? (
                        <Check className="stroke-green-600" />
                      ) : (
                        <X className="stroke-destructive" />
                      )}
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.image}</TableCell>
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
