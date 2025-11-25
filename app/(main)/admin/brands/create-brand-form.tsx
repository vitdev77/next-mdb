"use client";

import * as React from "react";
import { LoadingButton } from "@/components/loading-button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import prisma from "@/lib/prisma";

const newBrandSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  imageUrl: z.string().optional(),
});

type NewBrandValues = z.infer<typeof newBrandSchema>;

export function CreateBrandForm() {
  const [error, setError] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const router = useRouter();

  const form = useForm<NewBrandValues>({
    resolver: zodResolver(newBrandSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
    },
  });

  async function onSubmit({ name, imageUrl }: NewBrandValues) {
    setError(null);
  }

  const loading = form.formState.isSubmitting;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus /> New brand create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new factory brand</DialogTitle>
          <DialogDescription>
            Fill all form fields. Click button below when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brand Name"
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Path</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="/brands/example.jpg"
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <div role="alert" className="text-destructive text-sm">
                {error}
              </div>
            )}

            <LoadingButton type="submit" className="w-full" loading={loading}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
