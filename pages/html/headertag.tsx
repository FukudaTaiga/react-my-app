import React from 'react';
import Link from 'next/link';
import {Page, Section, SubSection, TextArea, Example} from '../../components/util';

function HeaderTag(): React.ReactNode {
  return(
    <Page header="HTMLのhead">
      <Section header="headタグ">
        <p>
          headタグには文書のメタデータを格納する. 以下のようなタグがある.
        </p>

        <TextArea>
          <ul>
            <li key={1}> <Link href="#titleタグ"><a>titleタグ</a></Link> </li>
            <li key={2}> <Link href="#baseタグ"><a>baseタグ</a></Link> </li>
            <li key={3}> <Link href="#linkタグ"><a>linkタグ</a></Link> </li>
            <li key={4}> <Link href="#scriptタグ"><a>scriptタグ</a></Link> </li>
            <li key={5}> <Link href="#styleタグ"><a>styleタグ</a></Link> </li>
            <li key={6}> <Link href="#metaタグ"><a>metaタグ</a></Link> </li>
          </ul>
        </TextArea>

        <SubSection header="titleタグ">
          <p>
            タイトルを規定するタグである.
            このタグの中ではタグは全て無視され, テキストのみしか書けない.
            タイトルはタブ(検索窓の上にある出っ張った奴)の部分に表示されるものだ. <br />
            このページでは"Tiger Study Report: HTMLのheadに含まれるタグとその使い方"と表示されているはずだ. <br />
            タイトルは文書のコンテンツには関係ないが,
            検索エンジン最適化(<span className="text-red-500">SEO</span>)に著しい影響を与えることがあるらしい.
            詳しく調べたら追記する.
          </p>

          <Example>
            <code>{`
              <title> Tiger Study Report: HTMLのheadに含まれるタグとその使い方 </title>
            `}</code>
          </Example>
        </SubSection>

        <SubSection header="baseタグ">
          <p>
            文書中の基底となるURLを定める. 全ての href="..." の前に書かなければならない.
            複数指定すると一番最初のものだけ適用される.
          </p>

          <Example>
            <code>{`<base href="https://example/aaa">`}</code>
          </Example>

          <p>
            例えば,
            {`<base href="https://example/aaa">`}としている場合,
            その下で{`<a href="bbb.html">...`}を記述すると,
            このURLは"https://example/aaa/bbb.html"として解釈される.
            scriptからdocument.baseURIで呼び出すことができる.
          </p>
        </SubSection>


        <SubSection header="linkタグ">
          <p>
            linkタグではrel="..."とhref="..."を用いて文書との関係を記述する.
            relでどんな関係なのか, hrefで実際に参照すべきURLを示す.
            よくある例で文書の配置, カラー等を指定する
            スタイルシート(css)を読み込むために使う場合がある.
          </p>

          <Example>
            <code>{`<link rel="stylesheet" href="base.css">`}</code>
          </Example>

          <p>
            「<code>base.css</code>からcssを読み込んでください」という意味になる. <br />
            他に,
          </p>
          <TextArea>
            <ul>
              <li key={1}>rel="icon": ページのアイコン(ホームに置いたときに表示される奴)指定</li>
              <li key={2}>rel="preload": このページの前に読み込むリソース</li>
              <li key={3}>rel="alternate stylesheet": 代替のスタイルシート指定</li>
            </ul>
          </TextArea>
          <p>
            などがある.
          </p>
        </SubSection>

        <SubSection header="scriptタグ">
          <p>
            scriptを埋め込んだり, 参照するのに使用する.
            src="..."で参照する外部のscriptファイル(.jsなど)を指定.
            type="..."でscriptの種類を記述する.
            HTML5ではtypeを省略すると"text/javascript"として解釈される.
          </p>

          <Example>
            直接javascriptを記述する例
            <pre><code>{`
              <script type="text/javascript">
                alert("Hello");
              </script>
            `}</code></pre>

            外部ファイルから読み込む例
            <pre><code>{`
              <script src="aaa/example.js"></script>
            `}</code></pre>
          </Example>
        </SubSection>


        <SubSection header="styleタグ">
          <p>
            cssを直接記述できる. 競合するものがある場合, 後の方が適用される.
            styleを記述する言語をtype等で選択できたりするが, 現状はcssしか利用されておらず,
            余程小規模でなければファイルを分けてlinkで読み込むと思うのであまり覚えなくてよい.
            属性としてスタイルが指定できる, ということが分かっていれば良いだろうか.
          </p>
        </SubSection>

        <SubSection header="metaタグ">
          <p>
            上記のタグで表現できない情報を記述する為のタグ.
          </p>
          <TextArea>
            <ul>
              <li key={1}>charset: そのページでの文字コード(utf-8やshiftJIS)を指定</li>
              <li key={2}>name: 文書の内容に関するメタデータ. 著者やキーワード等. 詳細は下記の例を参照.</li>
            </ul>
          </TextArea>
          <p>
            nameの内容はcontentで指定する.
          </p>

          <Example>
            著者:
            <pre><code>{`
              <meta name="author" content="Fukuda Taiga">
            `}</code></pre>
            ページの説明:
            <pre><code>{`
              <meta
                name="description"
                content="Taigaの勉強用ページです. 学んだことをまとめていきます."
              >
            `}</code></pre>
            キーワード:
            <pre><code>{`
              <meta name="keywords" content="javascript">
            `}</code></pre>
          </Example>
        </SubSection>
      </Section>
    </Page>
  );
}

export default HeaderTag;
