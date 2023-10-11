<template>
  <div class="hero w-100 d-flex justify-content-evenly align-items-center">
    <div class="heroComp d-flex flex-column">
      <h2 class="txt-in my-3 mt-5 mb-xl-0">
        <strong>Built Your Skill<br />with Intelligo ID</strong>
      </h2>
      <p class="txt-blr mb-3 mb-xl-0">
        Your #1 Data Science Learning & Assistant
        Bootcamp, 1on1 Session, Mini Class, Workshop & Webinar
        Unlimited career coaching for your future
      </p>
      <div class="btn-hero">
        <!-- <router-link to="/about"> -->
        <a href="https://api.whatsapp.com/send/?phone=6285846833288&text&type=phone_number&app_absent=0" target="_blank">
          <button class="btn-about">Konsultasi Sekarang</button>
        </a>
        <!-- </router-link> -->

        <button class="btn-profile d-flex gap-2 align-items-center" @click="() => TogglePopup('buttonTrigger')">
          <img src="../assets/Play.png" alt="play-icon intelligo.id" />
          Profile Intelligo.id
        </button>	

        <Popup 
          v-if="popupTriggers.buttonTrigger" 
          :TogglePopup="() => TogglePopup('buttonTrigger')">
          <iframe class="video-frame" src="https://www.youtube.com/embed/pur8oY3Sm4w?autoplay=1" allow='autoplay' frameborder="0" allowfullscreen></iframe>
        </Popup> 
      </div>
    </div>
    
    <div class="heroImg d-flex">
      <img id="imgHero" src="../assets/Maskot_Master.png" alt="maskot intelligo.id" />
    </div>
  </div>

  <div class="metrics m-0 d-flex gap-5 justify-content-center align-items-center py-5">
    <div>
      <h3>2000+</h3>
      <p>Users</p>
    </div>
    <div class="middle-metric">
      <h3>100+</h3>
      <p>Professionals</p>
    </div>
    <div>
      <h3>250+</h3>
      <p>Clients</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Popup from "../components/Popup.vue";

export default {
  name: `HeroComp`,
  props: ["banner"],
  components: {
    Popup
  },
  setup () {
		const popupTriggers = ref({
			buttonTrigger: false,
		});

		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}

		return {
			Popup,
			popupTriggers,
			TogglePopup
		}
	},
};
</script>

<style>
.video-frame {
  width: 1100px;
  height: 600px;
}
#app {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}
.hero {
  position: relative;
  height: 80vh;
  margin: 0 6rem;
}
.heroComp {
  flex: 40%;
}
.heroImg {
  flex: 70%;
}
.metrics h3 {
  font-weight: 500;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #FF5400;
}
.metrics p {
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #8A8C97;
}
.middle-metric {
  padding: 0 3rem;
  border-left: 2px solid #D5D9E0;
  border-right: 2px solid #D5D9E0;
}
.btn-hero {
  display: flex;
  gap: 1rem;
}
.btn-about, .btn-profile {
  margin-top: 40px;
  width: 180px;
  height: 45px;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  color: #fff;
}
.btn-about {
  background: #023047;
}
.btn-profile {
  background: #FF5400;
}
.btn-about:hover {
  background-color: #fff;
  color: #023047;
}
.txt-in {
  font-weight: 700;
  font-size: 3.75rem;
  line-height: 120%;
  letter-spacing: 0.005em;
  color: #040406;
}
.txt-intelligo {
  font-size: 46px;
  font-weight: 700;
  color: #f74d00;
}
.txt-blr {
  width: 70%;
  margin-top: 20px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: #78839E;
}
#imgHero {
  width: auto;
  height: 650px;
}

@media only screen and (max-width: 1250px) {
  .hero {
    margin: 0 2rem;
  }
  .heroComp, .heroImg {
    flex: 50%;
  }
  #imgHero {
    height: 500px;
  }
  .video-frame {
    width: 780px;
    height: 460px;
  }
  .txt-in {
    font-size: 3rem;
  }
  .txt-blr {
    width: 100%;
  }
}

@media only screen and (max-width: 1000px) {
  .video-frame {
    width: 720px;
    height: 400px;
  }
  #imgHero {
    height: 450px;
  }
  .txt-in {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 950px) {
  .video-frame {
    width: 520px;
    height: 300px;
  }
  .hero {
    margin: 4rem 2rem;
    flex-direction: column;
  }
  .txt-blr {
    width: 70%;
  }
  #imgHero {
    height: 500px;
  }
}

@media only screen and (max-width: 700px) {
  .video-frame {
    width: 380px;
    height: 250px;
  }
  #imgHero {
    height: 400px;
  }
  .metrics {
    flex-direction: column;
  }
  .middle-metric {
    padding: 3rem 0;
    border-left: 0;
    border-right: 0;
    border-top: 2px solid #D5D9E0;
    border-bottom: 2px solid #D5D9E0;
  }
}

@media only screen and (max-width: 600px) {
  #imgHero {
    height: 350px;
  }
  .txt-blr {
    width: 80%;
  }
}

@media only screen and (max-width: 500px) {
  .video-frame {
    width: 300px;
    height: 200px;
  }
  #imgHero {
    width: 100% !important;
    height: max-content !important;
  }
}

@media only screen and (max-width: 400px) {
  .video-frame {
    width: 250px;
    height: 150px;
  }
  .btn-hero {
    flex-direction: column;
    gap: 0;
  }
  .txt-in {
    font-size: 2rem;
  }
  .txt-blr {
    font-size: 0.9rem;
  }
}
</style>
