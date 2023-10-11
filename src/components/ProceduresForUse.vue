<template>
  <!-- <div class="procedures container-fluid pb-5">
    <div class="head-program text-center m-5">
      <h1>
        {{ header.title }}
      </h1>
    </div>
    <div class="container" v-for="(item, index) in procedur" :key="index">
      <div class="row" v-if="index % 2 != 0">
        <div class="col-md-6">
          <div class="row_regis row align-items-center justify-content-end">
            <div class="div_regis col-md-10 bg-white p-4 me-5">
              <h1>{{ item.title }}</h1>
              <p class="text-muted" v-html="item.description"></p>
              <img src="../assets/rectangle2708.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="div_email col-md-5 bg-white p-2 pt-0 rounded-3 shadow">
              <form>
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-muted"
                  >Create your email address</label
                >
                <div class="d-flex input_email">
                  <input
                    type="email"
                    class="form-control bg-white"
                    id="exampleFormControlInput1"
                    value="Intelligoid@gmail.com"
                    disabled
                    readonly
                  />
                  <img src="../assets/centang-biru.png" alt="" />
                </div>
              </form>
            </div>
          </div>
          <div class="procedures_1 justify-content-center row">
            <img :src="item.image" alt="procedures 1" />
          </div>
          <div class="row justify-content-end">
            <div
              class="div_password col-md-5 bg-white p-2 pt-0 rounded-3 shadow"
            >
              <form>
                <label
                  for="exampleFormControlInput2"
                  class="form-label text-muted"
                  >Create your password</label
                >
                <div class="d-flex input_email">
                  <input
                    type="password"
                    class="form-control bg-white"
                    id="exampleFormControlInput1"
                    value="****************"
                    disabled
                    readonly
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5" v-else>
        <div class="col-md-6">
          <div class="row">
            <div class="div_data_science p-2 ms-4 rounded-3 shadow d-flex">
              <img src="../assets/icon_data_science.png" alt="" class="me-2" />
              <div class="div_content_data_science pt-1">
                <p>Data Science</p>
                <a href="">Our Program</a>
              </div>
            </div>
          </div>
          <div class="procedures_2 justify-content-center row">
            <img :src="item.image" alt="procedures 2" />
          </div>
          <div class="row justify-content-end">
            <div class="div_web p-2 rounded-3 shadow d-flex">
              <img src="../assets/icon_web.png" alt="" class="me-2" />
              <div class="div_content_web pt-1">
                <p>Web Development</p>
                <a href="">Our Program</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row_kelas row align-items-center justify-content-end">
            <div class="div_kelas col-md-10 bg-white p-4 me-5">
              <h1>{{ item.title }}</h1>
              <p class="text-muted" v-html="item.description"></p>
              <img src="../assets/rectangle2708.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> -->
  <div class="procedures container-fluid pb-5">
    <div class="head-program text-center m-5">
      <h1>
        Step by Step belajar<br />
        di Intelligo
      </h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div
            class="row_regis row align-items-center justify-content-end justify-content-md-start"
          >
            <div
              class="div_regis col-md-10 bg-white p-4 me-0 me-xl-5 mb-5 mb-xl-0"
            >
              <h1>Registrasi & Login</h1>
              <p class="text-muted">
                Sobat Intelligo bisa melakukan pendaftaran akun terlebih dahulu,
                dan apabila sudah memiliki akun bisa login dari halaman utama
              </p>
              <img src="../assets/rectangle2708.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="procedures_1 justify-content-center row">
            <img src="../assets/Maskot_Registrasi.png" alt="procedures 1" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6 order-2 order-xl-1">
          <div class="procedures_2 justify-content-center row">
            <img src="../assets/Maskot_Pilih_Kelas.png" alt="procedures 2" />
          </div>
        </div>
        <div class="col-md-6 order-1 order-xl-2 mb-5 mb-xl-0">
          <div
            class="row_kelas row align-items-center justify-content-start justify-content-xl-end"
          >
            <div class="div_kelas col-md-10 bg-white p-4 me-xl-5 me-0">
              <h1>Pilih Kelas Favorit</h1>
              <p class="text-muted">
                Pilih event atau kelas favorit kamu, tersedia beberapa pilihan
                seperti Bootcamp, Mini Bootcamp, Webinar, Workshop, Mini Class
                serta Private Course 1on1.
              </p>
              <img src="../assets/rectangle2708.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div
            class="row_regis row align-items-center justify-content-end justify-content-md-start"
          >
            <div
              class="div_regis col-md-10 bg-white p-4 me-0 me-xl-5 mb-5 mb-xl-0"
            >
              <h1>{{ judul3 }}</h1>
              <p class="text-muted">
                {{ isi3 }}
              </p>
              <img src="../assets/rectangle2708.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="procedures_1 justify-content-center row">
            <img src="../assets/Maskot_Pembayaran.png" alt="pembayaran" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6 order-2 order-xl-1">
          <div class="procedures_2 justify-content-center row">
            <img src="../assets/Maskot_Siap_Belajar.png" alt="procedures 4" />
          </div>
        </div>
        <div class="col-md-6 order-1 order-xl-2 mb-5 mb-xl-0">
          <div
            class="row_kelas row align-items-center justify-content-start justify-content-xl-end"
          >
            <div class="div_kelas col-md-10 bg-white p-4 me-xl-5 me-0">
              <h1>{{ judul4 }}</h1>
              <p class="text-muted">
                {{ isi4 }}
              </p>
              <img src="../assets/rectangle2708.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProceduresForUse",
  // props: ['header','procedur'],
  props: {
    judul3: String,
    isi3: String,
    ebanking: String,
    transfer: String,
    hargadatascience: String,
    datascience: String,
    hargawebdev: String,
    webdev: String,
    judul4: String,
    isi4: String,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500&display=swap");

.row_regis,
.row_kelas {
  height: 100%;
}
.div_regis,
.div_kelas {
  border: 1px solid rgba(255, 134, 93, 0.4);
  border-radius: 28px;
}
.div_regis > h1,
.div_kelas > h1 {
  font-size: 28px !important;
  font-weight: 600;
  color: #023047;
}
.div_regis > p,
.div_kelas > p {
  font-size: 16px !important;
}
.div_data_science {
  background: #feecd7;
  width: 162px !important;
}
.div_web {
  background: #f9ffe9;
  width: 192px !important;
}
.div_data_science > img,
.div_web > img {
  height: 40px !important;
  align-items: center;
}
.div_content_data_science > p,
.div_content_web > p {
  font-size: 12px !important;
  margin-bottom: -7px !important
  ;
}
.div_content_data_science > a {
  font-size: 10px !important;
  color: #ff865d;
}
.div_content_web > a {
  font-size: 10px !important;
  color: #7cd11b;
}
.procedures {
  background-image: url("../assets/background-procedures.png");
}
.procedures_1 > img {
  width: 100% !important;
}
.procedures_2 > img {
  width: 100% !important;
  position: relative;
}
.procedures_4 > img {
  width: 100% !important;
}
.head-program > h1 {
  font-size: 32px !important;
  font-weight: 600;
  color: #023047;
}
.div_email {
  margin-bottom: -60px !important;
}
.div_data_science {
  margin-top: 80px !important;
  z-index: 1;
  position: absolute;
}
.div_web {
  z-index: 1;
  position: absolute;
  margin-top: -70px !important;
  margin-right: 40px !important;
}
.div_password {
  margin-top: -35px !important;
  margin-right: 30px !important;
}
.form-label {
  color: #868b90 !important;
  font-size: 10px !important;
}
#exampleFormControlInput1,
#exampleFormControlInput2 {
  font-size: 11px !important;
}
.form-control {
  color: black;
}
.input_email > img {
  background-size: cover;
  height: 15px;
  width: 15px;
  align-items: center !important;
  margin: 7px 0 7px -25px;
}

