import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <PostCard title="First Post" excerpt="This is the first post excerpt." />
        <PostCard title="Second Post" excerpt="A short summary of the second post." />
        <PostCard title="Third Post" excerpt="A short description for post three." />
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;
