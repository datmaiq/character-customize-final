import React from "react";
import ListItem from "./ListItem";

function PartList({ len, keyObj, name, dir, renderAvatar }) {
  const renderItem = (len, dir) => {
    let content = [];
    for (let i = 1; i <= len; i++) {
      content.push(
        <ListItem
          key={i}
          keyObj={keyObj}
          index={i}
          dir={dir}
          width="100px"
          height="100px"
          renderAvatar={renderAvatar}
          name={name}
        />,
      );
    }
    return content;
  };

  return (
    <div>
      <h1 className="title-part-list">{name}</h1>
      <div className="part-list-eyes">{renderItem(len, dir)}</div>
    </div>
  );
}

export default PartList;
