import { About } from "@/components/main/about";
import { Contact } from "@/components/main/contact";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Seo } from "@/components/main/seo";
import { Sites } from "@/components/main/sites";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full max-w-[1300px] mx-auto px-5">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Sites />
        <Encryption />
        <Seo />
        <Contact />
      </div>
    </main>
  );
}
