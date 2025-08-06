import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "../css/styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: React.ReactElement;
};

const FeatureList: FeatureItem[] = [
  {
    title: "JavaScript Fundamentals",
    Svg: require("@site/static/img/javascript-icon.svg").default,
    description: (
      <>
        Master JavaScript from basics to advanced concepts. Learn modern ES6+
        features, async programming, and best practices for building robust
        applications.
      </>
    ),
  },
  {
    title: "TypeScript Mastery",
    Svg: require("@site/static/img/typescript-icon.svg").default,
    description: (
      <>
        Dive deep into TypeScript's type system. Learn interfaces, generics,
        utility types, and how to build type-safe applications with confidence.
      </>
    ),
  },
  {
    title: "React Native Development",
    Svg: require("@site/static/img/react-native-icon.svg").default,
    description: (
      <>
        Build cross-platform mobile apps with React Native. From setup to
        deployment, learn components, navigation, and native integrations.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
