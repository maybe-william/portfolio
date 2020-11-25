import Box from '../Box/Box';
import { Document, Page, pdfjs } from 'react-pdf';
import workerURL from "./pdf.worker.min.data";
import pdfResume from "./Will_DyrlandMarquis_Resume_SoftwareEngineer_2020_v58.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = workerURL;

function Resume(props) {
    const resume = (
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Document file={pdfResume}>
        <Page pageNumber={1} />
        </Document>
        </div>
    );
    return (
        <Box anchor="resume" title="Resume">
        {resume}
        </Box>
    );
}

export default Resume;
