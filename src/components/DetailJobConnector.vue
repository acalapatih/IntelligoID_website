<template>
  <NavbarComp :user="user" />
  <div id="main">
    <!-- Header Section -->
    <div class="header-section">
      <div class="header-card card border-0" style="color: #023047">
          <img
            class="card-img img-fluid"
            style="height: 100%"
            src="../assets/detailJobHeader.png"
            alt="job-header"
          />
        <div class="header-content card-img-overlay d-flex flex-column">
          <div>
            <img
              class="header-company-img img-fluid"
              src="../assets/tokopediaIcon.png"
              alt="job-icon"
            />
          </div>  
          <div class="header-information d-flex justify-content-between"> 
            <div class="header-info-text">
              <p style="font-weight: 400; font-size: 1rem">Tokopedia</p>
              <h3 style="font-weight: 700; font-size: 1.5rem">Jr Data Scientist</h3>
              <h3 style="font-weight: 400; font-size: 1rem">
                <span style="font-weight: 600; font-size: 1rem">Fulltime</span>
                | Pengalaman 0-1 Tahun
              </h3>
              <p style="font-weight: 400; font-size: 1rem">WFA - Jakarta, Indonesia</p>
              <p style="font-weight: 400; font-size: 0.875rem; font-style: italic">Listed: 15 November 2022</p>
            </div>
            <div class="header-btn d-flex flex-column justify-content-end" style="gap: 20px">
              <button type="button" class="btn" style="font-weight: 600; font-size: 0.875rem">Kunjungi Web</button>
              <button type="button" class="btn" style="font-weight: 600; font-size: 0.875rem">Lamar Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END Header Section -->

    <!-- Job Description Section -->
    <div class="job-section" style="text-align: justify">
      <div style="margin-bottom: 2.5rem">
        <h4 style="margin-bottom: 1rem">🏢 Tentang Perusahaan</h4>
        <p>
          PT Tokopedia is an electronic trading company or often called an
          online shop. Since its establishment in 2009, Tokopedia has
          transformed into a unicorn that is influential not only in Indonesia
          but also in Southeast Asia. Until now, Tokopedia is one of the most
          visited marketplaces by Indonesian people.
        </p>
      </div>
      <div style="margin-bottom: 2.5rem">
        <h4 style="margin-bottom: 1rem">📑 Persyaratan</h4>
        <ul>
          <li>
            Bachelors or Masters degree in Statistics, Analytics, Economics,
            Mathematics, Engineering or otherquantitative subjects
          </li>
          <li>
            Extensive hands-on experience with tools such as Python, R, Presto,
            SQL/Hive, and DataVisualization platforms like Tableau/ Power
            BI/D3.js
          </li>
          <li>
            Solid experience in reporting to CEO / directors in delivering
            analyses and reports
          </li>
          <li>
            Extensive expertise in data modeling, both logical and physical
          </li>
          <li>
            Experience with designing, running and analyzing A/B tests and
            product experiments. Should alsohave an understanding of hypothesis
            testing and the basic principles of DoE
          </li>
          <li>
            Expertise in data retrieval, data modeling, data warehouse design,
            and predictive modeling
          </li>
          <li>
            Passionate about solving problems – possesses a relentless need for
            investigation and dataexploration
          </li>
          <li>
            Results and detail-oriented, with strong intuitions on how to solve
            problems creatively and quickly
          </li>
          <li>
            Ability to distill data and articulate an actionable point of view
            to non-technical audiences and seniorstakeholders using
            presentations, interactive visualizations, et al
          </li>
        </ul>
      </div>
      <div style="margin-bottom: 2.5rem">
        <h4 style="margin-bottom: 1rem">🎯 Deskripsi Pekerjaan</h4>
        <ul>
          <li>
            Develop and deploy analytical solutions across a variety of business
            functions, including, but notlimited to: customer acquisition,
            customer retention, product development, pricing decisions,
            creditrisk, fraud identification and many other business needs
            within Digibank for both retail and wholesalebanking customers
          </li>
          <li>
            Uncover and deliver insights and trends to deliver actionable
            product recommendations to support thebusiness, through dashboards
            and advanced visualization techniques
          </li>
          <li>
            Creating data products which can be readily used by partners and
            business units across the bank
          </li>
          <li>
            Partner closely with the broader product, engineering and marketing
            teams to define requirements,design and analyze experiments that
            drive key product designs and marketing decisions
          </li>
          <li>
            Develop analytic tools to help the data team and other disciplines
            be more effective in debugging,data summarization and analysis of
            results
          </li>
          <li>
            Conduct both historical and predictive analyses and convert into
            digestible, readable, andpublicly-available insights. 7. Ensure data
            accuracy and good segmentation of data sets for tactical data mining
          </li>
        </ul>
      </div>
      <div style="margin-bottom: 2.5rem">
        <h4 style="margin-bottom: 1rem">⚙️ Skills</h4>
        <ul>
          <li>
            Having basic programming skills, like for example Python, R or
            MATLAB
          </li>
          <li>
            Strong academic background in mathematics, statistics, or modelling
          </li>
          <li>
            Experience that demonstrates your team-oriented, innovative, and
            strategic working styles
          </li>
          <li>Familiarity with data visualisation tools</li>
          <li>Pro-active and flexible work mentality</li>
          <li>Interest in data-driven trading</li>
          <li>Fluency in English, both written and spoken</li>
        </ul>
      </div>
    </div>
    <!-- END Job Description Section -->

    <!-- Related Jobs Section -->
    <div class="related-section">
      <h3 style="font-weight: 600; font-size: 26px">Related Jobs</h3>
      <div class="related-job-section" style="gap: 20px; margin-top: 20px">
        <div class="related-card">
          <img src="../assets/jnt.png" alt="related-icon" />
          <div style="width: 100%; margin-left: 20px; margin-right: 30px">
            <p>J&T, <span style="font-style: italic">logistic</span></p>
            <div class="d-flex align-items-center justify-content-between">
              <h3 style="font-weight: 400; font-size: 20px">
                Jr. Data Scientiest
              </h3>
              <h3 style="font-weight: 400; font-size: 16px">9 nov</h3>
            </div>
            <h3 style="font-weight: 400; font-size: 14px">Fulltime</h3>
          </div>
        </div>
        <div class="related-card">
          <img src="../assets/jnt.png" alt="related-icon" />
          <div style="width: 100%; margin-left: 20px; margin-right: 30px">
            <p>J&T, <span style="font-style: italic">logistic</span></p>
            <div class="d-flex align-items-center justify-content-between">
              <h3 style="font-weight: 400; font-size: 20px">
                Jr. Data Scientiest
              </h3>
              <h3 style="font-weight: 400; font-size: 16px">9 nov</h3>
            </div>
            <h3 style="font-weight: 400; font-size: 14px">Fulltime</h3>
          </div>
        </div>
        <div class="related-card">
          <img src="../assets/jnt.png" alt="related-icon" />
          <div style="width: 100%; margin-left: 20px; margin-right: 30px">
            <p>J&T, <span style="font-style: italic">logistic</span></p>
            <div class="d-flex align-items-center justify-content-between">
              <h3 style="font-weight: 400; font-size: 20px">
                Jr. Data Scientiest
              </h3>
              <h3 style="font-weight: 400; font-size: 16px">9 nov</h3>
            </div>
            <h3 style="font-weight: 400; font-size: 14px">Fulltime</h3>
          </div>
        </div>
        <div class="related-card">
          <img src="../assets/jnt.png" alt="related-icon" />
          <div style="width: 100%; margin-left: 20px; margin-right: 30px">
            <p>J&T, <span style="font-style: italic">logistic</span></p>
            <div class="d-flex align-items-center justify-content-between">
              <h3 style="font-weight: 400; font-size: 20px">
                Jr. Data Scientiest
              </h3>
              <h3 style="font-weight: 400; font-size: 16px">9 nov</h3>
            </div>
            <h3 style="font-weight: 400; font-size: 14px">Fulltime</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script>