#row3 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}
#info3 {
  flex: 50%;
  height: 244px;
  border: 1px solid rgba(255, 134, 93, 0.4);
  border-radius: 28px;
  padding: 1rem;
  margin-top: 0px;
  margin-right: 0px;
}
#info3 h3 {
  margin-top: 30px;
  font-size: 28px;
  font-weight: 600;
  padding-left: 0px;
}
#info3 p {
  font-size: 16px;
  /* padding-left: 35px; */
}
#ilustration3 {
  flex: 50%;
}
#ilustration3 img {
  position: absolute;
  height: 460px;
  width: 500px;
  object-fit: cover;
}
#ebanking {
  /* margin-top: 83px;
  margin-left: 5px;
  position: absolute; */
  text-align: center;
  background-color: #f9ffe9;
  border-radius: 20px;
  width: 90px;
  height: 100px;
  transform: translate(4rem, 5rem);
}
#ebanking div {
  /* padding: 18px 40px 40px 15px; */
}
#ebanking img {
  width: 29px;
  height: 29px;
  object-fit: cover;
  padding: 5px;
  border-radius: 30px;
  background-color: #7cd11b;
}
#ebanking p {
  margin-top: 4px;
  text-align: center;
  font-family: "Hind Siliguri", sans-serif;
  color: #7cd11b;
  font-size: 14px;
  font-weight: 500;
}
#transfer {
  /* margin-top: 125px;
  margin-left: 370px;
  position: absolute; */
  text-align: center;
  background-color: #eefcff;
  border-radius: 20px;
  width: 90px;
  height: 100px;
  transform: translate(-1rem, 18rem);
}
#transfer img {
  width: 27px;
  height: 26px;
  object-fit: cover;
  padding: 5px;
  border-radius: 20px;
  background-color: #0883e0;
}
#transfer p {
  margin-top: 4px;
  text-align: center;
  font-family: "Hind Siliguri", sans-serif;
  color: #0883e0;
  font-size: 14px;
  font-weight: 500;
}
#datascience {
  /* position: relative;
  margin-top: 380px;
  margin-left: 87px; */
  background-color: #ffffff;
  border-radius: 20px;
  width: max-content;
  height: max-content;
  padding: 0.5rem 1rem 0.5rem 1rem;
}
#datascience div {
  /* padding: 23px 0 40px 15px; */
  padding: 0;
}
#datascience img {
  width: 20px;
  height: 28px;
  object-fit: cover;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid #fcab97;
}
#datascience h5 {
  /* padding-left: 15px;
  margin-top: 20px; */
  font-size: 14px;
  font-weight: 700;
}
#datascience p {
  /* padding-left: 15px;
  width: 90px; */
  /* width: max-content; */
  margin-top: 0px;
  color: #656e87;
  font-size: 10px;
  font-weight: 500;
}
#webdev {
  /* position: absolute;
  margin-top: -153px;
  margin-left: 255px; */
  background-color: #ffffff;
  border-radius: 20px;
  /* width: 125px;
  height: 154px; */
  width: max-content;
  height: max-content;
  padding: 0.5rem 1rem 0.5rem 1rem;
}
#webdev div {
  /* padding: 23px 0 40px 15px; */
  padding: 0;
}
#webdev img {
  width: 20px;
  height: 28px;
  object-fit: cover;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid #fcab97;
}
#webdev h5 {
  /* padding-left: 15px;
  margin-top: 17px; */
  font-size: 14px;
  font-weight: 700;
}
#webdev p {
  /* padding-left: 15px;
  width: 90px; */
  margin-top: 0px;
  color: #656e87;
  font-size: 10px;
  font-weight: 500;
}
#row4 {
  display: flex;
  flex-direction: row;
}
#ilustration4 {
  flex: 50%;
  margin-right: 132px;
}
#ilustration4 img {
  height: 460px;
  width: 420px;
  object-fit: cover;
}
#info4 {
  flex: 50%;
  margin-top: 100px;
  height: 244px;
  border: 1px solid rgba(255, 134, 93, 0.4);
  border-radius: 28px;
  padding-right: 40px;
}
#info4 h3 {
  margin-top: 30px;
  font-size: 28px;
  font-weight: 600;
  padding-left: 35px;
}
#info4 p {
  font-size: 16px;
  width: 450px;
  padding-left: 35px;
}
hr {
  margin-left: 35px;
  margin-top: 40px;
}
p {
  text-align: justify;
}
#transfer {
  transform: translate(-3vw, 40vh);
}
.bottom-0 {
  bottom: -7rem !important;
}
.mt-5 {
  margin-top: 8rem !important;
}

