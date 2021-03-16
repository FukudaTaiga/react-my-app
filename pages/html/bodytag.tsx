import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Page, Section, SubSection, TextArea, Example} from '../../components/util';

function BodyTag(): React.ReactNode {
  return(
    <Page header="HTMLのbody">
      <Section header="bodyタグ">
        <p>
          このタグの中でwebページとして表示されるメインの部分を記述する.
          特に何かの要素を含まなければいけない・含んではいけないといった制限はない.
          そのため, 私が利用したことのあるもので必要なものをまとめていくことにする.
          有用なものはどんどん追記していく.
          各要素内には配置できるタグのルールがあり,
          <span className="text-red-500"> コンテンツモデル </span>と
          <span className="text-red-500"> カテゴリ </span>によって規定されている.
          これに関しては後々追記しおく.
        </p>

        <SubSection header="本題に入る前に">
          <p>
            最初に <span className="text-red-500">div</span>, <span className="text-red-500">span</span> という二つのタグについて説明する.
            これらのタグはそれ単体では<em>意味を持たない</em>. <br />
            では, なぜこれらのタグを利用するのか.
            これらのタグはclass, id, style等のグローバル属性と共に使うことで真価を発揮する. <br />
            文書の構成で「この部分のレイアウトをまとめて扱いたいなあ」,「この文字だけ色を変えたいなあ」など
            の構想が生まれてくることは容易に想像できるだろう. <br />
            ノートにペンで書くとき, 「ここに題名かいて～, 右側には余白を作って計算エリアにしようかな」とか
            「この用語は大事っぽいから赤にしとこう」と考えるのと同じだ. <br />
            そのような要望をhtmlで実現する場合にdiv, spanが活躍するのだ.
            divは <span className="text-red-500">block要素</span> であり,
            spanは <span className="text-red-500">inline要素</span> という違いがある.
            つまり,
          </p>

          <TextArea>
            <ul className="list-none">
              <li key={1}>文章のかたまり(段落など)をひとまとまりで扱いたい &#8658; divタグ</li>
              <li key={2}>文章中の一部(単語など)をひとまとまりで扱いたい &#8658; spanタグ</li>
            </ul>
          </TextArea>

          <p>
            と使い分ければよい.
          </p>

          <Example>
            divの例:
            <pre><code>{`
              <div style="
                background-color: black;
                color: white;
              ">
               divで囲まれたblock. <br>
               ここに書いた内容がまとめて一つのもののように扱われる. <br>
               aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
              </div>
            `}</code></pre>

            表示:
            <div className="bg-black text-white">
              divで囲まれたblock. <br />
              ここに書いた内容がまとめて一つのもののように扱われる. <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
            </div>

            <br />

            spanの例:
            <pre><code>{`
              <span style="background-color: black;color: white;">
              spanで囲まれた文字</span>ここは囲まれてない.
            `}</code></pre>

            表示:
            <span className="bg-black text-white">spanで囲まれた文字</span>ここは囲まれてない.
          </Example>
        </SubSection>

        <p>
          では, 本題に入ることにする. 目的別に使い方, 例, 注意点等まとめていく.
        </p>

        <SubSection header="構造を表すタグ">
          <p>
            以下のタグで構造を表すことができる.
            ただし, これは直接本文の構造になるかというとそうでもないかもしれない.
            もう少し調べる.
          </p>

          <TextArea>
            <ul>
              <li key={1}> header </li>
              <li key={2}> main </li>
              <li key={3}> footer </li>
            </ul>
          </TextArea>

          <h4> header </h4>
          <p>
            ヘッダーを表すタグ. webページの構造としてheader(≠head部分)を表すことができるのはもちろん,
            sectionやarticleのヘッダーとしても使える.
            つまり, 1ページに一つといった決まりはない.
          </p>

          <h4> main </h4>
          <p>
            ページのメインとなるコンテンツを配置する. 一つのページに一つだけ.
            このタグで表すのはそのページに特有のコンテンツで,
            ページ全体で共有するもの(ヘッダー, フッター, ナビとか)は入れない.
          </p>

          <h4> footer </h4>
          <p>
            webページのフッターを表す. header同様, 1ページに一つといった決まりはなく,
            sectionやarticleのフッターとしても使える.
          </p>
        </SubSection>

        <SubSection header="セクションを表すタグ(区分コンテンツ)">
          <p>
            以下の四つのタグがある.
          </p>

          <TextArea>
            <ul>
              <li key={1}> article </li>
              <li key={2}> section </li>
              <li key={3}> aside </li>
              <li key={4}> nav </li>
            </ul>
          </TextArea>

          <p>
            これらは文章のセクションを表すもので, 文章の表示自体には影響しないが, 文章構造を表す.
            HTML5より前はこれらの機能がなかったため, divタグによって同様のものを表現していた.
          </p>

          <h4>article</h4>
          <p>
            ページと独立して成り立つようなコンテンツを表す. 記事のリンクとかだろうか？
          </p>

          <h4>section</h4>
          <p>
            一般的な意味でのセクションを表す. このタグの中では見出しをつけるべきとされている.
          </p>

          <h4>aside</h4>
          <p>
            ページとの関連が薄い副次的な内容を表す.
          </p>

          <h4>nav</h4>
          <p>
            ナビゲーションを表す. サイト全体のリンクをまとめたり, 用途ごとに飛べるようにしたり.
          </p>

          <p>
            これらのセクションに関して, 可能な限り
            <Link href="#見出しを表すタグ">
              <a>見出し</a>
            </Link>
            をつけることが推奨されている.
            ただし, aside, navは見出しに意味がない場合もあるので無理につける必要は無いとのこと.
          </p>
        </SubSection>

        <SubSection header="見出しを表すタグ">
          <p>
            h1, h2, h3, h4, h5, h6タグで見出しを表すことができる.
            hの後ろについてる数字が小さい程大きな見出しだ.
            hタグを利用するということは暗黙の内にsectionを作ることに相当する.
          </p>

          <Example>
            <h1>h1タグだよ</h1> <br />
            <h2>h2タグだよ</h2> <br />
            <h3>h3タグだよ</h3> <br />
            <h4>h4タグだよ</h4> <br />
            <h5>h5タグだよ</h5> <br />
            <h6>h6タグだよ</h6>
          </Example>

          <p>
            これらのタグはある意味当然だが, 構造的に1, 2, ～, 6と順番に使われるべきである.
            単に文字の大きさを変えたいだけならcssのfont-sizeプロパティで制御する.
          </p>
        </SubSection>

        <SubSection header="パラグラフを表すタグ">
          <p>
            pで段落を表すことができる.
            このタグで囲まれた部分は段落としてみなされるので, 前後で1行分の改行が入る.
            単に改行を表すbrと混同してはいけない.
            画像などが単体でも一つの段落として扱うことが多いそう.
            最も使用頻度が高いであろうタグ. <br />
            属性としてalignを持ち, left, right, center, justy(両端揃え)
            が指定できる.
            あまり行間が詰まっていると読みづらいので, line-heightを
            スタイルシートで広くしてやったりすると読みやすくなる.
          </p>

          <Example>
            <h4>left</h4>
            <p className="text-left"> 同じ文章だよ </p>
            <h4>right</h4>
            <p className="text-right"> 同じ文章だよ </p>
            <h4>center</h4>
            <p className="text-center"> 同じ文章だよ </p>
            <h4>justy</h4>
            <p className="text-justy"> 同じ文章だよ </p>
          </Example>
        </SubSection>

        <SubSection header="強調を表すタグ">
          <p>
            強調するためのタグには以下がある.
          </p>

          <TextArea>
            <ul>
              <li key={1}> strong </li>
              <li key={2}> em </li>
              <li key={3}> mark </li>
              <li key={4}> b </li>
            </ul>
          </TextArea>
          <p>
          </p>
        </SubSection>

        <SubSection header="画像等を表すタグ">
          <p>
            imgで画像を表すことができる.
            下記の属性とusemap, ismap属性を持つ.
          </p>

          <TextArea>
            <ul>
              <li key={1}> src: 必須. 画像のURLを表す </li>
              <li key={2}> alt: 画像が使えないときのテキストを指定 </li>
              <li key={3}> width: 横幅 </li>
              <li key={4}> height: 高さ </li>
            </ul>
          </TextArea>

          <Example>
            <code>{'<img src="< path ?>img/tiger.png" alt="tiger">'}</code>
            <div>
              <Image
                src="/img/tiger.png"
                alt="tiger"
                layout="responsive"
                width={80}
                height={80}
              />
            </div>
          </Example>
        </SubSection>
      </Section>
    </Page>
  );
}

export default BodyTag;
