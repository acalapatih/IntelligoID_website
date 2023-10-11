<template>
  <div class="join-our">    
    <!-- <img class="navy_big" src="../assets/Ellipse-navy-big.png" alt="ellipse" />
    <img src="../assets/Ellipse-navy-small.png" alt="ellipse" />
    <img src="../assets/Ellipse-oren-small.png" alt="ellipse" />
    <img class="oren_big" src="../assets/Ellipse-oren-big.png" alt="ellipse" /> -->

    <div class="container-join">
      <div class="join-for">
        <h2 class="txt-join">Join Our Community</h2>
        <p class="txt-for">for a better future</p>
      </div>
      <div class="">
        <a
          href="https://t.me/+2_OmvDH61u01NTQ1"
          target="_blank"
          @click="GetClickUser"
          class="btn-join"
          >Join Now</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `JoinOur`,
};
</script>

<style>
.join-our {
  margin: 0;
  padding: 239px 7%;
  background-image: url("../assets/vector_join_kiri.png"), url("../assets/vector_join_kanan.png");
  background-position: left top, right bottom;
  background-repeat: no-repeat;
  position: relative;
}
.outer{
  max-width: 900px;
  height: 100%;
  position: relative;
  left: 17%;
  display: flex;
  align-items: center;
}
/* .ellipse-container,
.container-join {
  position: absolute;
} */
.ellipse-container {
  border: 2px solid black;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
}
.container-join {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 890px;
  background: white;
  /* width: 100%;
  height: auto; */
  padding: 1.5rem 3rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}
.navy_big {
  z-index: -2;
  position: relative;
  bottom: -200px;
  left: 150px;
}
.oren_big {
  z-index: -2;
  position: relative;
  bottom: -50px;
  left: 800px;
}
.btn-join {
  width: 160px;
  height: 50px;
  border-radius: 50px;
  background-color: #023047;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
.btn-join:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

@media screen and (max-width: 635px) {
  .join-our {
    padding: 170px 7%;
  }

  .container-join {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
}
</style>
