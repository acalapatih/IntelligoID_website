<template>
  <div id="main">
    <div id="header">
      <!-- <div id="container"> -->
      <div id="title">
        <h3 class="title1">{{ title1 }}</h3>
        <p class="title2">
          {{ title2 }}
        </p>
      </div>
      <!-- </div> -->
    </div>


    <div id="content">
      <div id="why">
        <div class="subtitle d-flex align-items-center gap-3">
          <img
            src="../assets/mentoring.png"
            alt="mentoring intelligo.id data scince"
          />
          <h5>{{ why1 }}</h5>
        </div>
        <p>{{ desc1 }}</p>
      </div>
      <div id="why">
        <div class="subtitle d-flex align-items-center gap-3">
          <img src="../assets/studycase.png" alt="intelligo.id data scince" />
          <h5>{{ why2 }}</h5>
        </div>
        <p>{{ desc2 }}</p>
      </div>
      <div id="why">
        <div class="subtitle d-flex align-items-center gap-3">
          <img src="../assets/portofolio2.png" alt="intelligo.id data scince" />
          <h5>{{ why3 }}</h5>
        </div>
        <p>{{ desc3 }}</p>
      </div>
      <div id="why">
        <div class="subtitle d-flex align-items-center gap-3">
          <img src="../assets/komunitas.png" alt="intelligo.id data scince" />
          <h5>{{ why4 }}</h5>
        </div>
        <p>{{ desc4 }}</p>
      </div>
      <div id="why">
        <div class="subtitle d-flex align-items-center gap-3">
          <img src="../assets/sideproject.png" alt="intelligo.id data scince" />
          <h5>{{ why5 }}</h5>
        </div>
        <p>{{ desc5 }}</p>
      </div>
      <div id="why">
        <div class="subtitle d-flex align-items-center gap-3">
          <img src="../assets/terjangkau.png" alt="intelligo.id data scince" />
          <h5>{{ why6 }}</h5>
        </div>
        <p>{{ desc6 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "keunggulan",
  // props: ['header','feature'],
  props: {
    title1: String,
    title2: String,
    why1: String,
    desc1: String,
    why2: String,
    desc2: String,
    why3: String,
    desc3: String,
    why4: String,
    desc4: String,
    why5: String,
    desc5: String,
    why6: String,
    desc6: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

body {
  margin: 0;
}
#main {
  /* width: 1086px; */
  background-color: #023047;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
}
#header {
  color: white;
  margin: 0 10rem;
}
#content {
  margin: 0 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
#title {
  padding: 100px 0;
}
#title h3 {
  font-size: 2rem;
}
#why {
  margin-bottom: 4rem;
  text-align: left;
  width: 77%;
}
#why .subtitle {
  margin-bottom: 1rem;
}
#why h5 {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 36px;
  color: #ffffff;
}
#why p {
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: #f5f5f5;
}

@media screen and (max-width: 1100px) {
  #header,
  #content {
    margin: 0 8rem;
  }
  #content {
    grid-template-columns: repeat(2, 1fr);
  }
  #why {
    margin-bottom: 2rem;
    width: 90%;
  }
}

@media screen and (max-width: 750px) {
  #content {
    grid-template-columns: repeat(1, 1fr);
  }
  #why {
    width: 70%;
  }
}

@media screen and (max-width: 660px) {
  #header,
  #content {
    margin: 0 5rem;
  }
  #why {
    width: 100%;
  }
  /* #ebanking {
    height: 75px;
    width: max-content;
    padding-left: 1rem;
    padding-right: 1rem;
    transform: translate(25rem, 41rem);
  }
  #transfer {
    height: 75px;
    transform: translate(-9rem, 20rem);
  }
  #info3 {
    margin-top: 275px;
  }
  #ilustration4 img {
    height: 100%;
    width: 100%;
  } */
}

@media screen and (max-width: 420px) {
  #header,
  #content {
    margin: 0 3rem;
  }
}
</style>
