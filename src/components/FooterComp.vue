<template>
  <div class="footer"></div>
  <div class="rectangle d-none d-lg-block">
    <div id="box"></div>
    <img id="logo-w" src="/logo-footer.png" />
    <span id="txt-intelligo">Intelligo.id</span>

    <h2 id="txt-service">Event</h2>
    <router-link to="/detail-event"
      ><span id="txt-bootcamp">Bootcamp</span></router-link
    >
    <router-link to="/event"
      ><span id="txt-minibootcamp">Webinar</span></router-link
    >
    <router-link to="/event"
      ><span id="txt-mentoring">Workshop</span></router-link
    >
    <router-link to="/event"
      ><span id="txt-webinar">Minibootcamp</span></router-link
    >
    <span id="txt-workshop">Mentoring</span>
   
    <h2 id="txt-course">Service</h2>
    <span id="txt-datas">Data Science</span>
    <span id="txt-webd">Web Development</span>
  
    <h2 id="txt-product">Follow Us</h2>
    <a
      href="https://www.tiktok.com/@intelligo.id"
      target="_blank"
      id="txt-datasm"
      >Tiktok</a
    >
    <a
      href="https://www.linkedin.com/company/intelligo-id/"
      target="_blank"
      id="txt-webmaking"
      >Linkedin</a
    >
    <a
      href="https://www.instagram.com/intelligo.id/"
      target="_blank"
      id="txt-dataan"
      >Instagram</a
    >
    <a
      href="https://api.whatsapp.com/send/?phone=6285846833288&text&type=phone_number&app_absent=0"
      target="_blank"
      id="txt-wa"
      >WhatsApp</a
    >
    <span id="txt-contact">Contact</span>
    <img id="img-phone" src="../assets/phone.png" alt="" />
    <!-- <span id="txt-phone">{{ preference.phone }}</span> -->

    <span id="txt-phone">085846833288</span>
    <img id="img-email" src="../assets/email.png" alt="" />
    <!-- <span id="txt-email">{{ preference.email }}</span> -->
    <span id="txt-email">intelligodotid@gmail.com</span>
    <router-link to="/faq">
      <span id="txt-faq">FAQ</span>
    </router-link>
  </div>

  <div class="rectangle-mobile d-flex flex-col row d-lg-none m-0 py-5">
    <div class="col-xl-3 mb-3">
      <!-- <img
        id="logo-wMobile"
        :src="preference.logo_footer"
        alt="Intelligo ID Logo"
      /> -->
      <img id="logo-wMobile" src="/logo-footer.png" />
    </div>
    <div class="col-xl-3 mt-5">
      <router-link
        to="/event"
        id="txt-serviceMobile"
        class="text-white fw-bold text-decoration-none mb-5"
        ><p class="text-white fw-bold">Event</p></router-link
      >
      <p class="text-white" id="txt-bootcampMobile">Bootcamp</p>
      <p class="text-white" id="txt-minibootcampMobile">Webinar</p>
      <p class="text-white" id="txt-mentoringMobile">Workshop</p>
      <p class="text-white" id="txt-webinarMobile">Minibootcamp</p>
      <p class="text-white" id="txt-workshopMobile">Mentoring</p>
    </div>
    <div class="col-xl-3 mt-5">
      <router-link
        to="/service"
        id="txt-courseMobile"
        class="text-white fw-bold text-decoration-none mb-5"
        ><p class="text-white fw-bold">Service</p></router-link
      >
      <p class="text-white" id="txt-datasMobile">Data Science</p>
      <p class="text-white" id="txt-webdMobile">Web Development</p>
    </div>
    <div class="col-md-2 mt-5">
      <p id="txt-productMobile" class="text-white fw-bold text-decoration-none">
        Follow Us
      </p>
      <div class="follow d-flex flex-column gap-3">
        <a
          class="text-white text-decoration-none"
          :href="preference.facebook"
          target="_blank"
          id="txt-webmakingMobile"
          >Facebook</a
        >
        <a
          class="text-white text-decoration-none"
          :href="preference.twitter"
          target="_blank"
          id="txt-datasmMobile"
          >Twitter</a
        >
        <a
          class="text-white text-decoration-none"
          :href="preference.instagram"
          target="_blank"
          id="txt-dataanMobile"
          >Instagram</a
        >
        <a
          class="text-white text-decoration-none"
          :href="`https://api.whatsapp.com/send?phone=${preference.whatsapp}&text=hai`"
          target="_blank"
          id="txt-waMobile"
          >WhatsApp</a
        >
      </div>
    </div>
    <div class="col-md-1 mt-5">
      <span
        id="txt-contactMobile"
        class="text-white fw-bold text-decoration-none mb-5"
        >Contact</span
      >
      <div class="contact text-white gap-5">
        <div
          class="contact-waMobile d-flex mt-3 justify-content-start align-items-center"
        >
          <img id="img-phoneMobile" src="../assets/phone.png" alt="" />
          <p class="mb-0 mx-2 text-white" id="txt-phoneMobile">085846833288</p>
        </div>
        <div
          class="contact-email mt-3 d-flex justify-content-start align-items-center"
        >
          <img id="img-emailMobile" src="../assets/email.png" alt="" />
          <p id="txt-emailMobile" class="mb-0 mx-2 text-white">
            intelligodotid@gmail.com
          </p>
        </div>
        <router-link to="/faq">
          <p
            id="txt-faqMobile"
            class="text-white fw-bold text-decoration-none mt-3"
          >
            FAQ
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `FooterComp`,
  data() {
    return {
      preference: {},
    };
  },
  methods: {
    fungsiLoadPreference: async function () {
      this.preference = (await this.$api.get(`/preference`)).data.data;
    },
  },
  mounted() {
    this.fungsiLoadPreference();
  },
};
</script>

