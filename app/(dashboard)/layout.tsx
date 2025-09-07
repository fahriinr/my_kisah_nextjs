export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className="border-b border-green-500">Dahboard Layout</header>
      {children}
    </main>
  );
}
