"use client";
import React, { useMemo } from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
import SingleBlog from "@/components/Instagram/SingleBlog";
import blogData from "../../../utils/Blogs/BlogData";
import { usePathname } from "next/navigation";


export default function page() {

  const pathname = usePathname();

  const id = useMemo(() => {
   const parts = pathname.split("/").filter(Boolean);
   return Number(parts[parts.length - 1]);
 }, [pathname]);
 
  const blog = blogData.find((post) => post.id === id);

  console.log(id);
  if (!blog) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <Navbar />
       <SingleBlog blog={blog}/>
      <Footer />
    </>
  );
}
