import React from "react";
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        {/* Standalone one-tag div */}
        <div className="background-image" style={{
        // Use JS template string to dynamically set a style rule on an HTML element
        backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)


export default MenuItem;