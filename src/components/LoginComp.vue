<template>
  <div id="main" class="d-none d-lg-flex m-0">
    <div id="leftSection">
      <a href="/">
        <img src="../assets/logow.png" />
      </a>
    </div>
    <div id="rightSection">
      <div id="header">
        <h1>Selamat Datang!!</h1>
        <h2>Mari mulai belajar di Intelligo.id</h2>
      </div>
      <div id="form">
        <div id="leftForm">
          <h3>Email</h3>
          <input type="text" v-model="data.email" />
          <h3>Password</h3>
          <input type="password" v-model="data.password" />
        </div>
      </div>
      <div id="check">
        <input type="checkbox" />
        <p>Simpan Akun</p>
      </div>
      <button id="createAccount" value="createAccount">Login</button>
      <!-- <div id="loginGoogle">
        <img src="../assets/logoGoogle.png" />
        <p>Masuk dengan Google</p>
      </div> -->
      <div id="login">
        <p>Belum punya akun?</p>
        <router-link to="/register">
          Registrasi
        </router-link>
      </div>
    </div>
  </div>

  <div
    class="mainMobile d-flex justify-content-center align-items-center d-lg-none"
    id="rightSectionMobile"
  >
    <div class="wrapper">
      <div id="headerMobile" class="text-white text-center">
        <h1>Selamat Datang!!</h1>
        <h2>Mari mulai belajar di Intelligo.id</h2>
      </div>
      <div id="formMobile">
        <div id="leftForm">
          <h3 class="text-white">Email</h3>
          <input type="text" v-model="data.email" />
          <h3 class="text-white">Password</h3>
          <input type="password" v-model="data.password" />
        </div>
      </div>
      <div id="checkMobile">
        <input type="checkbox" />
        <p class="text-white mx-2">Simpan Akun</p>
      </div>
      <button id="createAccountMobile" value="createAccount">Login</button>
      <!-- <div id="loginGoogleMobile">
        <img src="../assets/logoGoogle.png" />
        <p class="text-white">Masuk dengan Google</p>
      </div> -->
      <div id="loginMobile">
        <p>Belum punya akun?</p>
        <a href="/#/register">Registrasi</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `LoginComp`,
  data() {
    return {
      response: {},
      data: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginSubmit: async function () {
      this.response = await this.$api
        .post("/auth/login", this.data)
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
#main {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  font-family: "Poppins", sans-serif;
  color: black;
}
.mainMobile {
  margin: 0 auto;
  min-height: 100vh;
  background-color: #0f3a50;
  font-family: "Poppins", sans-serif;
  color: black;
  margin-top: 100px;
  margin-left: 0px;
}
#leftSection {
  flex: 50%;
  /* background-color: #023047; */
  background-image: url(../assets/leftImgLogin.png);
  background-repeat: no-repeat;
  background-size: cover;
}
#leftSection img {
  width: 114px;
  height: 23px;
  margin-top: 35px;
  margin-left: 100px;
}
#rightSection {
  flex: 50%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  padding-top: 115px;
  padding-bottom: 115px;
}
#rightSectionMobile {
  flex: 50%;
  margin-top: 0px;
  margin-left: 0px;
}
#rightSection #header {
  margin-left: 90px;
  margin-top: 120px;
}
#header h1 {
  font-size: 32px;
  font-weight: 600;
}
#header h2 {
  font-size: 16px;
  font-weight: 400;
  color: #78839e;
  margin-top: 5px;
  margin-bottom: 5px;
}
#rightSectionMobile #headerMobile {
  margin-left: 0px;
  margin-top: 0px;
}
#headerMobile h1 {
  font-size: 32px;
  font-weight: 600;
}
#headerMobile h2 {
  font-size: 16px;
  font-weight: 400;
  color: #78839e;
  margin-top: 5px;
  margin-bottom: 5px;
}
#rightSection #form {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-left: 90px;
}
#form h3 {
  margin-top: 30px;
  font-size: 14px;
  font-weight: 400;
}
#form input {
  border-radius: 10px;
  width: 400px;
  height: 40px;
  margin-top: 8px;
  padding: 12px 17px;
}
#form #rightForm {
  margin-left: 20px;
}
#rightSectionMobile #formMobile {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-left: 0px;
  justify-content: center;
}
#formMobile h3 {
  margin-top: 30px;
  font-size: 14px;
  font-weight: 400;
}
#formMobile input {
  border-radius: 10px;
  width: 100%;
  height: 40px;
  margin-top: 8px;
  padding: 12px 17px;
}
#formMobile #rightForm {
  margin-left: 0px;
}
#check {
  display: flex;
  flex-direction: row;
  margin-left: 90px;
}
#check p {
  font-size: 12px;
  font-weight: 400;
  margin-left: 10px;
}
#check input {
  width: 18px;
  height: 18px;
  border-radius: 5px;
}
#rightSection button {
  margin-left: 90px;
  margin-top: 10px;
  width: 400px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border: 1px solid #023047;
  background-color: #023047;
  border-radius: 8px;
}
#rightSection #loginGoogle {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 400px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  padding: 12px 3px 12px 95px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 90px;
}
#loginGoogle p {
  padding-top: 17px;
  margin-left: 14px;
}
#rightSection #login {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 180px;
}
#login a {
  margin-left: 5px;
  color: #f74d00;
}
#checkMobile {
  display: flex;
  flex-direction: row;
  margin-left: 0px;
}
#checkMobile p {
  font-size: 12px;
  font-weight: 400;
  margin-left: 0px;
}
#checkMobile input {
  width: 18px;
  height: 18px;
  border-radius: 5px;
}
#rightSectionMobile button {
  margin-left: 0px;
  margin-top: 10px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border: 1px solid #023047;
  background-color: #023047;
  border-radius: 8px;
}
#rightSectionMobile #loginGoogleMobile {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 0px;
}
#loginGoogleMobile p {
  padding-top: 17px;
  margin-left: 0px;
}
#rightSectionMobile #loginMobile {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 0px;
}
#loginMobile a {
  margin-left: 5px;
  color: #f74d00;
}

div#leftForm {
  width: 100%;
}

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  #leftSection {
    background-position: -5rem 0rem;
  }
}
</style>