import NavbarComp from "./NavbarComp.vue";
import FooterComp from "./FooterComp.vue";

export default {
  name: "DetailJobConnector",
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  margin: 0;
  background-color: white;
  font-family: "Poppins", sans-serif;
}

.header-section {
  margin: 40px;
}
.header-card {
  height: 100%;
}
.header-content {
  gap: 1rem;
  height: auto;
  margin: 2.5rem 1.5rem;
}
.header-company-img {
  width: 5rem;
}
.header-information {
  height: auto;
  width: 100%;
}
.header-info-text {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.header-btn {
  height: auto;
}
.card-img {
  max-width: 100%;
}

h3, p {
  margin-bottom: 0;
}

.btn {
  width: 100%;
  height: 2.625rem;
  padding: 0 1.5rem;
  border-radius: 100px;
  background-color: #023047;
  color: white;
}

.job-section {
  margin: 0 2.5rem;
  margin-top: 60px;
}
h4 {
  font-weight: 1.25rem;
  font-size: 20px;
}
p {
  font-weight: 400;
  font-size: 1rem;
}

.related-section {
  margin: 80px 60px 40px 40px;
}
.related-job-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.related-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;

  /* width: 580px;
  height: 114px; */

  width: 100%;
  height: auto;

  background: #fdfdfd;
  border: 1px solid #d9d9d9;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
}


@media screen and (max-width: 1250px) {
  .header-card {
    height: 50vh;
  }
}

@media screen and (max-width: 900px) {
  .related-job-section {
    grid-template-columns: repeat(1, 1fr);
  } 
}

@media screen and (max-width: 600px) {
  .header-card {
    height: 65vh;
  }
  .header-content {
   align-items: center;
   margin: 1rem;
  } 
  .header-information {
    gap: 1rem;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
  .header-btn {
    width: 100%;
  }
}
</style>
