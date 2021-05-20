import styled from "styled-components";
export const Box = styled.div`

box-shadow: 0px 20px 4px #EF2A82;
  padding: 80px 60px;
  padding-top: 40px;
  background: #172755;
  position: bottom;
  bottom: 0;
  width: 100%;
 

/* Inside Auto Layout */
flex: none;
order: 0;
flex-grow: 0;
margin: 10px 0px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vw), 0 100%);
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: absolute;
  max-width: 2000px;
  margin: 0 auto;
  padding-left: 50%;
  /* background: red; */

  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const HeaderLink = styled.a`
  color: #f8f9ff;
  margin-bottom: 100px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ef2a82;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #f8f9ff;
  margin-bottom: 40px;
  font-weight: bold;
`;
