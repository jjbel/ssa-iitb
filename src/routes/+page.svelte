<svelte:head>
  <title>Semiconductor Student Alliance</title>
  <meta
    name="description"
    content="Empowering students to shape the future of semiconductor technology"
  />
</svelte:head>

<div class="container">
  <main>
    <h1>Semiconductor Student Alliance - IITB Chapter</h1>
    <h2>Empowering students to shape the future of semiconductor technology</h2>
  </main>

  <div class="content">
    <div class="subcontent" id="mission">
      <h3>Our Mission</h3>

      <p>
        To reimagine semiconductor education at IIT Bombay, creating a community
        where students lead innovation and shape the future of this vital
        technology.
      </p>
    </div>

    <div class="subcontent" id="who-we-are">
      <h3>Who We Are</h3>

      <p>
        We are the IIT Bombay chapter of the Semiconductor Student Alliance
        (SSA), a student-led organization dedicated to transforming how students
        engage with semiconductor technology. From organizing workshops with
        industry leaders to hosting collaborative events, we're building a
        culture where innovation thrives and boundaries are pushed.
      </p>
    </div>

    <div class="taglines">
      <div class="tag">
        <h3>Community First</h3>
        <p>
          Building a collaborative ecosystem where students inspire each other,
          share knowledge, and work together on cutting-edge projects.
        </p>
      </div>
      <div class="tag">
        <h3>Innovation Driven</h3>
        <p>
          Encouraging creative thinking, bold problem-solving, and fearless
          approaches to tackle real-world semiconductor challenges.
        </p>
      </div>
      <div class="tag">
        <h3>Future Ready</h3>
        <p>
          Preparing students to become industry leaders through hands-on
          experience, industry connections, and practical learning.
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
            <li>hackathons</li>
            <li>research presentations</li>
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
  }

  main h1 {
    font-size: 3rem;
    margin-top: 4rem;
  }

  main h2 {
    font-size: 1.5rem;
    margin: 0.8rem 0rem 4rem 0rem;
    font-weight: 400;
  }

  .content {
    margin: 0 15rem 5rem 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
    /* background-color: gold; */
  }

  .subcontent {
    display: flex;
    gap: 0.8rem;
  }

  .subcontent h3 {
    width: 15rem;
    /* background-color: red; */
    text-align: right;
    font-size: 1.5rem;
  }

  .subcontent p {
    width: 35rem;
    font-size: 1.1rem;
    /* background-color: blue; */
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
</style>
