import React from "react";

function ListItem({ name, keyObj, index, dir, width, height, renderAvatar }) {
  return (
    <div className="item-image">
      {" "}
      <img
        // name={name}
        type={name}
        id={index}
        src={`images/${dir}/${index}.png`}
        alt={`hinh-${index}`}
        style={{
          width: `${width}`,
          height: `${height}`,
          cursor: "pointer",
          padding: "10px 0px",
          marginBottom: "-10px",
        }}
        onClick={(e) => renderAvatar(keyObj, e.target.src)}
      />
    </div>
  );
}

export default ListItem;
