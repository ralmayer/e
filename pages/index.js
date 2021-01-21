import { useRef } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const app = useRef();
  const scrollContainer = useRef();

  return (
    <>
      <Head>
        <title>Fuck This</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <div className="stack" style={{ paddingBottom: "var(--s4)" }}>
          <div
            className="stack bg:w-1 pd-t:3 sm:pd-b-3"
            style={{ "--space": "var(--s5)" }}
          >
            <section className="section hero-section section-ipad-pro bg:w-1 ">
              <div className="section-content">
                <div className="row">
                  <div className="text-col column large-3 medium-4 small-12 flipped">
                    <div
                      className="stack text-content"
                      style={{ "--space": "var(--s-1)" }}
                    >
                      <h2 className="typography-hero-headline text-contnent">
                        iPad Pro
                      </h2>
                      <p className="typography-hero-eyebrow">
                        Just give it a try. <br /> It’ll change your life.{" "}
                        <br /> Thank me later.
                      </p>{" "}
                      <div>
                        {" "}
                        <span>
                          {" "}
                          <Link href="/">
                            <a>Learn more</a>
                          </Link>
                        </span>
                        <span>{" >"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="img-col column large-8 medium-7 small-12 large-offset-1 medium-offset-0">
                    <figure className="image-ipad-pro"></figure>
                  </div>
                </div>
              </div>
            </section>{" "}
            <section className="section hero-section section-ipad-mini">
              <div className="section-content">
                <div className="row">
                  <div className="img-col column large-8 medium-7 small-12">
                    <figure className="image-ipad-mini"></figure>
                  </div>
                  <div className="text-col column large-3 medium-4 small-12 large-offset-1 small-offset-0">
                    <div
                      className="stack text-content"
                      style={{ "--space": "var(--s-1)" }}
                    >
                      <h1 className="typography-hero-headline text-contnent">
                        iPad mini
                      </h1>
                      <p className="typography-hero-eyebrow">
                        Just give it a try. <br /> It’ll change your life.{" "}
                        <br /> Thank me later.
                      </p>{" "}
                      <div>
                        {" "}
                        <span>
                          {" "}
                          <Link href="/">
                            <a>Learn more</a>
                          </Link>
                        </span>
                        <span>{" >"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="section holiday-2020 section-ipad-family">
            <div className="wrapper tile-grid">
              <div className="rect">
                <div className="rect-tile">
                  <div className="stack" style={{ "--space": "var(--s-1)" }}>
                    <h2 className="headline">Give something wonderful.</h2>
                    <p className="typography-product-lockup">
                      Shop early to get all your gifts in time for the holidays.
                    </p>
                    <div>
                      {" "}
                      <span>
                        {" "}
                        <Link href="/">
                          <a className="cta">Learn more</a>
                        </Link>
                      </span>
                      <span>{" >"}</span>
                    </div>
                  </div>

                  <figure className="image-ipad-family"></figure>
                </div>
              </div>

              <div className="square square-tile square1">
                <div
                  className="stack text-wrapper"
                  style={{ "--space": "var(--s-1)" }}
                >
                  <h3 className="typography-promo-headline">
                    Say it in a way <br /> only you can.
                  </h3>
                  <p className="light">
                    Discover new engraving options for Airpods. Mix emoji, text,
                    and numbers.
                  </p>
                  <div>
                    {" "}
                    <span>
                      {" "}
                      <Link href="/">
                        <a>Learn more</a>
                      </Link>
                    </span>
                    <span>{" >"}</span>
                  </div>
                </div>
                <figure className="airpods-image"></figure>
              </div>
              <div className="square square-tile square2">
                <div
                  className="stack text-wrapper"
                  style={{ "--space": "var(--s-1)" }}
                >
                  <h3 className="typography-promo-headline">Apple Pencil</h3>
                  <p className="light">Dream it up. Jot it down.</p>
                  <div>
                    {" "}
                    <span>
                      {" "}
                      <Link href="/">
                        <a>Learn more</a>
                      </Link>
                    </span>
                    <span>{" >"}</span>
                  </div>
                </div>
                <div>
                  <figure className="pencil-image"></figure>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
