import { Button } from "@/components/Button";
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <div className={cn("bg-black", "text-white")}>
      <h1>Home</h1>
      <p>Home page</p>
      <Button />
    </div>
  );
}
