<script>
  import logo from '$lib/ssa-iitb-logo.jpg';
  import { MoveRight } from '@lucide/svelte';
</script>

<svelte:head>
  <title>Semiconductor Student Alliance</title>
  <meta
    name="description"
    content="Empowering students to shape the future of semiconductor technology"
  />
</svelte:head>

<div class="container">
  <main>
    <div id="titles">
      <img src={logo} alt="" />
      <h1 id="h1_1">Semiconductor Student Alliance</h1>
      <h1 id="h1_2">IITB Chapter</h1>
      <h2>
        Empowering students to shape the future of semiconductor technology
      </h2>
    </div>

    <!-- TODO vertically center the arrow -->
    <a id="explore_mission" href="#mission"
      >Explore Our Mission <MoveRight height="0.1rem" /></a
    >

    <div id="contact">
      <h2>Get in Touch!</h2>

      <ul>
        <li>
          <strong>Email: </strong>
          <a href="mailto:ssa.iitb.ds@gmail.com">ssa.iitb.ds@gmail.com</a>
        </li>
        <li>
          <strong>Phone: </strong>
          <a href="tel:+91-8699300395">+91-8699300395</a>
        </li>
        <li>
          <strong>Location: </strong>
          IIT Bombay, Powai, Mumbai - 400076
        </li>
        <li>
          <a href="https://maps.app.goo.gl/MGSS3xMeiDCfKoHd9"
            >https://maps.app.goo.gl/MGSS3xMeiDCfKoHd9</a
          >
        </li>
      </ul>
    </div>
  </main>

  <div class="content">
    <div class="subcontent" id="mission">
      <h3>Our Mission</h3>

      <p>
        To <strong>reimagine semiconductor education</strong> at
        <a href="https://www.iitb.ac.in/">IIT Bombay</a>, creating a community
        where students lead innovation and shape the future of this vital
        technology.
      </p>
    </div>

    <div class="subcontent" id="who-we-are">
      <h3>Who We Are</h3>

      <p>
        We are the IIT Bombay chapter of the Semiconductor Student Alliance
        (SSA), a student-led organization dedicated to transforming <strong>
          how students engage with semiconductor technology
        </strong>. From organizing workshops with industry leaders to hosting
        collaborative events, we're building a culture where innovation thrives
        and boundaries are pushed.
      </p>
    </div>

    <div class="taglines">
      <div class="tag">
        <h3>Community First</h3>
        <p>
          Building a <strong>collaborative ecosystem</strong> where students inspire
          each other, share knowledge, and work together on cutting-edge projects.
        </p>
      </div>
      <div class="tag">
        <h3>Innovation Driven</h3>
        <p>
          Encouraging creative thinking, <strong>bold problem-solving</strong>,
          and fearless approaches to tackle real-world semiconductor challenges.
        </p>
      </div>
      <div class="tag">
        <h3>Future Ready</h3>
        <p>
          Preparing students to become <strong>industry leaders</strong> through
          hands-on experience, industry connections, and practical learning.
        </p>
      </div>
    </div>

    <div class="programs_wrapper">
      <h2>Our Programs:</h2>
      <div class="programs">
        <div class="program">
          <h3>Industry Connect</h3>
          <ol>
            <li>Company visits</li>
            <li>Talks</li>
            <li>Internships</li>
          </ol>
        </div>
        <div class="program">
          <h3>Winter Courses</h3>
          <ol>
            <li>Fabrication Processes</li>
            <li>Physical Design Flow</li>
          </ol>
        </div>
        <div class="program">
          <h3>Competitions</h3>
          <ol>
            <li>Contests</li>
            <li>Hackathons</li>
            <li>Research Presentations</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: calc(100svh - var(--navbar-height));
    /* background-color: rgb(255, 236, 130); */

    position: relative;
  }

  main div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */

    margin-top: -10%;
  }

  main img {
    height: 15rem;
    width: auto;
    margin-bottom: 1rem;
  }

  #h1_1 {
    font-size: 3rem;
  }

  #h1_2 {
    font-size: 3rem;
  }

  #titles h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: rgb(30, 30, 30);
  }

  #explore_mission {
    background-color: var(--highlight);
    color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: 600;
    margin-top: 2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  #contact {
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    padding: 0.8rem;
    background-color: black;
    color: white;
  }

  #contact a {
    color: var(--highlight);
  }

  .content {
    margin: 3rem auto 5rem auto;
    width: min(90%, 70rem);
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
    /* background-color: gold; */
  }

  .subcontent {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  .subcontent h3 {
    /* width: 15rem; */
    /* background-color: red; */
    /* text-align: right; */
    font-size: 1.9rem;
  }

  .subcontent p {
    width: min(35rem, 100%);
    font-size: 1.1rem;
    /* background-color: blue; */
    text-align: justify;
  }

  .subcontent p,
  .tag,
  .program,
  .content strong {
    font-family: 'Inter', sans-serif;
  }

  .content strong {
    color: var(--highlight);
  }

  .taglines {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 0.8rem;
  }

  .tag {
    flex-grow: 1;
  }

  .programs_wrapper {
    width: 100%;
  }

  .programs {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 0.8rem;
    /* background-color: green; */
  }

  .programs_wrapper h2 {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }

  .program {
    /* background-color: blue; */
    flex-grow: 1;
  }

  @media (max-aspect-ratio: 1) {
    #h1_1 {
      font-size: 5vw;
    }
    #h1_2 {
      font-size: 13vw;
    }

    #titles h2 {
      width: 100%;
      text-align: center;
      margin-top: 1rem;
    }

    #contact {
      width: 100%;
      left: 0%;
      bottom: 0%;
    }
  }
</style>
