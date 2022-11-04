import React from 'react';

export default function NewsList({ news }) {
  const render = news.map(item => {
    const newsTitle = item.title;
    const newsUrl = item.url;

    return (
      <div>
        <a className="title" key={item.id} href={newsUrl}>
          {newsTitle}
        </a>
      </div>
    );
  });

  return <div>{render}</div>;
}
