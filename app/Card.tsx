import React from "react";

const Card = () => {
  return (
    <div className="relative bg-teal-500 max-w-md p-5 h-52 rounded-lg">
      <h3 className="truncate font-bold text-xl mb-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consequatur
        esse exercitationem aperiam minus laboriosam ipsum illo. Sunt sint amet,
        eos dolor numquam, repudiandae accusamus ad pariatur perspiciatis illum
        et!
      </h3>
      <p className="line-clamp-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id
        reprehenderit quas ipsum quasi odit officia at repellendus fugit,
        suscipit ab odio labore aliquam eum similique laudantium inventore
        repudiandae non. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Dolorem id reprehenderit quas ipsum quasi odit officia at
        repellendus fugit, suscipit ab odio labore aliquam eum similique
        laudantium inventore repudiandae non.
      </p>
      <p className="absolute bottom-5">20th Jan, 2023</p>
    </div>
  );
};

export default Card;
