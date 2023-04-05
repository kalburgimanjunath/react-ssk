import React, { useState } from 'react';
import { CONTENT } from '../data/data';
export default function StaticPage({ content, title }) {
  const [newcontent, setContent] = useState();
  const [banner, setBanner] = useState();
  const GETCONTENT = ({ title }) => {
    const filterContent = CONTENT.filter((item) => {
      return item.title == title;
    });
    setContent(filterContent[0].content);
    setBanner(filterContent[0].banner);
    return <div>{newcontent}</div>;
  };
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <img src={banner} width="100%" height="200" />
      </div>
      <div>{content}</div>
      {title == 'products' ? (
        <div>
          <GETCONTENT title="products" />
        </div>
      ) : (
        ''
      )}
      {title == 'services' ? (
        <div>
          <GETCONTENT title="services" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
