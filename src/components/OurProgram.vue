<template>
  <div class="container-fluid main">
    <!-- head component -->
    <div class="head-program text-center">
      <h1>Our Program</h1>
      <p class="text-muted mt-3">
        Ikuti Bootcamp untuk meningkatkan skill,<br />
        bangun portofolio dan raih karir impian mu
      </p>
      <router-link to="/event">
        <button class="btnProgram">All Program</button>
      </router-link>
    </div>
    <!-- body component -->
    <div class="container mt-5">
      <div class="row">
        <!-- card  -->
        <div
          class="card-container col-xl-4 col-lg-6 col-md-6 mb-5"
          v-for="(value, index) in event"
          :key="index"
          v-if="onLoad"
        >
          <div class="card rounded-5">
            <div class="img-container" v-if="value.isActive !== null">
              <img
                class="card-img-top"
                :src="value.image"
                alt="event data science intelligo.id"
                style="height: 38vh; width: 100%; object-fit: cover"
              />
              <span class="card-label">{{ value.category.name }}</span>
            </div>
            <div class="img-container" v-else>
              <img
                class="card-img-top"
                :src="value.image"
                alt="event data science intelligo.id"
                style="
                  height: 38vh;
                  width: 100%;
                  object-fit: cover;
                  opacity: 0.5;
                  filter: grayscale(0.6);
                "
              />
              <span class="card-label">{{ value.category.name }}</span>
            </div>
            <!-- <div class="star-container my-3">
              {{ value.review }}
              <span
                class="align-items-center mb-2"
                v-for="index in value.review"
                :key="index"
              >
                <img src="../assets/star.png" alt="rating" />
              </span>
            </div> -->
            <div class="star-container my-3">
              5
              <span class="align-items-center mb-2">
                <img
                  src="../assets/star.png"
                  alt="rating data scince intelligo"
                />
                <img
                  src="../assets/star.png"
                  alt="rating data scince intelligo"
                />
                <img
                  src="../assets/star.png"
                  alt="rating data scince intelligo"
                />
                <img
                  src="../assets/star.png"
                  alt="rating data scince intelligo"
                />
                <img
                  src="../assets/star.png"
                  alt="rating data scince intelligo"
                />
              </span>
            </div>

            <div class="content-container d-flex flex-column gap-2">
              <h5>{{ value.title }}</h5>
              <p>
                {{
                  value.price !== "0.00"
                    ? new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(value.price)
                    : "Free"
                }}
              </p>
              <div class="d-flex">
                <span class="d-flex w-50 align-items-center">
                  <img
                    src="../assets/icon_video.png"
                    alt="icon video intelligo.id"
                    class="me-1 card-icon"
                  />
                  <div v-if="value.session == null">-</div>
                  <div v-else>{{ value.session }} Session</div>
                </span>
                <span class="d-flex w-50 align-items-center">
                  <img
                    src="../assets/icon_peserta.png"
                    alt="peserta intelligo.id"
                    class="me-1 card-icon"
                  />
                  <div v-if="value.student == null">-</div>
                  <div v-else>{{ value.student }} Peserta</div>
                </span>
              </div>
              <router-link
                v-if="value.isActive !== null"
                :to="
                  value.category.name === 'Webinar'
                    ? '/detail-event-webinar/' + value.id
                    : '/detail-event/' + value.id
                "
              >
                <div>
                  <button type="button" class="w-100 button-register-course">
                    Daftar Sekarang
                  </button>
                </div>
              </router-link>
              <div v-else>
                <button
                  type="button"
                  disabled
                  class="w-100 button-register-course"
                  style="opacity: 0.5; pointer-events: none"
                >
                  Ditunggu Ya
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="d-flex justify-content-center flex-column align-items-center"
        >
          <h1>Loading</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurProgram",
  props: { event: [], onLoad: false },
};
</script>

<style scoped>
.img-container {
  position: relative;
}

.card-label {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #000000;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  border-radius: 2px;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: minmax(350px, auto);
  gap: 1rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 1fr;
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-self: end;
  padding: 1rem;
  max-width: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: none;
}

.btnProgram {
  width: 159px;
  height: 44px;
  border-radius: 100px;
  background: #023047;
  border-radius: #023047;
  font-size: 16px;
  color: #fff;
  margin: 50px 0;
}
.btnProgram:hover {
  background-color: #f74d00;
  border: none;
}
.main {
  padding: 100px 0;
}
.head-program > h1 {
  font-size: 32px !important;
  font-weight: 600;
  color: #023047;
}

.content-container h5 {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}
.content-container p {
  /*style untuk price */
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ff5400;
}
.card-text {
  color: #ff865d;
}
.button-register-course {
  background: #023047;
  color: white;
  padding: 0.8rem 0;
  border-radius: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}
.btn-coming-soon {
  background: #c2c2c2;
  background: #c2c2c2;
}

@media screen and (max-width: 350px) {
  .card-icon {
    height: 1.2rem !important;
  }
  .card-container {
    display: flex;
    justify-content: start;
  }
  .card {
    width: 18rem;
  }
}

@media screen and (max-width: 770px) {
  .card-container {
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 1024px) {
  .card {
    max-width: 24rem;
  }
}
</style>
