import Testominal from "../../../components/Testominal/Testominal";
import Aboutus from "./Aboutus/Aboutus";
import Banner from "./Banner/Banner";
import BlogMarque from "./BlogMarque/BlogMarque";
import EmpowerVdo from "./EmpowerVdo/EmpowerVdo";
import News from "./News/News";
import Services from "./Services/Services";
import Team from "./Team/Team";

const HomeThree = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Aboutus />
      <BlogMarque />
      <Team />
      <EmpowerVdo />
      <Testominal />
      <News />
    </div>
  );
};

export default HomeThree;
