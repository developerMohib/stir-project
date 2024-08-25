import BreadCump from '../../components/BreadCump/BreadCump';
import Faq from '../../components/Faq/Faq';
import shapeBg from "../../assets/images/banner-bg-shape.png";
const FaqPage = () => {
    return (
        <div>
            <BreadCump bgImg={shapeBg} pageName={"FAQ"} />
            <Faq/>
        </div>
    );
};

export default FaqPage;