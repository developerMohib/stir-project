import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
// import useDataFetch from "../../../../components/Hooks/useDataFetch";

const Services = () => {
  // const { data } = useDataFetch({ url: "/services.json" });

  const items = [
    { id: 1, content: "1" },
    { id: 2, content: "2" },
    { id: 3, content: "3" },
    { id: 4, content: "4" },
    { id: 5, content: "5" },
    { id: 6, content: "6" },
    { id: 7, content: "7" },
    { id: 8, content: "8" },
    { id: 9, content: "9" },
    { id: 10, content: "10" },
    { id: 11, content: "11" },
    { id: 12, content: "12" },
  ];
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div className="owl-carousel owl-theme">
      <div>
        <h1> here likah</h1>
      </div>
      <OwlCarousel {...options}>
        {items.map((item) => (
          <div className="item" key={item.id}>
            <h4>{item.content}</h4>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Services;
