<template>
  <section id="contact">
    <div class="container-fluid">
      <div class="contact p-md-5">
        <div class="row">
          <div class="col-md-5 links">
            <h2 class="form__title mb-5 text-primary">Rozpocznijmy rozmowę.</h2>
            <div class="d-flex flex-row mb-3 link" v-for="link in links">
              <div class="d-flex flex-column">
                <h3 class="text-primary link__title">{{ link.title }}</h3>
                <a v-bind:href="link.href + link.text" class="d-flex">
                  <!--<font-awesome-icon
                    style="
                      font-size: calc(12px + 1vw);
                      top: 50%;
                      transform: translate(0, -50%);
                      position: relative;
                    "
                    v-bind:icon="link.icon"
                  />-->
                  <span class="link__text">{{ link.text }}</span></a
                >
              </div>
            </div>
            <div class="social">
              <a
                href="https://www.facebook.com/spectrumevents0/"
                class="social-link"
                target="_blank"
              >
                <font-awesome-icon
                  class="social-link__icon"
                  icon="fa-brands fa-facebook"
              /></a>
              <a
                href="https://www.instagram.com/spectrum_events_/"
                class="social-link"
                target="_blank"
              >
                <font-awesome-icon
                  class="social-link__icon"
                  icon="fa-brands fa-instagram"
              /></a>
              <a
                href="https://www.weselezklasa.pl/spectrumevents/"
                class="social-link"
                target="_blank"
              >
                <font-awesome-icon
                  class="social-link__icon"
                  icon="fa-solid fa-ring"
              /></a>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-6">
            <form class="form" @submit.prevent="submit">
              <div class="field">
                <label for="email">Twój e-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="form.email"
                  required
                />
              </div>

              <div class="field">
                <label for="phone">Numer telefonu</label>

                <input
                  autocomplete="tel"
                  type="tel"
                  id="phone"
                  name="phone"
                  v-model="form.phone"
                />
              </div>

              <div class="field">
                <label for="date">Data przyjęcia</label>

                <input type="date" id="date" name="date" v-model="form.date" />
              </div>

              <div class="field">
                <label for="place">Miejsce przyjęcia</label>
                <input
                  type="text"
                  id="place"
                  name="place"
                  v-model="form.place"
                />
              </div>

              <div class="field">
                <label for="message">Treść wiadomości *</label>
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  rows="5"
                  v-model="form.msg"
                  maxlength="1000"
                  minlength="10"
                  required
                >
                </textarea>
              </div>
              <div class="d-flex">
                <button class="btn mt-4" v-if="!form.sent">
                  WYŚLIJ WIADOMOŚĆ
                </button>
                <div class="text-success" v-if="form.sent">
                  Wiadomość została wysłana, sprawdz swoją skrzynkę mailową.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        email: undefined,
        phone: undefined,
        date: undefined,
        place: undefined,
        msg: undefined,
        sent: false,
      },
      links: [
        {
          title: "Paweł Krabes",
          href: "tel:",
          text: "+48 512 952 668",
          icon: "fa-solid fa-phone",
        },
        {
          title: "Marcin Włodarczyk",
          href: "tel:",
          text: "+48 696 835 045",
          icon: "fa-solid fa-phone",
        },
        {
          title: "Napisz do nas",
          href: "mailto:",
          text: "spectrumevents.kontakt@gmail.com",
          icon: "fa-solid fa-envelope",
        },
      ],
    };
  },
  methods: {
    submit() {
      console.log(this.form);
      if (this.form.email == undefined || this.form.msg == undefined) {
        return;
      }
      this.form.sent = true;
    },
  },
};
</script>

<style lang="scss">
#contact {
  margin: var(--grid-gap) 0;
}

.contact {
  background-color: var(--color-background-soft);
  border-radius: 20px;
  padding: 32px 12px;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.field label {
  color: var(--color-primary);
}

.field input,
.field textarea {
  resize: none;
  position: relative;
  width: 100%;
  background: var(--color-background-soft);
  color: var(--color-text);
  border-radius: 0px !important;
  padding: 0.3rem 0.5rem;
  border-bottom: 4px solid var(--color-primary-darken);
  border-right: none;
  border-top: none;
  border-left: none;
  border-radius: 10px;
  transition-duration: var(--animation-time-short);
}

.field input:focus,
.field textarea:focus {
  background-color: var(--color-background);
  color: #fff;
  border-color: var(--color-primary);
  outline: none;
}

.form {
  margin-top: 3vw;
  &__title {
    font-size: 12vw;
  }
}

.link {
  &__text {
    word-break: break-all;
    //padding-left: calc(var(--grid-gap) / 2);
  }
  &__image {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
}

.social {
  margin: 3vw 0;
  &-link {
    margin-right: 4vw;
    &__icon {
      font-size: calc(10px + 6vw);
    }
  }
}

@media only screen and (min-width: 760px) {
  .form {
    &__title {
      font-size: 6.8vw;
    }
  }
}
</style>