@media only screen and (max-width: 1100px) {
  /* #info3 h3 {
    font-size: 28px;
    padding-left: 35px;
  } */
  /* #info3 p {
    width: 350px;
    padding-left: 35px;
  } */
  #ilustration3 {
    flex: 30%;
  }
  #ilustration3 img {
    margin-left: -15%;
    height: 360px;
    width: 400px;
    object-fit: cover;
  }
  #ebanking {
    margin-top: 0;
    margin-left: 0;
    position: absolute;
    text-align: center;
    background-color: #f9ffe9;
    border-radius: 20px;
    width: max-content;
    height: max-content;
    transform: translate(44%, 29%);
  }
  #ebanking div {
    padding: 16px;
  }
  #ebanking img {
    width: 15px;
    height: 22px;
    object-fit: cover;
    padding: 4px;
  }
  #ebanking p {
    margin-top: 7px;
  }
  #transfer {
    margin-top: 100px;
    margin-left: 180px;
    border-radius: 20px;
    width: 70px;
    height: 80px;
    transform: translate(388%, 239%);
  }
  #transfer div {
    padding: 15px;
  }
  #transfer img {
    width: 22px;
    height: 21px;
    object-fit: cover;
    padding: 5px;
  }
  #transfer p {
    margin-top: 15px;
    text-align: center;
  }
  /* #datascience {
    margin-top: 360px;
    margin-left: -15%;
    width: 100px;
    height: 129px;
  } */
  #datascience div {
    padding: 25px;
  }
  #datascience img {
    width: 20px;
    height: 28px;
    object-fit: cover;
    padding: 5px;
  }
  #datascience h5 {
    margin-top: 15px;
  }
  #datascience p {
    margin-top: 0px;
  }
  /* #webdev {
    margin-top: -120px;
    margin-left: 100px;
    width: 100px;
    height: 129px;
  } */
  #webdev div {
    padding: 15px;
  }
  #webdev img {
    width: 20px;
    height: 28px;
    object-fit: cover;
    padding: 5px;
  }
  #webdev h5 {
    padding-left: 0px;
    margin-top: 25px;
  }
  #webdev p {
    padding-left: 0px;
    margin-top: 0px;
  }
  #ilustration4 {
    margin-right: 0px;
  }
  #ilustration4 img {
    height: 400px;
    width: 360px;
    object-fit: cover;
  }
  #info4 {
    width: 370px;
  }
  #info4 h3 {
    margin-top: 25px;
    font-size: 24px;
  }
  #info4 p {
    font-size: 14px;
    width: 350px;
  }
}