<style>
.card.rouded-none {
  border-radius: 27px;
}

img#logo-w {
  width: 10rem;
}

.rectangle-mobile {
  padding: 100px 7%;
  width: 100%;
  height: max-content;
  background: #023047;
  border-top-right-radius: 60px;
}

@media (min-width: 768px) {
  .rectangle-mobile img#logo-w {
    width: 100%;
  }
}
@media (min-width: 1280px) {
  .rectangle-mobile img#logo-w {
    width: 15%;
  }
}
.rectangle {
  display: block !important;
}

#txt-service,
#txt-course,
#txt-webmaking,
#txt-datasm,
#txt-dataan,
#txt-wa {
  text-decoration: none;
}

#box,
#logo-w,
#txt-intelligo,
#txt-service,
#txt-bootcamp,
#txt-minibootcamp,
#txt-mentoring,
#txt-webinar,
#txt-workshop,
#txt-course,
#txt-datas,
#txt-webd,
#txt-product,
#txt-webmaking,
#txt-datasm,
#txt-dataan,
#txt-wa,
#txt-contact,
#img-phone,
#txt-phone,
#img-email,
#txt-email,
#txt-faq {
  position: absolute;
}
.rectangle {
  position: absolute;
  width: 100%;
  height: 320px;
  background: #023047;
  border-top-right-radius: 60px;
}
#logo-w {
  width: 145px;
  height: 29px;
  margin-top: 120px;
  margin-left: 80px;
}
#txt-service {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  margin-top: 80px;
  margin-left: 320px;
}
#txt-bootcamp {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 120px;
  margin-left: 320px;
}
#txt-minibootcamp {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 150px;
  margin-left: 320px;
}
#txt-mentoring {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 180px;
  margin-left: 320px;
}
#txt-webinar {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 210px;
  margin-left: 320px;
}
#txt-workshop {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 240px;
  margin-left: 320px;
}
#txt-course {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  margin-top: 80px;
  margin-left: 510px;
}
#txt-datas {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 120px;
  margin-left: 510px;
}
#txt-webd {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 150px;
  margin-left: 510px;
}
#txt-product {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  margin-top: 80px;
  margin-left: 730px;
}
#txt-webmaking {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 120px;
  margin-left: 730px;
}
#txt-datasm {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 150px;
  margin-left: 730px;
}
#txt-dataan {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 180px;
  margin-left: 730px;
}
#txt-wa {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  margin-top: 210px;
  margin-left: 730px;
}
#txt-contact {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  margin-top: 80px;
  margin-left: 1000px;
}
#img-phone {
  width: 18px;
  height: 18px;
  margin-top: 120px;
  margin-left: 1000px;
}
#txt-phone {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
  margin-top: 115px;
  margin-left: 1025px;
}
#img-email {
  width: 18px;
  height: 18px;
  margin-top: 150px;
  margin-left: 1000px;
}
#txt-email {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 27px;
  color: #fff;
  margin-top: 145px;
  margin-left: 1025px;
}
#txt-faq {
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin-top: 195px;
  margin-left: 1000px;
}

