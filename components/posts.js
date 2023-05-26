import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footerbutton from './social/footerbutton';
export default function Posts({ posts, count }) {
  const PostItem = ({ item }) => {
    return (
      <div className="lists-item post">
        <>
          <Link href={`../posts/${item.id}`}>
            {/* <div>{item.author}</div> */}
            <div>
              <Image
                loader={() => item.url}
                src={item.url}
                width="200"
                height="200"
                alt=""
                style={{ width: '100%' }}
              />
            </div>

            <h4
              style={{ padding: '20px 0 0px 0', textTransform: 'capitalize' }}
            >
              {item.title}
            </h4>
            <div>
              {item.description.length > 256
                ? item.description.substring(1, 256) + '...more'
                : item.description}
            </div>

            {/* <div>
              <h6>Published at {item.created_at}</h6>
            </div> */}
          </Link>
          <Footerbutton item={item} />
        </>
      </div>
    );
  };
  return (
    <div className="lists posts" style={{ display: 'flex' }}>
      {posts &&
        posts.map((item, index) => {
          return (
            <>
              <PostItem key={index} item={item} />
            </>
          );
        })}
    </div>
  );
}
