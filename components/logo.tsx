import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      className={cn("flex items-center justify-center gap-1", className)}
    >
      <span className="text-primary text-xl font-bold">Next MDB.</span>{" "}
      <Badge className="font-bold">demo</Badge>
    </Link>
  );
}
