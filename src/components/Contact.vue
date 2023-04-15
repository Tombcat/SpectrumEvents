<template>
  <section id="contact">
    <div class="container-xxl">
      <div class="row">
        <div class="col-md-6">
          <form action="#">
            <div class="field">
              <label for="email">Twój e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value="marcin@test.com"
                required
              />
            </div>

            <div class="field">
              <label for="phone">Numer telefonu (opcjonalnie)</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div class="field">
              <label for="date">Data przyjęcia (opcjonalnie)</label>
              <input type="date" id="date" name="date" />
            </div>

            <div class="field">
              <label for="place">Miejsce przyjęcia (opcjonalnie)</label>
              <input type="text" id="place" name="place" />
            </div>

            <div class="field">
              <label for="message">Treść wiadomości</label>
              <textarea type="message" id="message" name="message" rows="5">
Hello, how are you my dear friend?
            </textarea
              >
            </div>

            <input type="submit" value="Submit" />
          </form>
        </div>
        <div class="col-md-6">
          <h2 class="mb-5 text-primary">Kontakt</h2>
          <div class="d-flex flex-row mb-5">
            1
            <div class="d-flex flex-column">
              <h3 class="text-primary">Paweł Krabes</h3>
              <a class="text-white" href="tel:+696835045">+48 696 835 045</a>
            </div>
          </div>
          <div class="d-flex flex-row mb-5">
            1
            <div class="d-flex flex-column">
              <h3 class="text-primary">Marcin Włodarczyk</h3>
              <a class="text-white" href="tel:+696835045">+48 696 835 045</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image from "@/assets/zdj/main2.jpg";
import pawel from "@/assets/zdj/pawel3.jpg";

export default {
  name: "Contact",
  data() {
    return {
      image: image,
    };
  },
  mounted() {},
};
</script>

<style>
#contact {
  margin: 20vh 0;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.field label {
  color: var(--color-primary);
}

.field input,
.field textarea {
  width: 100%;
  background: var(--color-background-mute);
  color: #fff;
  border-radius: 2%;
  padding: 0.4rem 1rem;
  border: 4px solid var(--color-primary-darken);
  border-radius: 10px;
}

.field input:focus,
.field textarea:focus {
  background-color: var(--color-primary-darken);
}
</style>
