import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCard from "./components/NewsCard";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  function handleVoiceRecognition(command, articles) {
    if (command === "newHeadlines") {
      setNewsArticles(articles);
    }
  }

  useEffect(() => {
    alanBtn({
      key: "",
      onCommand: ({ command, articles }) =>
        handleVoiceRecognition(command, articles),
    });
  }, []);

  return (
    <div>
      <h1>ALAN AI NEWS APPLICATION</h1>
      <NewsCard articles={newsArticles} />
    </div>
  );
};

export default App;
