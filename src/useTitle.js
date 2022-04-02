import { useEffect, useState } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
}

// const titleUpdate = useTitle("Loading...");
// setTimeout(() => titleUpdate("Home"), 5000);