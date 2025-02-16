function Card({ item = [] }) {  // Default to empty array
  return (
    <div>
            <img
              src={item.image}
              alt={item.title}
              onError={(e) => (e.target.src = 'path/to/fallback-image.jpg')}
              className="w-full h-[160px] object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-black">{item.title}</h3>
            <p className="text-xl text-black font-semibold">Category: {item.category}</p>
            <div className="flex gap-8">
              <p className="text-lg font-semibold text-green-600 mt-2">${item.price}</p>
              <button
                className="h-[40px] w-[120px] px-4 text-xl rounded-lg shadow-lg border bg-yellow-800 hover:bg-pink-500 cursor-pointer text-center"
                onClick={() => handleBuyNow(book.id)}
              >
                Buy Now
              </button>
            </div>
          
        
      
    </div>
  );
}

export default Card;