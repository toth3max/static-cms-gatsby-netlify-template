import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout.mappia"

const MappiaSagtOmOssPage = () => {
  return (
    <Layout>
      <div className="wrap-whole-page">
        <main className="wrap-inner-content">
          <header>
            <h1>Sagt om oss</h1>
          </header>

          <section class="pratbubblor">
            <div class="card">
              <div>
                <p>
                  Jag rekommenderar undervisning med Havsäventyret i helklass
                  från första stund. På så sätt blir alla inkluderade.
                </p>
                <p>Ann Björnsson Speciallärare Elemeskolan.</p>
              </div>
            </div>

            <div class="card">
              <div>
                <p>
                  Efter att ha spelat Havsäventyret har Viktor blivit bättre på
                  att avkoda och läsningen går snabbare. Han blir inte längre
                  lika trött när han läser.
                </p>
                <p>Vivianne Macdisi, förälder.</p>
              </div>
            </div>

            <div class="card">
              <div>
                <p>
                  Alla mina elever uppskattar Havsäventyret och det fungerar
                  lika bra oavsett om de har svårigheter eller inte.
                </p>
                <p>Julia Humble Klasslärare Piggelinen.</p>
              </div>
            </div>

            <div class="card">
              <div>
                <p>
                  Jag rekommenderar att börja med Havsäventyret i förskoleklass.
                  Jag tror att det skulle hjälpa många elever att enbart börja
                  med språkljuden och vänta med bokstäverna tills alla
                  språkljuden är bestäfat.
                </p>
                <p>Julia Humble, klasslärare Piggelinen.</p>
              </div>
            </div>
            <div class="card">
              <div>
                <p>
                  Eleverna fullkomligt älskar ljudfigurerna och att spela
                  spelet. Jag är helt fascinerad över hur enkelt de lär sig alla
                  bokstavsljud och dessutom med en oerhörd glädje!
                </p>
                <p>Hanna Karlsson Grundsärskolan Lerum</p>
              </div>
            </div>

            <div class="card">
              <div>
                <p>
                  Genom att dagligen jobba med Havsäventyret har även de elever
                  som haft svårt med bokstavsljuden greppat de flesta
                  ljudfigurerna och lyckas du bättre vid läsning.
                </p>
                <p>Åsa Zätterqvist Ramstaskolan.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="wrap-main-bg-dark-color">
        <div className="wrap-whole-page">
          <div className="wrap-inner-content">
            <div class="sagtomoss">
              <article class="sagtomoss">
                <section class="sagtomoss">
                  <div class="card">
                    <div>
                      <h2>Eleverna längtar till nästa lektion!</h2>
                      <p>
                        - När vi använder ljudbilderna så inspirerar vi alla att
                        vara med oavsett var eleverna befinner sig i sitt möte
                        med skriftspråket. De är så intresserade av att lära
                        känna de nya ljudfigurerna att de längtar till nästa
                        lektion. Barnen tar även hem figurerna efter skolan. Ett
                        barn bad om två uppsättningar ljudfigurskort, så att de
                        fanns hos både mamma och pappa, säger Ann.Ann berättar
                        vidare hur hon noterat att Havsäventyret gör det enklare
                        för eleverna att minnas vad de har lärt sig.
                      </p>
                      <p>
                        - Hur jag än har presenterat bokstäver tidigare har flera
                        av eleverna haft svårt att minnas dem. Med ljudfigurerna
                        har det blivit lättare att komma ihåg. De hittar
                        bokstaven lite snabbare i minnet, fortsätter Ann.
                      </p>
                      <p>
                        - Framför allt blir det lustfyllt och prestigelöst för
                        barnen. De leker fram ljud ochord med hjälp av
                        ljudfigurskorten och jag har aldrig tidigare sett en så
                        sprudlande glädje över att få repetera. Att jobba med
                        ljudbilderna är ett mer tillåtande sätt att skapa ord
                        utifrån elevernas ordförråd. Det blir en härlig stämning
                        i klassen och entusiasmen eleverna visar över att få
                        repetera har jag aldrig tidigare sett, berättar Ann
                        vidare.Havsäventyret gynnar alla elever så att de får en
                        positiv läsinlärning. Ann ser även att materialet kan
                        bygga broar mellan förskoleklassen och åk 1 både för
                        elever och pedagoger.
                      </p>
                      <p>
                        - Jag rekommenderar undervisning med Plugga med bilder i
                        helklass från första stund. På så sätt blir alla
                        inkluderade i läsinlärningsarbetet. Till sist vill jag
                        säga att mina elevers föräldrar är väldigt nöjda när de
                        märker barnens engagemang och glädje, avslutar Ann.
                      </p>
                      <p>
                        Ann Björnsson, Speciallärare Elmeskolan, Älmhult. Text
                        Fredrik Skolfman.
                      </p>
                    </div>
                    <StaticImage
                      src="../images/sagtomoss.illustration1.png"
                      alt="Hej"
                    />
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MappiaSagtOmOssPage
