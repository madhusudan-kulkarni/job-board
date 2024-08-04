import React from "react";

export const Hero = () => {
  return (
    <section className="my-16 container">
      <h1 className="text-4xl font-bold text-center">Find your dream job</h1>
      {/* <p className="text-center mt-4 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatum, doloremque?
      </p> */}
      <form className="mt-8 flex items-center justify-center gap-2 mx-auto max-w-md">
        <input
          type="search"
          placeholder="Search for jobs"
          className="border border-gray-400 rounded-md px-4 py-2 w-full"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2">
          Search
        </button>
      </form>
    </section>
  );
};
