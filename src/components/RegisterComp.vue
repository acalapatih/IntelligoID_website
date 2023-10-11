<template>
  <div id="main" class="d-none d-lg-flex m-0">
    <div id="leftSection">
      <a href="/">
        <img src="../assets/logow.png" />
      </a>
    </div>
    <div id="rightSection">
      <div id="header">
        <h1>Buat Akun Terlebih Dahulu!!</h1>
        <h2>Agar mempermudah memantau perkembanganmu</h2>
      </div>
      <div id="form">
        <div id="leftForm">
          <h3>First Name</h3>
          <input type="text" v-model="data.firstname" />
          <h3>Phone Number</h3>
          <input type="text" v-model="data.phone" />
          <h3>Password</h3>
          <input type="password" v-model="data.password" />
        </div>
        <div id="rightForm">
          <h3>Last Name</h3>
          <input type="text" v-model="data.lastname" />
          <h3>Email</h3>
          <input type="email" v-model="data.email" />
          <h3>Ulangi Password</h3>
          <input type="password" v-model="data.password2" />
        </div>
      </div>
      <div id="check">
        <input type="checkbox" />
        <p>Simpan Akun</p>
      </div>
      <div id="check">
        <input type="checkbox" />
        <p>Saya menyetujui semua Ketentuan, Kebijakan Privasi, dan Biaya</p>
      </div>
      <button id="createAccount" value="createAccount">Create Account</button>
      <!-- <div id="loginGoogle">
        <img src="../assets/logoGoogle.png" />
        <p>Masuk dengan Google</p>
      </div> -->
      <div id="login">
        <p>Sudah punya akun?</p>
        <router-link to="/login">
          Log in
        </router-link>
      </div>
    </div>
  </div>

  <div
    class="mainMobile d-flex justify-content-center align-items-center d-lg-none"
    id="rightSectionMobile"
  >
    <div class="wrapper">
      <div id="headerMobile" class="text-center">
        <h1 class="text-white">Buat Akun Terlebih Dahulu!!</h1>
        <h2>Agar mempermudah memantau perkembanganmu</h2>
      </div>
      <div id="formMobile">
        <div id="leftFormMobile">
          <h3 class="text-white">{{ data.firstname }}</h3>
          <input type="text" v-model="data.firstname" />
          <h3 class="text-white">Last Name</h3>
          <input type="text" />
          <h3 class="text-white">Email</h3>
          <input type="email" />
          <h3 class="text-white">Phone Number</h3>
          <input type="text" />
          <h3 class="text-white">Password</h3>
          <input type="password" />
          <h3 class="text-white">Ulangi Password</h3>
          <input type="password" />
        </div>
      </div>
      <div id="checkMobile">
        <input type="checkbox" />
        <p>Simpan Akun</p>
      </div>
      <div id="checkMobile">
        <input type="checkbox" />
        <p>Saya menyetujui semua Ketentuan, Kebijakan Privasi, dan Biaya</p>
      </div>
      <button
        id="createAccountMobile"
        value="createAccount"
        @click="registerSubmit(data)"
      >
        Create Account
      </button>
      <!-- <div id="loginGoogleMobile">
        <img src="../assets/logoGoogle.png" />
        <p>Masuk dengan Google</p>
      </div> -->
      <div id="loginMobile">
        <p>Sudah punya akun?</p>
        <router-link to="/login">
          Log in
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterComp",
  data() {
    return {
      data: {
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        password2: "",
      },
      response: {
        message: "",
        status: "",
      },
    };
  },
  methods: {
    registerSubmit: async function () {
      this.response = (await this.$api.post("/auth/register", this.data)).data;
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
  flex: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  padding-top: 115px;
  padding-bottom: 115px;
  margin-left: 20px;
}
#rightSection #header {
  margin-left: 0px;
  text-align: center;
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
#rightSection #form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
}
#form h3 {
  margin-top: 30px;
  font-size: 14px;
  font-weight: 400;
}
#form input {
  border-radius: 10px;
  width: 300px;
  height: 40px;
  margin-top: 8px;
  padding: 12px 17px;
}
#form #rightForm {
  margin-left: 20px;
}
#check {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  margin: 60px auto 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  margin: 20px auto 0 auto;
  width: 400px;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  padding: 12px 3px 12px 0px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  cursor: pointer;
}
#loginGoogle p {
  padding-top: 17px;
  margin-left: 14px;
}
#rightSection #login {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
}
#login a {
  margin-left: 5px;
  color: #f74d00;
}

/* Mobile */
div#leftFormMobile {
  width: 100%;
}
#rightSectionMobile {
  flex: 60%;
  margin-top: 0px;
  margin-left: 0px;
  padding: 30px;
}
#rightSectionMobile #header {
  margin-left: 0px;
  text-align: center;
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
#rightSectionMobile #formMobile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
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
#formMobile #rightFormMobile {
  margin-left: 0px;
}
#checkMobile {
  display: flex;
  flex-direction: row;
  gap: 7px;
}
#checkMobile p {
  font-size: 12px;
  font-weight: 400;
  margin-left: 0px;
  color: #78839e;
}
#checkMobile input {
  width: 18px;
  height: 18px;
  border-radius: 5px;
}
#rightSectionMobile #createAccountMobile {
  margin: 60px auto 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  margin: 20px auto 0 auto;
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  padding: 12px 3px 12px 0px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  cursor: pointer;
  color: white;
}
#loginGoogleMobile p {
  padding-top: 17px;
  margin-left: 0px;
}
#rightSectionMobile #loginMobile {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
}
#loginMobile a {
  margin-left: 0px;
  color: #f74d00;
}

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  #leftSection {
    background-position: -5rem 0rem;
  }
}
</style>
