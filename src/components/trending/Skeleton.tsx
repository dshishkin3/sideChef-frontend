import ContentLoader from "react-content-loader";

const TrendSkeleton = () => (
  <ContentLoader
    speed={2}
    width={240}
    height={245}
    viewBox="0 0 240 245"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ borderRadius: "2rem", marginRight: "50px" }}
  >
    <rect x="0" y="-7" rx="0" ry="0" width="240" height="256" />
  </ContentLoader>
);

export default TrendSkeleton;
