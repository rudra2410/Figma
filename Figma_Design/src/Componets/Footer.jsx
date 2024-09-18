import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg">URBAN OUTFITTERS</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <address className="mt-4 not-italic">
            121 King Street, Melbourne 3000 <br />
            +61 3 8376 6284 <br />
            contact@urbanoutfitters.com
          </address>
        </div>

        <div>
          <h3 className="font-bold text-lg">SHOPPING</h3>
          <ul className="mt-4 space-y-2">
            <li>Your cart</li>
            <li>Your orders</li>
            <li>Compared items</li>
            <li>Wishlist items</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg">FROM THE BLOG</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>26 May</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <strong>27 May</strong>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">
          SIGN UP FOR THE NEWSLETTER
        </h2>
        <div className="flex space-x-4">
          <input
            type="email"
            className="px-4 py-2 border border-gray-400"
            placeholder="Enter your email address"
          />
          <button className="bg-black text-white px-4 py-2">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

const PageFooter = () => {
  return (
    <>
      <Newsletter />
      <Footer />
    </>
  );
};

export default PageFooter;
