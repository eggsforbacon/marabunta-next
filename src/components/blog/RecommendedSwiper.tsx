"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Blog} from "@/types/blog";
import RecommendedSlide from "@/components/blog/RecommendedSlide";
import Image from "next/image";
import {Locale} from "@/i18n.config";

export default function RecommendedSwiper({blogs, lang}: { blogs: Blog.Attributes[], lang?: Locale }) {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    draggable: true,
    variableWidth: true,
    className: "",
  };

  return (
      <div className={"relative w-full h-168 overflow-clip cursor-grab active:cursor-grabbing"}>
        <Slider {...settings}>
          {blogs.map((blog, i) => {

            const thumbnail = blog.thumbnail.data.attributes;

            return (
                <RecommendedSlide key={i} {...{
                  excerpt: blog.excerpt,
                  title: blog.title,
                  category: blog.category,
                  slug: blog.slug,
                  lang: blog.locale.split("-")[0] as Locale ?? "es"
                }} >
                  <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${thumbnail.url}`}
                         alt={thumbnail.alternativeText ?? "No alt"} width={thumbnail.width}
                         height={thumbnail.height} quality={100}
                         className={"object-cover w-full h-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"}/>
                </RecommendedSlide>
            );
          })}
        </Slider>
      </div>
  );
}