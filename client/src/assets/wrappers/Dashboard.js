import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1ref;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (width>=992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