@media only screen and (max-width: 1290px) {
  img#logo-w {
    width: 14%;
  }

  #txt-contact {
    margin-left: 900px;
  }
  #img-phone {
    margin-left: 900px;
  }
  #txt-phone {
    margin-left: 925px;
  }
  #img-email {
    margin-left: 900px;
  }
  #txt-email {
    margin-left: 925px;
  }
  #txt-faq {
    margin-left: 900px;
  }
}

@media only screen and (max-width: 1190px) {
  #txt-contact {
    margin-left: 880px;
  }
  #img-phone {
    margin-left: 880px;
  }
  #txt-phone {
    margin-left: 905px;
  }
  #img-email {
    margin-left: 880px;
  }
  #txt-email {
    margin-left: 905px;
  }
  #txt-faq {
    margin-left: 880px;
  }
}

@media only screen and (max-width: 1100px) {
  #logo-w {
    width: 135px;
    height: 25px;
    margin-left: 60px;
  }
  #txt-service {
    font-size: 16px;
    margin-top: 80px;
    margin-left: 250px;
  }
  #txt-bootcamp {
    font-size: 16px;
    margin-top: 120px;
    margin-left: 250px;
  }
  #txt-minibootcamp {
    font-size: 16px;
    margin-top: 150px;
    margin-left: 250px;
  }
  #txt-mentoring {
    font-size: 16px;
    margin-top: 180px;
    margin-left: 250px;
  }
  #txt-webinar {
    font-size: 16px;
    margin-top: 210px;
    margin-left: 250px;
  }
  #txt-workshop {
    font-size: 16px;
    margin-top: 240px;
    margin-left: 250px;
  }
  #txt-course {
    font-size: 16px;
    margin-top: 80px;
    margin-left: 400px;
  }
  #txt-datas {
    font-size: 16px;
    margin-top: 120px;
    margin-left: 400px;
  }
  #txt-webd {
    font-size: 16px;
    margin-top: 150px;
    margin-left: 400px;
  }
  #txt-product {
    font-size: 16px;
    margin-top: 80px;
    margin-left: 590px;
  }
  #txt-webmaking {
    font-size: 16px;
    margin-top: 120px;
    margin-left: 590px;
  }
  #txt-datasm {
    font-size: 16px;
    margin-top: 150px;
    margin-left: 590px;
  }
  #txt-dataan {
    font-size: 16px;
    margin-top: 180px;
    margin-left: 590px;
  }
  #txt-wa {
    font-size: 16px;
    margin-top: 210px;
    margin-left: 590px;
  }
  #txt-contact {
    font-size: 16px;
    margin-left: 720px;
  }
  #img-phone {
    margin-left: 720px;
  }
  #txt-phone {
    font-size: 16px;
    margin-left: 755px;
  }
  #img-email {
    margin-left: 720px;
  }
  #txt-email {
    font-size: 16px;
    margin-left: 755px;
  }
  #txt-faq {
    font-size: 16px;
    margin-left: 720px;
  }
}

