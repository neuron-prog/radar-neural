import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-logo">
          <span className="logo-icon" aria-hidden="true"></span>
          Radar Neural
        </Link>
        <nav className="header-nav">
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
