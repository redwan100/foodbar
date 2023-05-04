import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { FaCalendar, FaCalendarAlt, FaComment } from "react-icons/fa";

// ========= posts data =========
const posts = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/4552047/pexels-photo-4552047.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Top 20 rustic fruit pie recipes",
    desc: "One of my favorite recipe items is avocado. Avocado is a versatile and healthy ingredient that can be used in a variety of dishes, from salads and sandwiches to smoothies and dips. It is a good source of healthy fats, fiber, and vitamins, and it adds a creamy texture and rich flavor to any dish.",
    date: "march 13, 2023",
    comment: 351,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/6287250/pexels-photo-6287250.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Make your own healthy and delicious jams",
    desc: `Another great way to use avocado is to make avocado toast. Simply toast some bread, mash some ripe avocados, and spread the avocado on the toast. You can add some salt, pepper, and lemon juice for added flavor, and top it with`,
    date: "january 13, 2023",
    comment: 412,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/7474291/pexels-photo-7474291.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Top 20 rustic fruit pie recipes",
    desc: "One of my favorite recipe items is avocado. Avocado is a versatile and healthy ingredient that can be used in a variety of dishes, from salads and sandwiches to smoothies and dips. It is a good source of healthy fats, fiber, and vitamins, and it adds a creamy texture and rich flavor to any dish.",
    date: "December 13, 2022",
    comment: 689,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/4940755/pexels-photo-4940755.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Host a feast in your backyard",
    desc: "One of my favorite recipe items is avocado. Avocado is a versatile and healthy ingredient that can be used in a variety of dishes, from salads and sandwiches to smoothies and dips. It is a good source of healthy fats, fiber, and vitamins, and it adds a creamy texture and rich flavor to any dish.",
    date: "December 13, 2022",
    comment: 220,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/4040695/pexels-photo-4040695.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Host a feast in your backyard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odio iste, ipsum provident ullam aliquid animi voluptas corporis, quos natus",
    date: "December 13, 2022",
    comment: 120,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/7525161/pexels-photo-7525161.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Host a feast in your backyard",
    desc: "One of my favorite recipe items is avocado. Avocado is a versatile and healthy ingredient that can be used in a variety of dishes, from salads and sandwiches to smoothies and dips. It is a good source of healthy fats, fiber, and vitamins, and it adds a creamy texture and rich flavor to any dish.",
    date: "December 13, 2022",
    comment: 620,
  },
];
const LatestPost = () => {
  return (
    <div className="section">
      <div className="my-8">
        <SectionTitle title={"Latest Posts"} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={post.img} alt="recipe" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <hr />

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt opacity={0.7} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaComment opacity={0.7} />
                  <span>{post.comment}</span>
                </div>
              </div>
              <hr />

              <p>{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
