import KnowUs from "../../../components/KnowUs/KnowUs";
import RecentCase from "../../../components/RecentCase/RecentCase";
import Subscription from "../../../components/Subscription/Subscription";
import UpdateBlog from "../../../components/UpdateBlog/UpdateBlog";
import GetTouch from "../../../components/GetTouch/GetTouch";
import Testominaltwo from "../../../components/Testominaltwo/Testominaltwo";
import Statictics from "../../../components/Statictics/Statictics";
import TeamTwo from "../../../components/TeamTwo/TeamTwo";
import BannerTwo from "../../../components/BannerTwo/BannerTwo";
import ServicesTwo from "../../../components/ServicesTwo/ServicesTwo";

const HomeTwo = () => {
    return (
        <div className="business-agency-body">
            <BannerTwo />
            <KnowUs />
            <ServicesTwo />
            <Statictics />
            <RecentCase />
            <GetTouch />
            <TeamTwo />
            <Testominaltwo />
            <UpdateBlog />
            <Subscription />
        </div>
    );
};

export default HomeTwo;