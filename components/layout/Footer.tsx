export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">
          © {currentYear} Mika Ebora. All rights reserved.
        </p>
        <p className="text-sm text-muted">Video Editor</p>
      </div>
    </footer>
  );
}
