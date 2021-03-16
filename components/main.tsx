import React from 'react';

function MainContent({children}: {children: React.ReactNode}) {
  return (
    <main className="main">
      {children}
    </main>
  );
}

export default MainContent;
