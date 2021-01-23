<script>
  import Container from "../Container/Container.svelte";
</script>
<style lang="scss">
  @import "src/style/index";
  @import "Footer";
</style>
<footer>
  <Container>
    <section>
      <h5>About me</h5>
      <p>
        Realizamos fotografías de joyas, zapatos, bolso,… ya sea sobre un fondo blanco, un bodegón o en las manos o pies
        de una modelo. Son fotografías donde hay que prestar mucha atención sobre la iluminación, el fondo, el encuadre,
        el enfoque, etc.
      </p>
    </section>
    <section>
      <h5>Contact</h5>
      <p>Inca - Mallorca</p>
      <p>Islas baleares - España</p>
      <div>
        <p><a href="tel:+34 662 223 768">+34 662 223 768</a></p>
        <p><a href="mailto:codeunic.system.platform@gmail.com">codeunic.system.platform@gmail.com</a></p>
      </div>
    </section>
    <section>
      <h5>Quick Links</h5>
      <ul>
        <li><a href=".">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </section>
  </Container>
</footer>
