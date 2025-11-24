import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/container";
import Logo from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LayoutToggle } from "@/components/layout-toggle";
import { UserDropdown } from "@/components/user-dropdown";
import { cn } from "@/lib/utils";
import { getServerSession } from "@/lib/get-session";
import { UserIcon } from "lucide-react";
import Link from "next/link";

export async function Header({ className }: { className?: string }) {
  const session = await getServerSession();
  const user = session?.user;

  // if (!user) return null;

  return (
    <header
      className={cn(
        "bg-background/60 sticky top-0 z-50 w-full border-b border-dashed backdrop-blur-sm",
        className,
      )}
    >
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-4 py-3.5 md:flex-row">
          <div className="flex w-full">
            <Logo />
            <div className="ml-auto items-center gap-2 sm:flex sm:flex-1 sm:justify-end">
              <LayoutToggle className="3xl:flex hidden" />
              <Separator
                orientation="vertical"
                className="3xl:flex hidden data-[orientation=vertical]:h-4"
              />
              <ThemeToggle />
              <Separator
                orientation="vertical"
                className="3xl:flex mr-2 hidden data-[orientation=vertical]:h-4"
              />
              <div className="flex items-center space-x-2 sm:m-0">
                {!user ? (
                  <Button variant={"outline"} asChild>
                    <Link href={"/auth/sign-in"}>
                      <UserIcon /> Sign in
                    </Link>
                  </Button>
                ) : (
                  <UserDropdown user={user} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
