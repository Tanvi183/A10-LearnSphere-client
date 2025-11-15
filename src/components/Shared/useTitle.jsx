import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `LearnSphere | ${title}`;
  }, [title]);
};

export default useTitle;
