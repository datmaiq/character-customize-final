import React from "react";

function ListItem({
  name,
  index,
  dir,
  width,
  height,
  printEvent,
  renderAvatar,
}) {
  return (
    <div className="item-image">
      {" "}
      <img
        // name={name}
        type={name}
        id={index}
        src={`images/${dir}/${index}.png`}
        alt={`hinh-${index}`}
        style={{ width: `${width}`, height: `${height}` }}
        renderAvatar={renderAvatar}
        printEvent={printEvent}
        onClick={(e) => renderAvatar(name, index)}
      />
    </div>
  );
}

export default ListItem;
