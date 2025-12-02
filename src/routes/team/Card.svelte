<script>
  const props = $props();
  const member = props.member;
</script>

<div class="card">
  <h3>{member.role}</h3>
  <img src={`/team-pics/${member.name}.jpg`} alt="" />
  {member.name}
  {member.dept}
  <a href={member.link}>Link</a>
</div>

<style>
  .card {
    width: 12rem;
    display: flex;
    flex-direction: column;
    /* background-color: gray; */
  }

  img {
    width: 100%;
    height: 8rem;
    object-fit: contain;
    object-position: left center;
  }
</style>
