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

const HomePage = () => {
  return (
    <div>
      <SearchCourse />
      <Companies />
      <Categories />
      <PopularContent />
      <Learning />
      <FeaturedContent />
      <DreamBusiness />
      <Testimonials />
      <Info />
    </div>
  )
}

export default HomePage