import React from "react";

// 파라미터 유무
// 파라미터가 있다면 ()=>{}를 사용
// 파라미터가 없다면 그냥 호출

const SNav = () => {
  const onMouseHoverHandle = () => {
    console.log("mouse Over");
  };
  const onMousOutHandle = () => {
    console.log("mouse Out");
  };
  return (
    <nav className="lnb">
      <ul>
        <li>
          <a
            href="#"
            onMouseOver={() => {
              console.log("마우스 오버");
            }}
            onMouseOut={() => {
              console.log("마우스 아웃");
            }}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#"
            onMouseOver={onMouseHoverHandle}
            onMouseOut={onMousOutHandle}
          >
            HTML
          </a>
        </li>
        <li>
          <a href="#">CSS</a>
        </li>
        <li>
          <a href="#">JAVASCRIPT</a>
        </li>
        <li>
          <a href="#">jQuery</a>
        </li>
        <li>
          <a href="#">nodejs</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </ul>
    </nav>
  );
};

export default SNav;
