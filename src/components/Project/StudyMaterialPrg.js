import StudymaterialImg from "../../assets/project-studymaterial.png";

const StudyMaterialPrg = () => {
  return (
    <>
      <img src={StudymaterialImg} alt="Study Material prject pic" className="sm:w-3/4 md:w-full" />
      <div className="col-span-2 p-2 mb-24 md:mb-0">
        <h2 className="text-4xl md:text-5xl highlight mb-2">Study Material</h2>
        <p>
          In this website, Admin will add faculties and faculties will only add
          students those are belong to their department. Faculties will provide
          study materials and also assign the work to their students. It having
          three panels, first is for Students, second is for Faculty and last
          one is Admin Portal.
        </p>
        <p className="mt-3 font-normal">
          Used: HTML, CSS, JavaScript, BootStrap, PHP, and MySql.
        </p>
        <div className="mt-4 flex gap-4 flex-col md:flex-row text-left text-xl font-medium text-blue-500 underline underline-offset-2">
          <a
            href="https://studymaterial.gq/"
            target="_blank"
            className="hover:text-blue-600"
          >
            [ visit: www.studymaterial.gq ]
          </a>
        </div>
      </div>
    </>
  );
};

export default StudyMaterialPrg;
