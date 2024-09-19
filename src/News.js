import axios from "axios";
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

function News(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://newsapi.org/v2/everything?q=${props.category}&language=hi&apiKey=1f4d80d92d3447e5aed6bdbaac6f9be0`
        );
        setData(result.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [props.category]);

  return (
    <div className="container">
      {data.length > 0 ? (
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4" key={item.url}>
              <NewsItem
                title={item.title}
                dec={item.description}
                img={item.urlToImage}
                url={item.url}
              />
            </div>
          ))}
        </div>
      ) : (
        <h4>No Data</h4>
      )}
    </div>
  );
}

export default News;