@media only screen and (max-width: 991px) {
  .rectangle {
    display: none !important;
  }
  #logo-w {
    width: 125px;
    height: 20px;
    margin-left: 50px;
  }
  #txt-service {
    font-size: 15px;
    margin-top: 80px;
    margin-left: 200px;
  }
  #txt-bootcamp {
    font-size: 15px;
    margin-top: 120px;
    margin-left: 200px;
  }
  #txt-minibootcamp {
    font-size: 15px;
    margin-top: 150px;
    margin-left: 200px;
  }
  #txt-mentoring {
    font-size: 15px;
    margin-top: 180px;
    margin-left: 200px;
  }
  #txt-webinar {
    font-size: 15px;
    margin-top: 210px;
    margin-left: 200px;
  }
  #txt-workshop {
    font-size: 15px;
    margin-top: 240px;
    margin-left: 200px;
  }
  #txt-course {
    font-size: 15px;
    margin-top: 80px;
    margin-left: 340px;
  }
  #txt-datas {
    font-size: 15px;
    margin-top: 120px;
    margin-left: 340px;
  }
  #txt-webd {
    font-size: 15px;
    margin-top: 150px;
    margin-left: 340px;
  }
  #txt-product {
    font-size: 15px;
    margin-top: 80px;
    margin-left: 500px;
  }
  #txt-webmaking {
    font-size: 15px;
    margin-top: 120px;
    margin-left: 500px;
  }
  #txt-datasm {
    font-size: 15px;
    margin-top: 150px;
    margin-left: 500px;
  }
  #txt-dataan {
    font-size: 15px;
    margin-top: 180px;
    margin-left: 500px;
  }
  #txt-wa {
    font-size: 15px;
    margin-top: 210px;
    margin-left: 500px;
  }
  #txt-contact {
    font-size: 15px;
    margin-left: 600px;
  }
  #img-phone {
    margin-left: 600px;
  }
  #txt-phone {
    font-size: 15px;
    margin-left: 635px;
  }
  #img-email {
    margin-left: 600px;
  }
  #txt-email {
    font-size: 15px;
    margin-left: 635px;
  }
  #txt-faq {
    font-size: 15px;
    margin-left: 600px;
  }

  img#logo-wMobile {
    width: 10rem;
  }
}

@media only screen and (max-width: 820px) {
  #logo-w {
    width: 105px;
    height: 20px;
    margin-left: 30px;
  }
  #txt-service {
    font-size: 14px;
    margin-top: 80px;
    margin-left: 160px;
  }
  #txt-bootcamp {
    font-size: 14px;
    margin-top: 120px;
    margin-left: 160px;
  }
  #txt-minibootcamp {
    font-size: 14px;
    margin-top: 150px;
    margin-left: 160px;
  }
  #txt-mentoring {
    font-size: 14px;
    margin-top: 180px;
    margin-left: 160px;
  }
  #txt-webinar {
    font-size: 14px;
    margin-top: 210px;
    margin-left: 160px;
  }
  #txt-workshop {
    font-size: 14px;
    margin-top: 240px;
    margin-left: 160px;
  }
  #txt-course {
    font-size: 14px;
    margin-top: 80px;
    margin-left: 280px;
  }
  #txt-datas {
    font-size: 14px;
    margin-top: 120px;
    margin-left: 280px;
  }
  #txt-webd {
    font-size: 14px;
    margin-top: 150px;
    margin-left: 280px;
  }
  #txt-product {
    font-size: 14px;
    margin-top: 80px;
    margin-left: 430px;
  }
  #txt-webmaking {
    font-size: 14px;
    margin-top: 120px;
    margin-left: 430px;
  }
  #txt-datasm {
    font-size: 14px;
    margin-top: 150px;
    margin-left: 430px;
  }
  #txt-dataan {
    font-size: 14px;
    margin-top: 180px;
    margin-left: 430px;
  }
  #txt-wa {
    font-size: 14px;
    margin-top: 210px;
    margin-left: 430px;
  }
  #txt-contact {
    font-size: 14px;
    margin-left: 520px;
  }
  #img-phone {
    margin-left: 520px;
  }
  #txt-phone {
    font-size: 14px;
    margin-left: 555px;
  }
  #img-email {
    margin-left: 520px;
  }
  #txt-email {
    font-size: 14px;
    margin-left: 555px;
  }
  #txt-faq {
    font-size: 14px;
    margin-left: 520px;
  }
}

