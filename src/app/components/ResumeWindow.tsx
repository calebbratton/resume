import PdfViewer from "./PdfViewer";
import WindowComponent from "./WindowComponent";
import { Document, Page } from "react-pdf";

const ResumeWindow = () => {
  return (
    <WindowComponent className="w-full md:w-3/4" title="Resume">
      <PdfViewer />
    </WindowComponent>
  );
};

export default ResumeWindow;
