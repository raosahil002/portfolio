import React, {useState} from 'react';
import './resumePage.css'
import { BsDownload } from 'react-icons/bs';
import pdf from '../../resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ResumePage = () => {
  const [wid, setwid] = useState(window.innerWidth);

  const handleResize = () => {
    setwid(window.innerWidth);
  };

  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);

  return (
    <div className="resume-page">
      <Document file={pdf} className="resume-view">
        <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>

      <a href={pdf} target="_blank" download="Dikshit's Resume">
        <button className="download-CV" type="button">
          <h3>
            <BsDownload />
            &nbsp; Download CV
          </h3>
        </button>
      </a>
    </div>
  );
};

export default ResumePage;
