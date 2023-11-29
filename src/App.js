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
      key: "203e74e0cf912425b7dde740b36b0c502e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) =>
        handleVoiceRecognition(command, articles),
    });
  }, []);

  return (
    <div>
      <h1>NEW YORK TIMES</h1>
      <NewsCard articles={newsArticles} />
    </div>
  );
};

export default App;
