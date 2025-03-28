<template>
  <div class="home-page">
    <section class="bg__video bg__head__home">
      <div class="vimeo-wrapper">
        <iframe
          src="https://player.vimeo.com/video/685921900?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
        >
        </iframe>
      </div>
    </section>

    <div class="secondary__content">
      <section class="bg__light padding__large">
        <div class="container">
          <div class="text__center">
            <p class="text__large">
              For more information, visit our parent company’s website,<br />
              Frontera Copper Corporation
            </p>
            <a
              href="https://fronteracopper.com/"
              target="_blank"
              class="btn btn__primary"
              >Frontera</a
            >
          </div>
        </div>
      </section>

      <section class="bg__iframe padding__small">
        <div class="container">
          <section class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Eso5ZZPPATw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            >
            </iframe>
          </section>
        </div>
      </section>

      <section class="bg__primary">
        <div class="bg__svg padding__large">
          <div class="container">
            <div class="collage-container">
              <!-- Imagen 1 -->
              <div class="collage-item">
                <a
                  :href="`${BASEURL}/misc/img/site/gallery/img-gallery-01.jpg`"
                  data-lightbox="roadtrip"
                >
                  <img
                    :src="`${BASEURL}/misc/img/site/gallery/img-gallery-01.jpg`"
                    alt=""
                    class="collage-piece"
                  />
                </a>
              </div>
              <!-- Imagen 2 -->
              <div class="collage-item">
                <a
                  :href="`${BASEURL}/misc/img/site/gallery/img-gallery-02.jpg`"
                  data-lightbox="roadtrip"
                >
                  <img
                    :src="`${BASEURL}/misc/img/site/gallery/img-gallery-02.jpg`"
                    alt=""
                    class="collage-piece"
                  />
                </a>
              </div>
              <!-- Imagen 3, horizontal (ocupa una fila completa) -->
              <div class="collage-item full-width">
                <a
                  :href="`${BASEURL}/misc/img/site/gallery/img-gallery-04.jpg`"
                  data-lightbox="roadtrip"
                >
                  <img
                    :src="`${BASEURL}/misc/img/site/gallery/img-gallery-04.jpg`"
                    alt=""
                    class="collage-piece"
                  />
                </a>
              </div>
              <!-- Imagen 4, ocupa una fila completa -->
              <div class="collage-item full-width">
                <a
                  :href="`${BASEURL}/misc/img/site/gallery/img-gallery-03.jpg`"
                  data-lightbox="roadtrip"
                >
                  <img
                    :src="`${BASEURL}/misc/img/site/gallery/img-gallery-03.jpg`"
                    alt=""
                    class="collage-piece"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { BASEURL } from "@/kernel/utils";

export default {
  setup() {
    return {
      BASEURL,
    };
  },
  name: "HomePage",
  onMounted() {
    console.log("HomePage mounted: " + this.BASEURL);
  },
};
</script>

<style scoped>
.home-page {
  background-color: orangered;
  top: 0;
  .bg__video {
    position: relative;
    height: 100vh;
    overflow: hidden;
    .vimeo-wrapper {
      position: relative;
      height: 100vh;
    }
    iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
    }
  }
}

.vimeo-wrapper {
  position: relative;
  height: 100vh;
}

.secondary__content {
  background-color: #f5f5f5;
  margin-left: 32px;
  margin-right: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .bg__light {
    background-color: #f5f5f5;
    padding: 32px;
    .text__center {
      text-align: center;
      .text__large {
        font-size: 1.5rem;
        margin-bottom: 16px;
      }
    }
  }
  .bg__iframe {
    background-color: #f5f5f5;
    padding: 32px;
    .embed-responsive {
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      overflow: hidden;
      &:before {
        content: "";
        display: block;
        padding-top: 56.25%;
      }
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    }
  }
  .bg__primary {
    background-color: #f5f5f5;
    .bg__svg {
      background-color: #f5f5f5;
      padding: 32px;
      .row {
        .col-lg-7 {
          .row {
            .col-sm-6 {
              a {
                display: block;
                margin-bottom: 16px;
                img {
                  width: 100%;
                  height: auto;
                  border-radius: 8px;
                }
              }
            }
            .col {
              a {
                display: block;
                img {
                  width: 100%;
                  height: auto;
                  border-radius: 8px;
                }
              }
            }
          }
        }
        .col-lg-5 {
          a {
            display: block;
            img {
              width: 100%;
              height: auto;
              border-radius: 8px;
            }
          }
        }
      }
    }
  }
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  background-color: #df510f;
  transition: background-color 0.3s;
  &:hover {
    background-color: #893e01;
  }
}
/* Contenedor principal de las imágenes (secuencia de collage) */
.collage-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas por defecto */
  gap: 16px; /* Espacio entre las imágenes */
  justify-items: center; /* Alineación central */
  padding: 16px;
}

/* Estilo de cada imagen individual */
.collage-item {
  position: relative;
  width: 100%;
}

/* Estilo para las imágenes (bordes redondeados y sombra) */
.collage-piece {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efecto hover para hacer las imágenes más grandes */
.collage-piece:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Imagen que ocupa toda la fila */
.collage-item.full-width {
  grid-column: span 2; /* Ocupa dos columnas */
}

/* Estilo responsivo para pantallas pequeñas */
@media (max-width: 768px) {
  .collage-container {
    grid-template-columns: 1fr; /* Una columna en pantallas medianas */
  }
  /* Imagen horizontal que ocupa toda la fila en pantallas pequeñas */
  .collage-item.full-width {
    grid-column: span 1; /* En pantallas pequeñas ocupa una sola columna */
  }
}

@media (max-width: 480px) {
  .collage-container {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
  }
}

</style>
