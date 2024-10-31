import React from 'react'
import BannerCategories from './BannerCategories'
import HomeBanner from './HomeBanner'
import Highlights from './Highlights'
import Categories from './Categories'
import Productlist from './ProductList'
import DiscountedBanner from './DiscountedBanner'

const Index = () => {
    return (
        <main>
          <BannerCategories />
          <HomeBanner />
          <Highlights />
          <Categories />
          <Productlist />
          <DiscountedBanner />
        </main>
      )
}

export default Index