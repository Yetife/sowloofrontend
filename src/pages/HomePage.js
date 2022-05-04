import React from 'react'
import Categories from '../components/HomePage/category/Categories'
import Companies from '../components/HomePage/Companies'
import SearchCourse from '../components/HomePage/search/SearchCourse'
import Learning from '../components/HomePage/Learning'
import FeaturedContent from '../components/HomePage/FeaturedContent'
import Info from '../components/HomePage/info/Info'
import Testimonials from "../components/HomePage/testimonial/Testimonials";
import PopularContent from "../components/HomePage/PopularContents/PopularContent";
import DreamBusiness from "../components/HomePage/DreamBusiness";
import Cat1 from "../components/HomePage/category/Cat1";
import Banner from "../components/HomePage/banner/Banner";
import FeaturedCamp from "../components/HomePage/PopularContents/FeaturedCamp";
import Learning1 from "../components/HomePage/Learning1";

const HomePage = () => {
  return (
      <div>
        <Banner/>
      {/*<SearchCourse />*/}
      <Companies />

      {/*<Categories />*/}
        <Cat1/>
      {/*<PopularContent />*/}
          <FeaturedCamp/>
      <Learning1 />
      {/*<FeaturedContent />*/}
      {/*<DreamBusiness />*/}
      {/*<Testimonials />*/}
      {/*<Info />*/}
    </div>
  )
}

export default HomePage