@media only screen and (max-width: 730px) {
  #logo-w {
    width: 95px;
    height: 20px;
    margin-left: 25px;
  }
  #txt-service {
    font-size: 12px;
    margin-top: 80px;
    margin-left: 140px;
  }
  #txt-bootcamp {
    font-size: 12px;
    margin-top: 120px;
    margin-left: 140px;
  }
  #txt-minibootcamp {
    font-size: 12px;
    margin-top: 150px;
    margin-left: 140px;
  }
  #txt-mentoring {
    font-size: 12px;
    margin-top: 180px;
    margin-left: 140px;
  }
  #txt-webinar {
    font-size: 12px;
    margin-top: 210px;
    margin-left: 140px;
  }
  #txt-workshop {
    font-size: 12px;
    margin-top: 240px;
    margin-left: 140px;
  }
  #txt-course {
    font-size: 12px;
    margin-top: 80px;
    margin-left: 240px;
  }
  #txt-datas {
    font-size: 12px;
    margin-top: 120px;
    margin-left: 240px;
  }
  #txt-webd {
    font-size: 12px;
    margin-top: 150px;
    margin-left: 240px;
  }
  #txt-product {
    font-size: 12px;
    margin-top: 80px;
    margin-left: 365px;
  }
  #txt-webmaking {
    font-size: 12px;
    margin-top: 120px;
    margin-left: 365px;
  }
  #txt-datasm {
    font-size: 12px;
    margin-top: 150px;
    margin-left: 365px;
  }
  #txt-dataan {
    font-size: 12px;
    margin-top: 180px;
    margin-left: 365px;
  }
  #txt-wa {
    font-size: 12px;
    margin-top: 210px;
    margin-left: 365px;
  }
  #txt-contact {
    font-size: 12px;
    margin-left: 445px;
  }
  #img-phone {
    margin-left: 445px;
  }
  #txt-phone {
    font-size: 12px;
    margin-left: 480px;
  }
  #img-email {
    margin-left: 445px;
  }
  #txt-email {
    font-size: 12px;
    margin-left: 480px;
  }
  #txt-faq {
    font-size: 12px;
    margin-left: 445px;
  }
}

