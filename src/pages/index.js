import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout.mappia"

const RootIndexPage = () => {
  return (
    <Layout>
      <div className="wrap-whole-page">
        <p>&nbsp;</p>
        <article className="product-logo-buttons">
          <a href="https://www.pluggamedbilder.se/">
            <StaticImage
              src="../images/button.landingpage.havsaventyret.readmore.png"
              alt="Mappia"
            />
          </a>
          <a href="theboattrip">
            <StaticImage
              src="../images/button.landingpage.theboattrip.readmore.png"
              alt="Mappia"
            />
          </a>
        </article>
        <p>&nbsp;</p>
      </div>

      <div className="wrap-main-bg-dark-color">
        <p>&nbsp;</p>
        <div className="wrap-whole-page">
          <main className="wrap-text-column-wide">
            <header>
              <h1>Läromedel för inkludering!</h1>
            </header>
            <p>
              Mappias läromedelförebygger läs-ochskrivsvårigheter. Genom
              läromedlens bilder, berättelser och en strukturerad metod för
              automatisering blir lärandet både roligt och tillgängligt för alla
              – inkludering i praktiken!
            </p>
            <p>
              Läromedlen kan användas i helklass från förskolan till årskurs 3
              eller specialpedagogiskt för äldre elever som behöver en nystart.
              Läromedlenkan också användas förelever i anpassad skola.
            </p>
            <p>
              Havsäventyret och The Boat Trip är utvecklat i arvsfondsprojektet
              Plugga med bilder, läs mer <Link>här</Link>.
            </p>
          </main>

          <div className="wrap-inner-content">
            <section className="landingpage-fourgroup">
              <div className="card">
                <StaticImage src="../images/intropage.image1.png" alt="Hej" />
                <div>
                  <p>
                    <strong>Engagerande bildvärldar</strong>
                  </p>
                  <p>
                    I varje läromedel skapas en bildvärld som synliggör
                    kunskapsområdets viktiga och ibland dolda strukturer.
                    Bilderna skaparen medveten förståelse och stödjer
                    automatisering.
                  </p>
                </div>
              </div>

              <div className="card">
                <StaticImage src="../images/intropage.image2.png" alt="Hej" />
                <div>
                  <p>
                    <strong>Minnen som fastnar</strong>
                  </p>
                  <p>
                    För att eleverna ska kunna behärska ett nytt kunskapsområde
                    behöver kunskapen bli automatiserad. Våra läromedel har en
                    tydlig metod för att bildsystemenska bli en del av elevernas
                    långtidsminne.
                  </p>
                </div>
              </div>

              <div className="card">
                <StaticImage src="../images/intropage.image3.png" alt="Hej" />
                <div>
                  <p>
                    <strong>Gemenskap och inkludering</strong>
                  </p>
                  <p>
                    En viktig del av lärandet är att lära tillsammans i klassen
                    bygga en gemensam begreppsvärld. Våra läromedel är designade
                    utifrån elever med läsochskrivsvårigheter,men de fungerar
                    för alla.
                  </p>
                </div>
              </div>

              <div className="card">
                <StaticImage src="../images/intropage.image4.png" alt="Hej" />
                <div>
                  <p>
                    <strong>Förväntansfulla elever</strong>
                  </p>
                  <p>
                    Läromedlensspännande bilderoch berättelser skapar stort
                    engagemang hos eleverna, vilket gör lärandet kreativtoch
                    lustfyllt.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <p>&nbsp;</p>
        </div>
      </div>

      <div className="wrap-main-bg-light-color jump1">
        <p>&nbsp;</p>
        <div className="wrap-whole-page">
          <div className="wrap-text-column-wide">
            <h2>Aktuellt</h2>

            <section className="aktuellt">
              <div className="card">
                <StaticImage src="../images/aktuellt.image2.png" alt="Hej" />
                <h3>Ny kurs och Coachning</h3>
                <p>
                  Kom igång med Havsäventyret i höst! Anmäl dig till vår kurs
                  som är vid två tillfällen del 1 den 30/8 kl 14-15.30 och del 2
                  den 18/10 kl14-15.30. Skicka din anmälan till
                  info@pluggamedbilder.se
                </p>
              </div>

              <div className="card">
                <StaticImage src="../images/aktuellt.image1.png" alt="Hej" />
                <h3>Nu finns The Boat trip att beställa!</h3>
                <p>
                Vårt helt nya läromedel för engelska finns att beställa i webbshopen eller via Läromedia. The Boat trip bygger vidare på Havsäventyret och kan användas från årskurs 1.
                </p>
              </div>

              <div className="card">
                <StaticImage src="../images/aktuellt.image3.png" alt="Hej" />
                <h3>Ladda ner vårt digitala spel</h3>
                <p>
                Våra digitala spel finns att ladda ner i Appstore och Play Butik, prenumerationen beställs i webbshopen eller via Läromedia.
                </p>
              </div>

              <div className="card">
                <StaticImage src="../images/aktuellt.image4.png" alt="Hej" />
                <h3>Läromedia</h3>
                <p>
                Våra läromedel finns att beställa via Läromedia
                </p>
              </div>

              <div className="card">
                <StaticImage src="../images/aktuellt.image5.png" alt="Hej" />
                <h3>Pågående kurs Ljudens strand</h3>
                <p>
                Tre tillfällen via Zoom, 7 juni, 6 sep, 15 nov, kl 14.00. Anmälan är ständ.
                </p>
              </div>

              <div className="card">
                <StaticImage src="../images/aktuellt.image6.png" alt="Hej" />
                <h3>Pågående kurs Bokstavsön</h3>
                <p>
                Tre tillfällen, via Zoom16 maj, 5 sep, 14 nov kl 14.00. Anmälan är stängd
                </p>
              </div>
            </section>
          </div>
        </div>
        <p>&nbsp;</p>
      </div>

      <div className="wrap-main-bg-color">
        <div className="wrap-whole-page">
          <h1>Artiklar/Press</h1>
        </div>
        <p>&nbsp;</p>
      </div>
    </Layout>
  )
}

export default RootIndexPage
