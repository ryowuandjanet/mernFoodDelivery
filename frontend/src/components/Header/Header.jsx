import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>美食學</h2>
        <p>
          食饗是一門探討文化與食物之間的關係的學問，是所有與人類飲食有關的理性知識，目的是藉由精進飲食以及了解飲食，來保持身而為人的價值。食饗常被誤解為專指烹飪的藝術，但其只是美食學中的一個小分支；廚師不一定同時是食饗，而食饗也不一定會烹調。食饗的主軸是鑽研各式各樣文化的飲食。
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
