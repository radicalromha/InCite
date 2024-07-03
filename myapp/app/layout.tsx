import Link from "next/link";
import "./global.css";

export default function RootLayout({
  childern,
}: {
  childern: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {childern}
        </main>
      </body>
    </html>
  );
}
