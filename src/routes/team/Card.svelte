<script>
  const props = $props();
  const member = props.member;
  import { base } from '$app/paths';
</script>

<div class="card">
  <h3>{member.role}</h3>
  <img src={`${base}/team-pics/${member.img}.jpg`} alt="" />
  <h4>{member.name}</h4>
  <h4>{member.dept}</h4>
  <a href={member.link}>Link</a>
</div>

<style>
  .card {   
    width: 12rem;
    display: flex;
    flex-direction: column;
    /* background-color: gray; */
    border-top: 0.2rem solid black;
  }

  img {
    width: 100%;
    height: 8rem;
    object-fit: contain;
    object-position: left center;
  }

  h4 {
     font-weight: 400;
  }
</style>
