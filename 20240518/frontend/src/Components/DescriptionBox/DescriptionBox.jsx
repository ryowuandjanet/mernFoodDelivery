import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          第16屆正副總統就職典禮後，晚上國宴首度移師台南安平福爾摩沙遊艇酒店舉行，宴請國外祝賀團及外國使節、縣市長等賓客搭高鐵南下，沿途由各分局交通管制至會場。為維護活動交通秩序與安全，明（20）日下午2點起至晚間12點規畫交通疏導管制措施。
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
