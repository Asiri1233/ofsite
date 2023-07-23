"use client";
import { useState, useEffect } from "react";
import Search from "@/components/Search";
import CardComponent from "@/components/Card";
import React from "react";
import axios from "axios";
import Banners from "@/components/Banners";
import LoadingCard from "@/components/LoadingCard";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const page = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://tidy-mercurial-bolt.glitch.me/api/v1/girls")
      .then((res) => {
        const shuffledCard = shuffleArray(res.data);
        setCard(shuffledCard);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <div className="w-full flex mx-auto mt-[2rem] justify-center">
        <div className="flex gap-2 flex-col md:flex-row items-center ">
          <Banners
            url="https://media.discordapp.net/attachments/1106796662170591353/1126278593023049789/image.png"
            link="https://pixelmp.store"
          />
          <Banners
            url="https://i.imgur.com/gyoAm7J.jpeg"
            link="https://pixelmp.store"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-10">
        <Search />
      </div>
      <div className="mt-12">
        <p className="text-center md:text-2xl text-1xl xl:text-3xl text-gradient font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          Find Your Favorite Models
        </p>
      </div>
      <div className="container mx-auto ">
      <div className="flex  items-center mb-5   flex-col justify-center mt-10 ">
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 lg:grid-rows- md:grid-cols-2 z-10 ">
        {card.length === 0  ? (
          <div className="flex md:flex-row flex-col gap-12 w-[100%]"><LoadingCard /><LoadingCard /><LoadingCard /><LoadingCard /></div>
        ) : (
        card.map((girl) => (
          <div key={girl._id}>
            <CardComponent
              key={girl._id}
              name={girl.name}
              megaLink={girl.megaLink}
              girlPhoto={girl.girlPhoto}
            />

          </div>
        )))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default page;
