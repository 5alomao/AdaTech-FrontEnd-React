import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

import axios from "axios";

import "./styles/App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

export function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/?limit=6"
      );
      const newsData = response.data.results;
      setNews(newsData);
    }
    loadNews();
  }, []);

  return (
    // * Fragment - Evitar tag desnecessária para agrupamento de tags no retorno
    <>
      <Navbar />

      {/* TODO - LOADER */}

      <section id="articles">
        {news.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "400px",
              width: "100%",
            }}
          >
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="gray"
              ariaLabel="loading"
            />
          </div>
        ) : (
          news.map((article) => {
            return (
              <Article
                key={article.id}
                title={article.title}
                provider={article.news_site}
                description={article.summary}
                thumbnail={article.image_url}
                url={article.url}
              />
            );
          })
        )}
      </section>
    </>
  );
}