@media only screen and (max-width: 640px) {
  .rectangle {
    height: 230px;
  }
  #logo-w {
    width: 85px;
    height: 16px;
    margin-top: 80px;
    margin-left: 20px;
  }
  #txt-service {
    font-size: 10px;
    margin-top: 50px;
    margin-left: 120px;
  }
  #txt-bootcamp {
    font-size: 10px;
    margin-top: 80px;
    margin-left: 120px;
  }
  #txt-minibootcamp {
    font-size: 10px;
    margin-top: 100px;
    margin-left: 120px;
  }
  #txt-mentoring {
    font-size: 10px;
    margin-top: 120px;
    margin-left: 120px;
  }
  #txt-webinar {
    font-size: 10px;
    margin-top: 140px;
    margin-left: 120px;
  }
  #txt-workshop {
    font-size: 10px;
    margin-top: 160px;
    margin-left: 120px;
  }
  #txt-course {
    font-size: 10px;
    margin-top: 50px;
    margin-left: 200px;
  }
  #txt-datas {
    font-size: 10px;
    margin-top: 80px;
    margin-left: 200px;
  }
  #txt-webd {
    font-size: 10px;
    margin-top: 100px;
    margin-left: 200px;
  }
  #txt-product {
    font-size: 10px;
    margin-top: 50px;
    margin-left: 305px;
  }
  #txt-webmaking {
    font-size: 10px;
    margin-top: 80px;
    margin-left: 305px;
  }
  #txt-datasm {
    font-size: 10px;
    margin-top: 100px;
    margin-left: 305px;
  }
  #txt-dataan {
    font-size: 10px;
    margin-top: 120px;
    margin-left: 305px;
  }
  #txt-wa {
    font-size: 10px;
    margin-top: 140px;
    margin-left: 305px;
  }
  #txt-contact {
    margin-top: 50px;
    font-size: 10px;
    margin-left: 365px;
  }
  #img-phone {
    height: 12px;
    width: 12px;
    margin-top: 80px;
    margin-left: 365px;
  }
  #txt-phone {
    font-size: 10px;
    margin-top: 75px;
    margin-left: 400px;
  }
  #img-email {
    height: 12px;
    width: 12px;
    margin-top: 100px;
    margin-left: 365px;
  }
  #txt-email {
    font-size: 10px;
    margin-top: 95px;
    margin-left: 400px;
  }
  #txt-faq {
    font-size: 10px;
    margin-top: 130px;
    margin-left: 365px;
  }

  /* img#logo-wMobile {
    width: 16rem;
  } */
}

@media only screen and (max-width: 540px) {
  .rectangle {
    height: 150px;
  }
  #logo-w {
    width: 45px;
    height: 10px;
    margin-top: 40px;
    margin-left: 5%;
  }
  #txt-service {
    font-size: 6px;
    margin-top: 20px;
    margin-left: 23%;
  }
  #txt-bootcamp {
    font-size: 6px;
    margin-top: 40px;
    margin-left: 23%;
  }
  #txt-minibootcamp {
    font-size: 6px;
    margin-top: 55px;
    margin-left: 23%;
  }
  #txt-mentoring {
    font-size: 6px;
    margin-top: 70px;
    margin-left: 23%;
  }
  #txt-webinar {
    font-size: 6px;
    margin-top: 85px;
    margin-left: 23%;
  }
  #txt-workshop {
    font-size: 6px;
    margin-top: 100px;
    margin-left: 23%;
  }
  #txt-course {
    font-size: 6px;
    margin-top: 20px;
    margin-left: 38%;
  }
  #txt-datas {
    font-size: 6px;
    margin-top: 40px;
    margin-left: 38%;
  }
  #txt-webd {
    font-size: 6px;
    margin-top: 55px;
    margin-left: 38%;
  }
  #txt-product {
    font-size: 6px;
    margin-top: 20px;
    margin-left: 58%;
  }
  #txt-webmaking {
    font-size: 6px;
    margin-top: 40px;
    margin-left: 58%;
  }
  #txt-datasm {
    font-size: 6px;
    margin-top: 55px;
    margin-left: 58%;
  }
  #txt-dataan {
    font-size: 6px;
    margin-top: 70px;
    margin-left: 58%;
  }
  #txt-wa {
    font-size: 6px;
    margin-top: 85px;
    margin-left: 58%;
  }
  #txt-contact {
    margin-top: 20px;
    font-size: 6px;
    margin-left: 70%;
  }
  #img-phone {
    height: 6px;
    width: 6px;
    margin-top: 40px;
    margin-left: 70%;
  }
  #txt-phone {
    font-size: 6px;
    margin-top: 30px;
    margin-left: 73%;
  }
  #img-email {
    height: 6px;
    width: 6px;
    margin-top: 55px;
    margin-left: 70%;
  }
  #txt-email {
    font-size: 6px;
    margin-top: 45px;
    margin-left: 73%;
  }
  #txt-faq {
    font-size: 6px;
    margin-top: 90px;
    margin-left: 70%;
  }
}
</style>
