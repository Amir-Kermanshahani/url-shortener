import UrlShortenerContainer from "@/components/url-shortener-container";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-between mx-auto max-w-xl py-8 px-8 h-screen">
      <main className="space-y-6">
        <div className="space-y-2 text-center" dir="rtl">
          <h1 className="text-3xl md:text-4xl font-bold">کوتاه کننده URL</h1>
          <p className="md:text-lg">
            URL های خود را کوتاه کنید و آنها را به راحتی به اشتراک بگذارید.
          </p>
        </div>
        <UrlShortenerContainer />
      </main>
      <footer className="text-center font-bold font-mono text-lg flex flex-row justify-center gap-4 items-center">
        <p>Amir Kermanshahani </p>
        <Link href={"https://github.com/Amir-Kermanshahani"} target="_blank">
          <GitHubLogoIcon width={24} height={24}/>
        </Link>
      </footer>
    </div>
  );
}
