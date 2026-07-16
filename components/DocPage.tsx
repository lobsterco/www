import Link from "next/link";

/**
 * Shared shell for long-form policy / support / documentation pages. Mirrors the
 * home page's editorial frame (topbar rule, centered wrap, footer) so these
 * pages read as native lobstercomputer.com surfaces rather than bolt-ons.
 */
export default function DocPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="wrap">
      <div className="topbar">
        <Link href="/">Lobster Computer INC.</Link>
        <span>{title}</span>
      </div>

      <article className="doc">
        <h1 className="doc-title">{title}</h1>
        {updated ? <p className="doc-updated">Last updated {updated}</p> : null}
        {children}
      </article>

      <footer>
        <span>© 2026 Lobster Computer</span>
        <span className="note"></span>
        <a href="mailto:hello@lobstercomputer.com">hello@lobstercomputer.com</a>
      </footer>
    </div>
  );
}
