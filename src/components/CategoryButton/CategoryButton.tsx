import { FC } from "react";

interface ICategoryButton {
  text: string;
  isNew: boolean;
}

export const CategoryButton = ({ text, isNew, img }: ICategoryButton): FC => {
  return (
    <>
      {isNew ? (
        <div className="flex flex-col justify-center items-center mr-4">
          <button
            className="bg-blue-400/20 w-20 h-20 p-2 border-solid rounded-full"
            // onClick={}
          >
            {text}
          </button>
          <span className="font-medium">Добавить</span>
        </div>
      ) : (
        <button className="bg-orange-400 w-20 h-20 p-2 border-solid rounded-full">
          {img ? null : null}
        </button>
      )}
    </>
  );
};
