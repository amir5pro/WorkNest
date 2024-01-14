import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .work_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }
  .workWord {
    color: var(--primary-500);
    font-weight: 900;
    font-family: "Iceberg", sans-serif;
  }
  .logo {
    width: 50px;
    height: 50px;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
export default Wrapper;