@media only screen and (max-width: 1024px) {
  #ilustration4 img {
    width: 100%;
  }

  #ebanking {
    transform: translate(5vw, 5vh);
  }
}

@media only screen and (max-width: 768px) {
  #row3 {
    flex-direction: row;
  }

  #row4 {
    flex-direction: column;
  }

  #row3 {
    justify-content: space-evenly;
  }
  /* #info3 h3 {
    font-size: 24px;
    margin-top: 30px;
  } */

  #info3 {
    height: max-content;
    padding: 1.5rem;
  }
  #info3 p {
    font-size: 14px;
  }
  #ilustration3 img {
    position: relative;
  }
  #ebanking,
  #transfer {
    margin-top: -300px;
    height: 100px;
    width: max-content;
  }

  #ebanking {
    transform: translate(3rem, 18rem);
  }

  #ebanking div,
  #transfer div {
    padding: 0;
  }

  #ebanking p,
  #transfer p {
    margin: 0;
  }
  #transfer {
    margin-top: -250px;
    margin-left: 230px;
    height: 100px;
    transform: translate(-1rem, 28rem);
  }

  .bottom-0 {
    bottom: -10rem !important;
  }
  /* #webdev {
    margin-top: 20px;
    margin-left: 0px;
  } */
  /* #datascience {
    position: absolute;
    margin-top: 10px;
    margin-left: 100px;
  } */
  #row4 {
    margin-top: 35%;
  }

  .div_data_science {
    z-index: 0;
    position: absolute;
    margin-top: 1rem !important;
    right: 14rem;
  }

  #ilustration4 img {
    width: 100%;
    height: 100%;
  }
}

@media only screen and (max-width: 640px) {
  .bottom-0 {
    bottom: -16rem !important;
  }

  #row3 {
    margin-left: 0;
    flex-direction: column;
  }

  #transfer,
  #ebanking {
    width: 90px;
  }

  #transfer {
    transform: translate(9rem, 38rem);
  }
  #ebanking {
    transform: translate(8rem, 23rem);
  }

  .div_password {
    margin-right: 0 !important;
  }

  #info3 {
    margin-top: 22rem;
    padding: 0 2rem;
  }

  hr {
    margin-left: 0px;
    margin-top: 16px;
  }

  #ilustration4 img {
    height: max-content;
    width: 100%;
  }

  #row4 {
    margin-top: 10rem;
  }

  #info4 {
    width: 100%;
  }

  #info4 p {
    width: 100%;
  }
}

@media only screen and (max-width: 480px) {
  #ebanking {
    transform: translate(52%, 339%);
  }

  #transfer {
    transform: translate(112%, 532%);
  }
}

@media only screen and (max-width: 375px) {
  #transfer {
    transform: translate(19%, 453%);
    width: 85px;
  }

  #ebanking {
    transform: translate(19%, 313%);
  }

  .div_data_science {
    right: 13rem;
  }
}

