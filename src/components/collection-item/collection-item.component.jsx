import React from "react";
import './collection-item.styles.scss';

// We know we need certain things to come in to populate our menu item, but no state. So we use a functional component.

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>

        </div>
    </div>
)

export default CollectionItem;