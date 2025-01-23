import { useSearchParams } from "react-router";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortParams = (sortValue: string) => {
    searchParams.set("sort", sortValue);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <h1>Product List Page</h1>
      <ul>
        <li>Sort: {searchParams.get("sort")}</li>
        <li>Name: {searchParams.get("name")}</li>
      </ul>
      <button onClick={() => handleSortParams("price-dsc")}>
        Sort by price dsc
      </button>
      <button onClick={() => handleSortParams("price-asc")}>
        Sort by price asc
      </button>
      <button onClick={() => handleSortParams("most-popular")}>
        Sort by most popular
      </button>
    </div>
  );
};

export default ProductListPage;
