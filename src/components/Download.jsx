import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

function Download() {
  const createPDF = async () => {
    const resume = document.querySelector(".cv-preview");
    const canvas = await html2canvas(resume, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.setFontSize(11);
    const imgProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, (imgProps.height * pdfWidth) / imgProps.width);
    pdf.save("resume.pdf");
  };

  return (
    <div>
      <button
        type="button"
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={createPDF}
      >
        Download
      </button>
    </div>
  );
}

export default Download;
