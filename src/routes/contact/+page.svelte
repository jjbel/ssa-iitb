<!-- https://github.com/levinunnink/html-form-to-google-sheet -->
<!-- https://docs.google.com/spreadsheets/d/1pxmhmqfcAeb1GULHXL4gg9NKT61KUf9W2J9R8oqSKMY/edit?usp=sharing -->

<!--     onSubmit={handleSubmit} -->
<div class="contact_form">
  <form
    method="POST"
    action="https://script.google.com/macros/s/AKfycbxdLkS8IG_Y4q--j1G4Dq9BaNiFvLrVf3M70pBL_0X0m2CyXzBcpVTnxTnibc17IjFY/exec"
  >
    <label>Name (required)</label>
    <input type="text" id="name" name="name" required />

    <label>Email (required)</label>
    <input type="email" id="email" name="email" required />

    <label>Message (required)</label>
    <textarea id="message" name="message" rows="6" required />

    <label>Organization (required)</label>
    <textarea id="organization" name="organization" rows="6" required />

    <button type="submit">Send</button>
  </form>
</div>

<style>
  .contact_form {
    margin: 3rem auto 5rem auto;
    width: min(90%, 40rem);
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  input,
  textarea {
    font-size: 1.2rem;
  }

  button {
    margin-top: 1.5rem;
    padding: 0.8rem;
    background-color: var(--highlight);
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
</style>
