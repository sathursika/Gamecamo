import React from "react";
import Image1 from "../assets/Rectangle 16.png";
import Image2 from "../assets/Rectangle 17.png";
import Image3 from "../assets/Rectangle 18.png";
import Image4 from "../assets/Rectangle 19.png"; 
import Image5 from "../assets/Rectangle 20.png"; 

const reviewsData = [
  {
    text: "The team was incredibly responsive. We’ve been using their services for months and are always impressed with the quality.",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    image: Image1,
  },
  {
    text: "Working with this team has been a game-changer. Their attention to detail and customer support is unparalleled.",
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 4.7,
    image: Image2,
  },
  {
    text: "Fantastic experience! The service was fast and the results exceeded our expectations. We couldn't be happier with the outcome.",
    name: "Olivia Brown",
    location: "New York, USA",
    rating: 4.8,
    image: Image3,
  },
  {
    text: "Amazing service with quick response times! Definitely recommending to my peers.",
    name: "John Doe",
    location: "Berlin, Germany",
    rating: 4.6,
    image: Image4, // New review
  },
  {
    text: "Highly skilled professionals who went above and beyond. Truly exceptional support.",
    name: "Emily White",
    location: "Sydney, Australia",
    rating: 4.9,
    image: Image5, // New review
  }, 
];

const Reviews = () => {
  return (
    <div className="bg-black py-10" style={{ marginTop: '70px' }}>
      <div className="w-full text-center mb-10">
        <p className="w-[447.81px] text-[35px] font-medium text-center text-[#e87d0e]  mx-auto">
          Trusted by Thousands of Happy Customers
        </p>
        <p className="w-[555px] text-sm text-center text-white mx-auto mb-4">
          Our customers are the heart of everything we do. We strive to provide
          exceptional service, and their feedback is a testament to our commitment
          to excellence.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {reviewsData.map((review, index) => (
          <div key={index} className="w-[400px] h-[220px] bg-[#0f0901] rounded-[10px] border-2 border-[#dc7000] relative">
            <p className="w-[340px] h-[100px] text text-left text-white p-4">
              "{review.text}"
            </p>
            <div className="absolute bottom-6 left-6">
              <img
                className="w-[40px] h-[40px] rounded-full"
                src={review.image} // Directly use the imported image
                alt="User"
              />
              <p className="text-lg font-medium text-white mt-2">{review.name}</p>
              <p className="text-sm text-[#4f5665]">{review.location}</p>
            </div>
            <div className="absolute bottom-6 right-6 flex items-center">
              <p className="text-base text-white mr-2">{review.rating}</p>
              <svg
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M14.1891 6.16509L10.2219 5.58853L8.44844 1.99322C8.4 1.89478 8.32031 1.81509 8.22187 1.76666C7.975 1.64478 7.675 1.74634 7.55156 1.99322L5.77812 5.58853L1.81094 6.16509C1.70156 6.18072 1.60156 6.23228 1.525 6.31041C1.43244 6.40554 1.38143 6.53353 1.38319 6.66625C1.38495 6.79897 1.43933 6.92557 1.53437 7.01822L4.40469 9.81666L3.72656 13.7682C3.71066 13.8601 3.72083 13.9547 3.75592 14.0411C3.79102 14.1276 3.84963 14.2024 3.92511 14.2572C4.00059 14.3121 4.08992 14.3446 4.18297 14.3513C4.27602 14.3579 4.36907 14.3383 4.45156 14.2948L8 12.4292L11.5484 14.2948C11.6453 14.3463 11.7578 14.3635 11.8656 14.3448C12.1375 14.2979 12.3203 14.0401 12.2734 13.7682L11.5953 9.81666L14.4656 7.01822C14.5437 6.94166 14.5953 6.84166 14.6109 6.73228C14.6531 6.45884 14.4625 6.20572 14.1891 6.16509Z"
                  fill="#FEA250"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
