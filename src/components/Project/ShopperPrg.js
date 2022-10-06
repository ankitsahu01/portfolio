import Sample from "../../assets/sample.png";

const ShopperPrg = () => {
  return (
    <>
      <img src={Sample} alt="Shopper prject pic" />
      <div className="col-span-2 p-2 mb-10 md:mb-0">
        <h2 className="text-5xl highlight mb-2">Shopper</h2>
        <p>
          It's an Ecommerce website, after learning the concept of core php and
          mysql, I made this website as a personal project. In this project,
          Admin will upload the products and user can buy those products by
          choosing either COD or Prepaid method. It integerated with Paytm
          payment gateway.
        </p>
        <p className="mt-3">
          Built using: HTML, CSS, JavaScript, Php, and MySql.
        </p>
        <div className="mt-4 flex gap-4 flex-col md:flex-row text-left text-xl font-medium text-blue-500 underline underline-offset-2">
          <a
            href="https://talkgram.herokuapp.com/"
            target="_blank"
            className="hover:text-blue-600"
          >
            [ visit: talkgram.herokuapp.com ]
          </a>
          <a
            href="https://github.com/ankitsahu01/talkgram"
            target="_blank"
            className="hover:text-blue-600"
          >
            [ Github Code ]
          </a>
        </div>
      </div>
    </>
  );
};

export default ShopperPrg;
