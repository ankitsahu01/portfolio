import Image from "next/image";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import certImg from "../../assets/gcp_ace_certificate.jpg";

const VERIFY_URL =
  "https://www.credly.com/badges/7882cc4f-50a4-4d0f-9849-f13de5792b01/public_url/";

const Certificates = () => {
  return (
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold highlight mb-3 flex items-center justify-center gap-3">
          <FaAward className="text-pink-500" /> Certificates
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          Official professional certifications validating technical skills and cloud architecture expertise.
        </p>
      </div>

      <div className="w-full max-w-3xl bg-neutral-900/60 backdrop-blur border border-pink-600/30 rounded-2xl overflow-hidden shadow-2xl shadow-pink-950/40 p-5 md:p-8 flex flex-col items-center transition duration-300 hover:border-pink-500/50">
        <div className="w-full relative rounded-xl overflow-hidden shadow-lg border border-neutral-700/60 bg-neutral-950">
          <Image
            src={certImg}
            alt="Google Cloud Certified Associate Cloud Engineer Certificate - Ankit Sahu"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="mt-8 text-center flex flex-col items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Google Cloud Certified Associate Cloud Engineer
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Issued by <span className="text-pink-400 font-medium">Google Cloud</span> &bull; Jul 2026 – Jul 2029
          </p>
          <p className="text-gray-300 text-sm md:text-base max-w-xl">
            Demonstrates ability to deploy applications, monitor operations, and manage enterprise solutions on Google Cloud Platform.
          </p>

          <a
            href={VERIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 py-2.5 px-6 text-base md:text-lg font-medium rounded-xl bg-pink-600 hover:bg-pink-700 active:scale-95 text-white transition-all duration-200 shadow-lg shadow-pink-600/30 flex items-center gap-2"
          >
            Verify Credential <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
