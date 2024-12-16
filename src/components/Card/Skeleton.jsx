import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1}
    width={250}
    height={300}
    viewBox="0 0 250 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="67" y="302" rx="0" ry="0" width="250" height="96" /> 
    <rect x="84" y="130" rx="0" ry="0" width="0" height="1" /> 
    <rect x="6" y="5" rx="20" ry="20" width="238" height="288" />
  </ContentLoader>
)

export default Skeleton