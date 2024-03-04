import React from "react";

function Avatar({ avatar, randomAvatar }) {
  const renderItem = (data = {}) => {
    let content = [];
    for (let i in data) {
      content.push(
        <img
          key={i}
          src={data[i].dir}
          alt={`hinh-${i}`}
          style={data[i].style}
        />,
      );
    }
    return content;
  };

  return (
    <div
      className="wrap-avatar"
      style={{ display: "flex", position: "relative" }}
    >
      <div className="avatar" style={{ position: "fixed" }}>
        {renderItem(avatar)}
      </div>

      <button className="button-random" onClick={() => randomAvatar()}>
        RANDOMIZE
      </button>
    </div>
  );
}

export default Avatar;
