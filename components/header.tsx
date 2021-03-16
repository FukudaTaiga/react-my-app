import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="homeTitle">
      <Link href="/">
        <a>Tiger Study Report</a>
      </Link>
    </header>
  );
}

export default Header;
