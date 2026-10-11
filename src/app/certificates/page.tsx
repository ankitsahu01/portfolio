import { Metadata } from "next";
import Certificates from "@/components/Certificates/Certificates";

export const metadata: Metadata = {
  title: "Certificates | Ankit Sahu",
  description: "Google Cloud Certified Associate Cloud Engineer credentials of Ankit Sahu.",
};

export default function Page() {
  return <Certificates />;
}
