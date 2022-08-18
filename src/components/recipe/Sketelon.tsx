import ContentLoader from "react-content-loader";
import styled from "styled-components";

const RecipeSketelon = () => (
  <MyLoader>
    <ContentLoader
      speed={2}
      width={410}
      height={387}
      viewBox="0 0 410 387"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="84" y="1" rx="0" ry="0" width="250" height="36" />
      <rect x="0" y="71" rx="0" ry="0" width="409" height="80" />
      <rect x="87" y="179" rx="0" ry="0" width="247" height="45" />
      <rect x="7" y="250" rx="0" ry="0" width="400" height="131" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={600}
      height={387}
      viewBox="0 0 600 387"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ borderRadius: "2rem" }}
    >
      <rect x="0" y="0" rx="0" ry="0" width="600" height="387" />
    </ContentLoader>
  </MyLoader>
);

export const MyLoader = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 40px;
  }
`;

export default RecipeSketelon;
