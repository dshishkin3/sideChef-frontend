import React from "react";
import ContentLoader from "react-content-loader";

const VeganSkeleton = () => (
  <ContentLoader
    speed={2}
    width={336}
    height={240}
    viewBox="0 0 336 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ borderRadius: "2rem", marginRight: "20px" }}
  >
    <rect x="0" y="-19" rx="0" ry="0" width="336" height="337" />
  </ContentLoader>
);

export default VeganSkeleton;
