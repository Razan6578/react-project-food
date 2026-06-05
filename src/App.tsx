import './App.css'
import CategoryCard from './features/mainPage/components/CategoryCard'
import BlogCard from './features/mainPage/components/BlogCard'
import PromoBlock from './features/mainPage/components/PromoBlock'
import BasePageLayout from './shared/layouts/BasePageLayout'
import MainProductCard from './features/mainPage/components/MainProductCard'

function App() {
  

  return (
    <>
      <BasePageLayout>
        <CategoryCard id={0} name={'FFFFF'} image={'https://placehold.net/400x400.png'} count={2} />
        <BlogCard id={0} title={'FFFFF'} image={'https://placehold.net/400x400.png'} text={'FFFFF'} />
        <PromoBlock />
        <MainProductCard id={0} categoryId={0} categoryName={'product'} name={'apple'} image={'https://placehold.net/400x400.png'} rating={2} originalPrice={70} discountPrice={10}></MainProductCard>
      </BasePageLayout>
    </>
  )
}

export default App
