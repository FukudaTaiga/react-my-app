import React, { useState } from 'react';
import Link from 'next/link';

type Category = {
  categoryName: string,
  categoryList: {id: number, name: string, path: string}[]
}

type Categories = {
  categories: Category[]
}

function CategoryTable(props: Category) {
  const [visible, setVisible] = useState<boolean>(false);
  const categoryList: React.ReactNode[] = props.categoryList.map(e => {
    return(
      <>
        <li key={e.id.toString()} className="gradual">
          <Link href={e.path}>
            <a> {e.name} </a>
          </Link>
        </li>
        <style jsx>{`
          .gradual {
            animation: fadeIn 1s linear;
              animation-fill-mode: both;
          }

          @keyframes fadeIn{
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </>
    );
  });

  return (
    <div>
      <button
        className="appearance-none px-3 bg-purple-600 text-white rounded m-1"
        onClick={() => setVisible(!visible)}
      >
        {props.categoryName}
      </button>
      {
        visible &&
        <ul>
          {categoryList}
        </ul>
      }
    </div>
  );
}

function Navi(props: Categories) {
  const categories = props.categories.map(category =>
    <CategoryTable categoryName={category.categoryName} categoryList={category.categoryList} />
  );

  return (
    <nav className="navi">
      {categories}
    </nav>
  );
}

export default Navi;
