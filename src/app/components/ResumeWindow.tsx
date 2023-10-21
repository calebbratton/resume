import PdfViewer from "./PdfViewer";
import WindowComponent from "./WindowComponent";
import { Document, Page } from "react-pdf";

const ResumeWindow = () => {
  return (
    <WindowComponent title="Resume">
      <PdfViewer />
    </WindowComponent>
  );
};

export default ResumeWindow;
