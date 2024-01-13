import { skincareProducts } from "./content.module";

type ICat = {
  name: string;
  items: string[];
};
interface IProps {
  subCategory: ICat[];
}

const Content = ({ subCategory }: IProps) => {
  return (
    <div className="flex gap-16  ">
      {subCategory.map((category) => (
        <div key={category.name} className="flex  flex-col  gap-4  ">
          <p className="  text-lg font-bold">{category.name}</p>
          <div className="flex flex-col gap-2">
            {category.items.map((item) => (
              <p key={item} className="  ">
                {item}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
