import { skincareProducts } from "./content.module";

interface IProps {}

const Content = ({}: IProps) => {
  return (
<div className="grid grid-cols-3   md:grid-cols-8 gap-4">
      {skincareProducts.map((product) => (
        <div key={product.category}>
      <p className="font-bold">{product.category}</p>
      <div className="flex flex-col">
{
    product.subcategories.map((subcategory) => (
      <p key={subcategory}>{subcategory}</p>
    ))
}
      </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
