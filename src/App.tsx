import Footer from "@/components/layout/footer";
import MobileNav from "@/components/layout/mobile-nav";
import Navbar from "@/components/layout/navbar";
import BlogList from "@/components/sections/blog-list";
import CreatorGallery from "@/components/sections/creator-gallery";
import CreatorGalleryList from "@/components/sections/creator-gallery-list";
import HeroLanding from "@/components/sections/hero-landing";
import { blogList, creatorGallery } from "@/constant";

export default function App() {
  return (
    <>
      <MobileNav />
      <Navbar />
      <HeroLanding />
      <section id="gallery" className="w-full pt-12 md:pt-[5rem]">
        <CreatorGallery />
        <CreatorGalleryList data={creatorGallery} />
      </section>
      <BlogList data={blogList} />
      <Footer />
    </>
  );
}
