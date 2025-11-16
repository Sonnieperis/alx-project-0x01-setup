import React from "react";

type PostCardProps = {
  title?: string;
  excerpt?: string;
};

const PostCard: React.FC<PostCardProps> = ({ title = "Post Title", excerpt = "Short excerpt..." }) => {
  return (
    <article className="border p-4 rounded-md shadow-sm max-w-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{excerpt}</p>
      <div className="mt-4">
        <button className="text-sm text-blue-600 hover:underline">Read more</button>
      </div>
    </article>
  );
};

export default PostCard;
