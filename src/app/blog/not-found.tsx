import Link from "next/link";
import { Button } from "@/shared/ui/button/Button";

export default function BlogNotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center
                        px-4 text-center">
      <p className="text-6xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
        404
      </p>
      <h1 className="text-xl font-semibold text-white mb-2">Post not found</h1>
      <p className="text-gray-500 text-sm mb-8">
        This article doesn't exist or has been removed.
      </p>
      <Link href="/blog">
        <Button variant="outline">← Back to Blog</Button>
      </Link>
    </section>
  );
}