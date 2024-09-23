import React, { Fragment, useContext } from "react";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github, dark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import BackTo from "@/components/buttons/BackTo";
import Theme from "@/utils/Theme";
import { ThemeContext } from "@/context/themeContext";

const UseState = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <Head>
        <title>useState in React</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">useState in React</h1>

            <div>
              <p className="text-lg font-medium mt-4">Introduction :-</p>
              <p className="my--2">
                React est une bibliothèque JavaScript populaire pour la création
                d&apos;interfaces utilisateur, et son introduction aux hooks
                dans la version 16.8 a apporté des améliorations significatives
                aux composants fonctionnels. Un des hooks les plus utilisés est
                useState, qui permet aux développeurs d&apos;ajouter des
                fonctionnalités de gestion d&apos;état à leurs composants
                fonctionnels. Dans cet article de blog, nous explorerons le hook
                useState, comprendrons son utilisation et apprendrons comment il
                simplifie la gestion d&apos;état dans les applications React.
              </p>

              <p className="text-lg font-medium mt-4">Why useState? :-</p>
              <p className="my-2">
                Avant l&apos;introduction des hooks, la gestion de l&apos;état
                dans React était principalement effectuée à l&apos;aide de
                composants de classe. Bien que les composants de classe
                remplissaient leur rôle, ils nécessitaient souvent du code
                standard et une syntaxe complexe. Les composants fonctionnels,
                en revanche, étaient plus simples et légers, mais manquaient de
                capacités de gestion d&apos;état intégrées. Le hook useState
                comble cet écart en permettant aux composants fonctionnels de
                gérer l&apos;état, les rendant ainsi plus puissants et plus
                faciles à utiliser.
              </p>

              <Syntax myDark={theme === "dark"} />

              <p className="text-center my-3">
                🙏 Je sais y a encore du boulot
              </p>
            </div>
          </div>

          <div className="layoutBox2">Salut</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default UseState;

const Syntax = ({ myDark }) => {
  const codeString = "const [state, setState] = useState(initialState);";

  return (
    <>
      <p className="mt-5">
        Le hook useState est une fonction qui prend une valeur d&apos;état
        initiale comme argument et renvoie un tableau avec deux éléments : la
        valeur d&apos;état actuelle et une fonction pour mettre à jour cette
        valeur d&apos;état.
      </p>

      <div className="my-3">
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers={true}
          style={myDark ? dark : github}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>

      <div>
        <p className="my-4">Voici une explication de la syntaxe :</p>

        <p className="mt-2">
          <strong>state</strong> = Représente la valeur actuelle de la variable
          d&apos;état. Elle peut être de n&apos;importe quel type de données,
          par exemple : Boolean, String, Object, ou Array.
        </p>

        <p className="mt-2">
          <strong>setState</strong> = La fonction retournée par useState qui
          vous permet de mettre à jour la valeur de l&apos;état.
          Lorsqu&apos;elle est appelée avec une nouvelle valeur, elle déclenche
          un nouveau rendu du composant, mettant à jour l&apos;état et tous les
          éléments du composant qui en dépendent.
        </p>

        <p className="mt-2">
          <strong>useState(initialState)</strong> = La fonction useState prend
          la valeur initiale de l&apos;état comme argument. Cette valeur
          initiale est uniquement utilisée lors du premier rendu du composant.
          Ensuite, la variable d&apos;état sera mise à jour avec de nouvelles
          valeurs.
        </p>
      </div>
    </>
  );
};
