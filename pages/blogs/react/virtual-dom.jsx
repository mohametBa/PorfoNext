import React, { Fragment } from "react";
import Head from "next/head";

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const VirtualDom = () => {
  return (
    <Fragment>
      <Head>
        <title>DOM Virtuel</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">
              Le DOM Virtuel dans React
            </h1>

            <p className="mt-5">
              Lorsque vous travaillez avec une application web construite à l&apos;aide de frameworks
              comme React, de nombreux changements se produisent souvent dans l&apos;interface utilisateur (UI). 
              Le DOM virtuel est un concept qui aide à optimiser ces changements et à améliorer les performances.
            </p>

            <p className="font-bold my-3">1. DOM Traditionnel</p>
            <p className="my-3">
              Le Document Object Model (DOM) est une représentation de la structure HTML
              d&apos;une page web. Il définit comment les éléments sont organisés,
              leurs attributs et leurs relations entre eux. Chaque fois qu&apos;il y a un changement dans l&apos;état 
              ou les données de l&apos;application, le DOM doit être mis à jour pour refléter ces modifications.
            </p>

            <p className="my-3 font-bold">2. DOM Virtuel</p>
            <p>
              Le DOM virtuel est comme une copie légère ou une représentation du
              DOM réel. C&apos;est un objet JavaScript qui garde une trace de l&apos;état actuel
              de l&apos;interface utilisateur. Lorsque des changements se produisent dans votre application, 
              le DOM virtuel est mis à jour au lieu de modifier directement le DOM réel.
            </p>
          </div>

          <div className="layoutBox2">Salut</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default VirtualDom;
