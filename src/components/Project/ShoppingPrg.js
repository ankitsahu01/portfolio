import ShoppingImg from "../../assets/project-shopping.png";

const ShoppingPrg = () => {
  return (
    <>
      <img src={ShoppingImg} alt="Shopping prject pic" className="sm:w-3/4 md:w-full" />
      <div className="col-span-2 p-2 mb-24 md:mb-0">
        <h2 className="text-4xl md:text-5xl highlight mb-2">Shopping</h2>
        <p>
          It's an Ecommerce website, after learning the concept of core php and
          mysql, I made this website as a personal project. In this project,
          Admin will upload the products and user can buy those products by
          choosing either COD or Prepaid method. It integerated with Paytm
          payment gateway.
        </p>
        <p className="mt-3 font-normal">
          Built using: HTML, CSS, JavaScript, Php, and MySql.
        </p>
        <div className="mt-4 flex gap-4 flex-col md:flex-row text-left text-xl font-medium text-blue-500 underline underline-offset-2">
          <a
            href="https://shopping.cf/"
            target="_blank"
            className="hover:text-blue-600"
          >
            [ visit: www.shopping.cf ]
          </a>
        </div>
      </div>
    </>
  );
};

export default ShoppingPrg;
