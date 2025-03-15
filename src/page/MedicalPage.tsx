import MedicalUpload from "../components/MedicalUpload";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/Footer";

export default function MedicalPage() {
  return (
    <>
      <HeaderComponent />
      <div>
      <MedicalUpload />
      </div>
      <FooterComponent />
    </>
  );
}
