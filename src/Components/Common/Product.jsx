import React from 'react'

export default function Product() {
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="product_item m-1">
                <article>
                    <div className="image_of_product">
                        <img src="https://cdn.dribbble.com/users/4621020/avatars/small/1104a4d41eb38e78254495cee006e059.jpg?1642002540" alt="product" />
                    </div>
                    <div className="info_of_product">
                        <p>Title of Product</p>
                        <h6>Price: $100</h6>
                    </div>
                    <div className="action_product_to">
                        <button className="w-100 btn btn-success shadow-none">
                            Add to cart
                        </button>
                    </div>
                </article>
            </div>
        </div>
    )
}
