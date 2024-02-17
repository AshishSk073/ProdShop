"use client"
import { useState } from 'react'
import ImageCarousel from '../ImageCarousel'
import Icon from '../Icon';
import { Heart } from "lucide-react";
import { Button } from '../ui/button';
import StarRating from '../StarRating';
import QuantityCounter from '../QuantityCounter';
import { formatAsCurrency } from '@/utils/common';

function ProductCard({ product }) {
    const [productCount, setProductCount] = useState(1);
    const [wishlisted, setWhishlisted] = useState(false);

    function changeProductCount(key) {
        if (key === 'minus' && productCount > 1) {
            setProductCount(prev => prev - 1);
            return;
        }
        if (key === 'plus' && productCount < 10) {
            setProductCount(prev => prev + 1);
        }
    }

    return (
        <>
            <div className="product_card_container">
                <Button className="product_card_wishlist_btn" onClick={() => setWhishlisted(prev => !prev)}>
                    <Heart fill={`${!wishlisted ? '#fff' : 'red'}`} />
                </Button>
                <ImageCarousel images={product.images} />
                <p className="product_card_brand">{product.brand}</p>
                <div className="overflow-hidden">
                    <h3 className="product_card_title">{product.title}</h3>
                </div>

                <StarRating rating={product.rating} />

                <p className="product_description">
                    {product.description}
                </p>

                <div className='mt-3'>
                    <QuantityCounter onChange={changeProductCount} count={productCount} />
                </div>

                <div className="flex justify-start items-center my-3">
                    <span className="text-sm mr-2">Price:</span>
                    <h3 className="text-xl font-bold">{formatAsCurrency(product.price)}</h3>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <Button className="flex justify-center items-center text-sm mr-3 w-full">
                        <span className='mr-3'>Shop now</span> <Icon name="MoveRight" />
                    </Button>
                    <Button className="bg-lime-200 hover:bg-lime-300 p-3 rounded-lg text-black" >
                        <Icon name="ShoppingBag" className="font-thin" />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductCard