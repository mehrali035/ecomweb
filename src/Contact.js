import styled from "styled-components";

const Contact = () => {


  return <Wrapper>
    <h2 className="common-heading">Contact</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.450600156909!2d6.766473615829363!3d51.43151817962274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8bf13b2197cbb%3A0x4e166e8f41658f0e!2sSATURN!5e0!3m2!1sen!2sde!4v1675208775435!5m2!1sen!2sde"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>


    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/moqzjkoq" method="post" className="contact-inputs">

          <input type="text" placeholder="Enter your name" name="username" required autoComplete="off" />
          <input type="eami" placeholder="Enter your email" name="email" required autoComplete="off" />
          <textarea name="Message" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
          <input type="submit" value="send" />

        </form>
      </div>
    </div>


  </Wrapper>;




};

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact;
