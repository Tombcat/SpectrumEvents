<template>
  <section id="About">
    <div class="container">
      <div class="row">
        <div class="col-md-12 py-5" id="oNasWiedziec">
          <h1 id="o-nas-wiedziec">Co powinniście o nas wiedzieć</h1>
          <p>
            <b>Spectrum Events</b> to firma zajmująca się profesjonalną obsługą
            imprez okolicznościowych. W skład całego zespołu wchodzą DJ’e/
            Wodzireje, Konferansjerzy, profesjonalni saksofoniści, a także,
            kamerzysta i fotograf. Branżą imprez weselnych i okolicznościowych
            zajmujemy się od ponad 15 lat. Obsłużyliśmy mnóstwo koncertów i
            imprez, co zaowocowało ogromnym doświadczeniem, pomysłowością i
            indywidualnym podejściem do klienta. Każde zlecenie poprzedzone jest
            rozmową dotyczącą preferencji Młodej Pary oraz gości weselnych, co
            gwarantuje stworzenie oferty idealnie dopasowanej do Waszych
            oczekiwań.
          </p>
          <p>
            <b
              >Stale się rozwijamy, by zapewniać rozrywkę na najwyższym poziomie
              oraz maksymalne zadowolenie klientów.</b
            >
          </p>
          <p>
            Wybierając naszą ofertę decydujecie się na profesjonalną oprawę
            wesela, która zapewni Wam oraz gościom niezapomniane wspomnienia
            pełne doskonałej muzyki, dobieranej odpowiednio do wieku oraz
            preferencji uczestników uroczystości. Całość uwieczni nasz
            kamerzysta i fotograf, abyście zawsze mogli wrócić do tych
            wspaniałych chwil
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image from "@/assets/zdj/main.jpg";
import image2 from "@/assets/zdj/first.jpg";

export default {
  name: "About",
  data() {
    return {
      image: image,
      image2: image2,
    };
  },
  mounted() {
    console.log("Mount");

    const oNasWiedziec = document.getElementById("oNasWiedziec");

    this.gsap.fromTo(
      oNasWiedziec.children,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "easyInOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#About",
          start: "50 80%",
          //markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  },
};
</script>

<style></style>
