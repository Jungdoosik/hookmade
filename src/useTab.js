import { useState } from "react";
// const content = [
//   {
//     tab: "Section 1",
//     content: "I'm the content of the Section 1",
//   },
//   {
//     tab: "Section 2",
//     content: "I'm the content of the Section 2",
//   }
// ];



export const useTabs = (initialTab, allTabs) => {

  const [currentIndex, setCurrntIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  };
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrntIndex,
  };
};

// const { currentItem, changeItem } = useTabs(0, content);



// { content.map((section, index) => (<button key={index} onClick={() => changeItem(index)}>{section.tab}</button>)) }
// <div>
//   {currentItem.content}
// </div>