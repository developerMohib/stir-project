import BreadCump from "../../components/BreadCump/BreadCump";
import shapeBg from "../../assets/images/banner-bg-shape.png";
import useDataFetch from "../../components/Hooks/useDataFetch";
import Pagination from "../../components/Pagination/Pagination";
const TestominalPage = () => {
  const { data } = useDataFetch({ url: "/testominal.json" });
  console.log('data', data)
  return (
    <div>
      <BreadCump bgImg={shapeBg} pageName={"Testominals"} />
      <div className="testimonials-area-three ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {data?.map((person, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="testimonials-single-item-two style-three bg-style mb-5">
                  <ul className="ps-0 list-unstyled d-flex gap-2 review">
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                    <li>
                      <i className="fa-solid fa-star" />
                    </li>
                  </ul>
                  <p>
                    {person.about}
                  </p>
                  <div className="d-flex align-items-center info">
                    <div className="flex-shrink-0">
                      <img
                        src={person.personImg}
                        className="rounded-circle"
                        alt="testimonial"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h3>{person.name}</h3>
                      <span> {person.proffession} </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default TestominalPage;
