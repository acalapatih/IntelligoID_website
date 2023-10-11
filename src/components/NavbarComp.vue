<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="z-index: 1">
    <div class="container-fluid">
      <router-link to="/">
        <img
          src="../assets/logo.png"
          alt="Intelligo ID Logo"
          class="img-logo"
        />
      </router-link>
      <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav m-auto d-flex gap-4 align-items-center">
          <router-link class="nav-item link p-1" to="/">Home</router-link>
          <router-link class="nav-item link p-1" to="/event">Event</router-link>
          <router-link class="nav-item link p-1" to="/showcase"
            >Showcase</router-link
          >
          <a
            class="nav-item link p-1"
            target="_blank"
            href="https://blog.intelligo.id/"
          >
            Blog
          </a>
          <router-link class="nav-item link p-1" to="/about"
            >About Us</router-link
          >
        </div>
        <div class="navbar-nav d-flex gap-2 align-items-center">
          <div v-if="status !== true">
            <button class="btn-login" @click="login">Login</button>
            <button class="btn-register" @click="register">Register</button>
          </div>
          <div class="dropdown" v-else>
            <button
              class="btn rounded-md btn-sm dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Account
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" @click="dashboard()"
                  >Dashboard</a
                >
              </li>
              <li>
                <a class="dropdown-item" @click="profile()" href="#">Profile</a>
              </li>
              <li>
                <a class="dropdown-item" @click="logout()" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: `NavbarComp`,
  props: ["user"],
  data() {
    return {
      status: false,
    };
  },
  methods: {
    login() {
      window.location.href = "https://dashboard.intelligo.id/signin";
    },
    register() {
      window.location.href = "https://dashboard.intelligo.id/signup";
    },
    dashboard() {
      window.location.href = "https://dashboard.intelligo.id/dashboard/event";
    },
    menu() {
      document.querySelector("ul").classList.toggle("active-nav");
    },
    profile() {
      window.location.href = "https://dashboard.intelligo.id/dashboard/profile";
    },
    logout() {
      Cookies.remove("intelligo-token", { domain: ".intelligo.id" });
      window.location.href = "https://dashboard.intelligo.id/signin";
    },
    //   fungsiLoadUser: async function () {
    //     if (!this.user) {
    //       this.$api.get(`/auth/check`).then((resp) => {
    //         const response = resp.data
    //         if (response.status) {
    //           this.status = true
    //         } else {
    //           this.status = false
    //         }
    //       }).catch((error) => {
    //         this.status = false
    //       })
    //     }
    //   },
    // },
    // mounted() {
    //   this.fungsiLoadUser()
  },
  created() {
    if (Cookies.get("intelligo-token")) {
      this.status = true;
    } else {
      this.status = false;
    }
    console.log(this.status);
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
}
.dropdown {
  margin-right: 5vw;
}
.dropdown button {
  border: 1.5px solid #ff5400 !important;
  color: #ff5400 !important;
}

.dropdown button:hover {
  background-color: #ff5400 !important;
  color: white !important;
}
.navbar {
  margin: 1% 2% 0 2%;
}

.navbarNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #023047;
  text-decoration: none;
}
.link:hover {
  font-weight: 600;
}

.img-logo {
  width: 168px;
  height: 34px;
}

.btn-register {
  width: 139px;
  height: 42px;
  border-radius: 100px;
  background-color: #023047;
  color: white;
  font-size: 12px;
  margin-left: 13px;
}

.btn-register:hover {
  background-color: white;
  color: #023047;
  outline-color: #023047;
}

.btn-login {
  width: 139px;
  height: 42px;
  border-radius: 100px;
  background-color: #f5f5f5;
  outline-color: #023047;
  font-size: 12px;
}

.btn-login:hover {
  background-color: #f74d00;
  border: #f74d00;
  color: #fff;
}

@media only screen and (max-width: 900px) {
  .navbar .container-fluid {
    margin-bottom: 10vw;
  }
  .dropdown {
    margin: 2.5vw 0;
  }
}

@media only screen and (max-width: 1250px) {
  nav {
    margin: 1rem 2rem;
  }
}
</style>
