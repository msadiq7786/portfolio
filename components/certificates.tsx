import CertificateItem from "./certificate-item";
import { CERTIFICATIONS } from "@/content/certifications";

function Certificates() {
  return (
    <div>
      {CERTIFICATIONS.map((certificate) => (
        <CertificateItem
          key={certificate.credentialID}
          certification={certificate}
        />
      ))}
    </div>
  );
}

export default Certificates;
