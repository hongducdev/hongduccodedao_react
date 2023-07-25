import { LayoutMain } from "@/components/layouts";

export default function Home() {
  return (
    <main>
      <LayoutMain>
        <div className="flex items-center justify-center">
          <h1 className="text-8xl font-bold text-center">Hello world<span className="animate-pulse2">!</span></h1>
        </div>
      </LayoutMain>
    </main>
  );
}
