import Link from 'next/link';
import React from 'react';
export default function JobMenu() {
  const MenuItems = () => {
    const items = ['find jobs', 'featured', 'how it works', 'post jobs'];
    return items.map((item, index) => {
      return (
        <div className="list-item" key={index}>
          <Link href={`/${item}`}>{item}</Link>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="lists navbar-top">
        <MenuItems />
        <div className="list-item">
          <Link href="/jobs/getstarted">Get started</Link>
        </div>
      </div>
      <div className="menu-banner">
        <div className="banner-text">
          <h3 style={{ position: 'absolute' }}>
            Find your dream job now its super easy
          </h3>
        </div>
        <img
          src="https://images.pexels.com/photos/935743/pexels-photo-935743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={800}
        />
      </div>
    </div>
  );
}