@media only screen and (max-width: 360px) {
  .div_password {
    margin-right: 0px !important;
  }

  #info3 h3 {
    padding: 0 !important;
  }

  #info3 p {
    width: 100%;
    padding: 0;
  }

  /* #ilustration3 .illustration3-bg {
    margin-left: 0;
    height: 250px;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  } */

  .div_web {
    margin-top: -54px !important;
    margin-right: 0px !important;
  }

  #transfer {
    /* margin-top: -40px;
    margin-left: 190px; */
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(-59vw, 30vh);
  }

  #transfer div {
    padding: 0;
  }

  #transfer p {
    margin: 0;
  }

  /* #datascience {
    position: absolute;
    margin-top: 5rem;
    margin-left: 100px;
  } */

  .bottom-0 {
    bottom: -14rem !important;
  }

  #datascience {
    background-color: #ffffff;
    border-radius: 20px;
    width: 146px;
    height: -moz-max-content;
    /* padding: 0.2rem 1rem 0.2rem 1rem; */
    margin-bottom: 2rem;
  }

  #datascience div,
  #webdev div {
    padding: 1rem 0 0 0 !important;
  }

  #webdev {
    background-color: #ffffff;
    border-radius: 20px;
    width: 142px;
    height: max-content;
  }

  /* #webdev {
    margin-top: 5.7rem;
    margin-left: 0px;
  } */

  #ebanking {
    /* margin-top: -237px;
    margin-left: -1%; */
    height: 75px;
    width: 93px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 1rem;
    padding-right: 1rem;
    transform: translate(74vw, 55vh);
  }

  #ebanking div {
    padding: 0;
  }

  #ebanking p {
    margin: 0;
  }

  #info3 {
    padding: 0 20px 0 20px;
    width: 100%;
    margin-top: 17rem;
  }

  hr {
    margin-left: 2px;
    margin-top: 16px;
  }

  #row4 {
    margin: 0 0 0 0;
  }

  #info4 {
    width: 100%;
    padding: 0 20px 0 20px;
  }

  #info4 p {
    width: 100%;
  }

  #info4 h3 {
    padding: 0 !important;
  }

  #info4 p,
  #infor4 h3 {
    padding: 0 !important;
  }

  #ilustration4 img {
    height: 290px;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .testimoni {
    width: 100%;
  }

  #row3 {
    flex-direction: column !important;
  }
}

@media only screen and (max-width: 320px) {
  .div_password {
    margin-right: 0px !important;
  }

  #info3 h3 {
    padding: 0 !important;
  }

  #info3 p {
    width: 100%;
    padding: 0;
  }

  /* #ilustration3 .illustration3-bg {
    margin-left: 0;
    height: 250px;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  } */

  .div_web {
    margin-top: -54px !important;
    margin-right: 0px !important;
  }

  #transfer {
    /* margin-top: -40px;
    margin-left: 190px; */
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translate(-14rem, 16rem);
  }

  #transfer div {
    padding: 0;
  }

  #transfer p {
    margin: 0;
  }

  /* #datascience {
    position: absolute;
    margin-top: 5rem;
    margin-left: 100px;
  } */

  .bottom-0 {
    bottom: -21rem !important;
  }

  #datascience {
    background-color: #ffffff;
    border-radius: 20px;
    width: 146px;
    height: -moz-max-content;
    /* padding: 0.2rem 1rem 0.2rem 1rem; */
    margin-bottom: 2rem;
  }

  #datascience div,
  #webdev div {
    padding: 1rem 0 0 0 !important;
  }

  #webdev {
    background-color: #ffffff;
    border-radius: 20px;
    width: 142px;
    height: max-content;
  }

  /* #webdev {
    margin-top: 5.7rem;
    margin-left: 0px;
  } */

  #ebanking {
    /* margin-top: -237px;
    margin-left: -1%; */
    height: 75px;
    width: 93px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 1rem;
    padding-right: 1rem;
    transform: translate(14rem, 30rem);
  }

  #ebanking div {
    padding: 0;
  }

  #ebanking p {
    margin: 0;
  }

  #info3 {
    padding: 0 20px 0 20px;
    width: 100%;
    margin-top: 388px;
  }

  hr {
    margin-left: 2px;
    margin-top: 16px;
  }

  #row4 {
    margin: 0 0 0 0;
  }

  #info4 {
    width: 100%;
    padding: 0 20px 0 20px;
  }

  #info4 p {
    width: 100%;
  }

  #info4 h3 {
    padding: 0 !important;
  }

  #info4 p,
  #infor4 h3 {
    padding: 0 !important;
  }

  #ilustration4 img {
    height: 290px;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .testimoni {
    width: 100%;
  }

  #row3,
  #row4 {
    flex-direction: column !important;
  }

  .div_data_science {
    right: 9rem;
  }
}
</style>
