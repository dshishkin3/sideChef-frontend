import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const CuisinesSkeleton = () => (
  <Skeleton
    speed={2}
    width={336}
    height={240}
    viewBox="0 0 336 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ borderRadius: "2rem", marginRight: "10px", marginBottom: "20px" }}
  >
    <rect x="0" y="-19" rx="0" ry="0" width="336" height="337" />
  </Skeleton>
);

export default CuisinesSkeleton;

const Skeleton = styled(ContentLoader)`
  @media (max-width: 500px) {
    width: 160px;
    height: 116px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 400px) {
    width: 120px;
    height: 116px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
