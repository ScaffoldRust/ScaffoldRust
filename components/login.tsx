import Link from "next/link";
import { Button, Card, CardContent } from "./ui";
import { Input } from "./ui/input";
import { Github, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export default function LoginContent() {
  return (
    <Card className="dark bg-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] w-[448px]">
      <CardContent className="space-y-6 p-10">
        <header className="text-center space-y-2">
          <h1 className="capitalize text-3xl font-bold">welcome back</h1>
          <p className="text-muted-foreground text-sm">
            Don&apos;t have an account?{" "}
            <Link className="text-white hover:underline" href={"/signup"}>
              Sign up
            </Link>
          </p>
        </header>

        <form className="space-y-6">
          <fieldset className="space-y-2">
            <Input className="bg-black" placeholder="Email address" />
            <Input className="bg-black" placeholder="Password" />
          </fieldset>

          <div className="flex justify-between items-center gap-2">
            <label className="flex items-center gap-2">
              <Checkbox id="rememberMe" />
              <Label htmlFor="rememberMe" className="text-muted-foreground">
                Remember me?
              </Label>
            </label>
            <Link href="/forgot-password" className="hover:underline text-sm">
              Forgot your password?
            </Link>
          </div>

          <Button type="submit" className="w-full font-bold">
            Sign in
          </Button>
        </form>

        <div className="flex items-center my-6 gap-2">
          <Separator className="flex-1 bg-gray-700" />
          <span className="text-sm text-muted-foreground">
            Or continue with
          </span>
          <Separator className="flex-1 bg-gray-700" />
        </div>

        <div className="flex justify-center gap-3">
          <Button variant={"outline"} type="button" className="flex-1 bg-black">
            <Github /> GitHub
          </Button>
          <Button variant={"outline"} type="button" className="flex-1 bg-black">
            <Twitter /> Twitter
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
