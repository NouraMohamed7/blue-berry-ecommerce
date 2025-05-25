import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => {
let arr =Array(10).fill(0)

return (
  <div className="row">
    <div className="col-lg-6">
      {arr.map((_, index) => (
        <ContentLoader
        key={index}
          speed={2}
          width={300}
          height={300}
          viewBox="0 0 300 300"
          backgroundColor="#e0e0e0"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="26" y="-10" rx="14" ry="14" width="180" height="203" />
          <rect x="27" y="228" rx="2" ry="2" width="140" height="10" />
          <rect x="29" y="202" rx="2" ry="2" width="66" height="12" />
          <rect x="145" y="251" rx="2" ry="2" width="50" height="12" />
          <rect x="140" y="198" rx="2" ry="2" width="56" height="12" />
          <rect x="28" y="251" rx="2" ry="2" width="66" height="12" />
          <rect x="28" y="278" rx="2" ry="2" width="50" height="12" />
          <rect x="85" y="278" rx="2" ry="2" width="28" height="12" />
        </ContentLoader>
      ))}
    </div>
  </div>
);


}
;

export default MyLoader;
