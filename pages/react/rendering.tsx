import React, {useState, useEffect, useMemo, useCallback} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Page, Section, SubSection, TextArea, Example} from '../../components/util';

const Render1: React.FC = (props) => {
  console.log("render1 start");

  useEffect(() => {
    console.log("render1 finished");
  });

  return (
    <div className="bg-red-100 border-solid border-black border">
      <h1 className="text-3xl">Render1</h1>
      {props.children}
    </div>
  );
}

const Render2: React.FC<{fun?: Function}> = (props) => {
  console.log("render2 start");

  useEffect(() => {
    console.log("render2 finished");
  });

  return (
    <div className="bg-red-100 border-solid border-black border">
      <h1 className="text-2xl">Render2</h1>
      {props.children}
    </div>
  );
}

const Render3: React.FC<{fun?: Function}> = (props) => {
  console.log("render3 start");

  useEffect(() => {
    console.log("render3 finished");
  });

  return (
    <div className="bg-red-100 border-solid border-black border">
      <h1 className="text-xl">Render3</h1>
      {props.children}
    </div>
  );
}

const RenderingTiming = () => {
  return(
    <Page header="Reactのレンダリングはどのような振る舞いをするのか?">
      <p>
        Reactのレンダリングタイミングについていまいち分かっていない部分がある為, その検証をしてみる.
      </p>

      <Section header="今回の検証コード">
        <h2>今回のコード</h2>
        <p>
          Renderコンポーネントをいくつか作成し, レンダリング開始時と終了時にlogに出力させる.
        </p>
        <Example>
          <pre><code>{`
            const Render1: React.FC = (props) => {
              console.log("render1 start");

              useEffect(() => {
                console.log("render1 finished");
              });

              return (
                <div className="bg-red-100 border-solid border-black border">
                  <h1 className="text-3xl">Render1</h1>
                  {props.children}
                </div>
              );
            }

            const Render2: React.FC<{fun?: Function}> = (props) => {
              console.log("render2 start");

              useEffect(() => {
                console.log("render2 finished");
              });

              return (
                <div className="bg-red-100 border-solid border-black border">
                  <h1 className="text-2xl">Render2</h1>
                  {props.children}
                </div>
              );
            }

            const Render3: React.FC<{fun?: Function}> = (props) => {
              console.log("render3 start");

              useEffect(() => {
                console.log("render3 finished");
              });

              return (
                <div className="bg-red-100 border-solid border-black border">
                  <h1 className="text-xl">Render3</h1>
                  {props.children}
                </div>
              );
            }
          `}</code></pre>
          <pre><code>{`
            ページのレンダリングに記述した内容.
            <Render1>
              <Render2>
                <Render3>
                </Render3>
              </Render2>
              <Render2>
                <Render3>
                </Render3>
              </Render2>
            </Render1>

          `}</code></pre>
        </Example>
      </Section>

      <Section header="結果">
        <h2>結果</h2>
        <Render1>
          <Render2>
            <Render3>
            </Render3>
          </Render2>
          <Render2>
            <Render3>
            </Render3>
          </Render2>
        </Render1>

        <h2 className="text-left">コンソール出力</h2>
        <div className="bg-white m-1 p-2 text-justy">
          <pre>{`
            rendering.tsx:7 render1 start
            rendering.tsx:22 render2 start
            rendering.tsx:37 render3 start
            rendering.tsx:22 render2 start
            rendering.tsx:37 render3 start
            rendering.tsx:40 render3 finished
            rendering.tsx:25 render2 finished
            rendering.tsx:40 render3 finished
            rendering.tsx:25 render2 finished
            rendering.tsx:10 render1 finished
          `}</pre>
        </div>

        <p>
          開始自体はルートから順番に深さ優先で探索し,
          末端から順にレンダリングしていく仕様のようだ.
          実装としては自然な気がするので,
          これを意識して書くことは少ないだろうが, 知っておいた方がいい気がする.
        </p>

      </Section>

    </Page>
  );
}

export default RenderingTiming;
