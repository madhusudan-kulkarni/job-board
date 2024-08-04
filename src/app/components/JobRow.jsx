import React from "react";
import { LuStar } from "react-icons/lu";

export default function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow-sm relative">
        <div className="absolute top-4 right-4 cursor-pointer">
          <LuStar className="text-gray-500 size-5" />
        </div>
        <div className="flex gap-4 grow">
          <div className="content-center">
            <img
              className="size-12"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/768px-Spotify_icon.svg.png?20220821125323"
              alt="meta"
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div className="text-gray-500 text-sm">Spotify</div>
              <div className="font-bold mb-1 text-lg">Frontend Developer</div>
              <div className="text-gray-400 text-sm">
                Remote &middot; Austin, US &middot; Full-time
              </div>
            </div>

            <div className="content-end text-gray-500 text-sm">2 days ago</div>
          </div>
        </div>
      </div>
    </>
  );
}
