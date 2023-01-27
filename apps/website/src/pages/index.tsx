import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Grow, Person, Route, Search } from '@project44-manifest/react-icons';
import Layout from '@theme/Layout';
import { DocsCard } from '../components';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const hero = useBaseUrl('img/hero.svg');

  return (
    <Layout
      // @ts-expect-error: upstream types are wrong
      title={siteConfig.title}
    >
      <header className="hero padding-vert--xl">
        <div className="container">
          <div className="row">
            <div className="col col--7">
              <h1 className="hero__title">
                <span className="gradient-text">Manifesting</span>
                <br />
                experiences through
                <br />
                design.
              </h1>
              <p className="hero__subtitle">
                A shared design language for designing and building products at project44.
              </p>
              <Link
                className="hero__button manifest-button manifest-button--primary"
                to="/docs/components/overview"
              >
                Get Started
              </Link>
            </div>
            <div className="col col--5">
              <img alt="Manifest Hero" className="hero__image" src={hero} />
            </div>
          </div>
        </div>
      </header>
      <section className="why">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="hero__title">
                We make supply <span className="gradient-text">chains</span> work.
              </h1>
              <p>
                Manifest Design System sets out to demonstrate just that through a collection of
                reusable components, patterns, principles, and guidelines that enable design at
                scale. It’s a shared design language for all involved in designing and building
                products.
              </p>
            </div>
          </div>
          <div className="row margin-vert--xl">
            <div className="col margin-vert--md">
              <DocsCard icon={<Search />} title="Optimize for clarity">
                We choose to have an opinion about where to direct attention – optimize for clarity.
                Display elements and content only when needed and use hierarchy to drive focus.
              </DocsCard>
            </div>
            <div className="col margin-vert--md">
              <DocsCard icon={<Grow />} title="Prefer adaptability">
                Our users need different experiences depending on the task at hand. Design with
                adaptability in mind, enabling role-based customization.
              </DocsCard>
            </div>
            <div className="col margin-vert--md">
              <DocsCard icon={<Route />} title="Lean on consistency">
                We opt for consistency in the details so we can focus on the higher-level UX
                challenges. This frees us to innovate toward the best solution for our users in a
                more efficient way.
              </DocsCard>
            </div>
            <div className="col margin-vert--md">
              <DocsCard icon={<Person />} title="Think inclusively">
                All users deserve an accessible and ethical experience within our products. The
                system is built with accessibility in mind, not as the last step.
              </DocsCard>
            </div>
          </div>
        </div>
      </section>
      <section className="what padding-vert--xl">
        <div className="container">
          <div className="row">
            <div className="col text--center">
              <p>
                The verb <span className="gradient-text">manifest</span> means to show or
                demonstrate clearly. Manifest guides product owners to make great design decisions
                that promote clear experiences that optimize the movement of products globally,
                delivering better resiliency, sustainability, and value for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="hero__title">
                A modern <span className="gradient-text">design</span> language.
              </h1>
              <p>
                Think of it as design at scale, accelerating the design process by reducing
                redundancy, building a unified language between cross-functional teams, and creating
                visual consistency across products.
              </p>
            </div>
          </div>
          <div className="row margin-vert--xl">
            <div className="col margin-vert--md">
              <DocsCard
                href="/docs/foundations/overview"
                img="img/thumbnails/typography.png"
                title="Foundations"
              >
                Find all the design decisions that power the system.
              </DocsCard>
            </div>
            <div className="col margin-vert--md">
              <DocsCard
                href="/docs/components/overview"
                img="img/thumbnails/dropdown.png"
                title="Components"
              >
                Find all the components that comprise the system.
              </DocsCard>
            </div>
            <div className="col margin-vert--md">
              <DocsCard
                href="/docs/components/overview"
                img="img/thumbnails/table.png"
                title="Patterns"
              >
                Find all the design patterns that evolve the system.
              </DocsCard>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
