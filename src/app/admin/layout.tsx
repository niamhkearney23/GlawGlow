import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit my website",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
