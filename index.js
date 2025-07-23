'use strict';

// All application code is bundled into this single file for production.

const {
  useState,
  useCallback,
  useEffect,
  useRef,
  StrictMode
} = React;

// --- From components/icons.js ---
const UploadIcon = (props) => (
  React.createElement("svg", { ...props, "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 20 16" },
    React.createElement("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" })
  )
);

const TrashIcon = (props) => (
  React.createElement("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" })
  )
);

const DownloadIcon = (props) => (
  React.createElement("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" })
  )
);

const CheckCircleIcon = (props) => (
  React.createElement("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20" },
    React.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" })
  )
);

const PdfFileIcon = (props) => (
  React.createElement("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20" },
    React.createElement("path", { d: "M5.5 14.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" }),
    React.createElement("path", { d: "M3 0h10a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2v-1h1v1a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1H3a1 1 0 00-1 1v1H1V2a2 2 0 012-2z" }),
    React.createElement("path", { d: "M1.5 5.5a.5.5 0 00.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zm0 2a.5.5 0 00.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zm0 2a.5.5 0 00.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5z" }),
    React.createElement("path", { fillRule: "evenodd", d: "M8 5.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM8 8a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 018 8zm0 2.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" })
  )
);

const InvertIcon = (props) => (
  React.createElement("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20" },
    React.createElement("path", { d: "M10 18a8 8 0 100-16 8 8 0 000 16zM10 2a8 8 0 100 16V2z" })
  )
);


// --- From components/FileUploader.js ---
const FileUploader = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    React.createElement("div", { className: "flex-grow flex items-center justify-center p-8" },
      React.createElement("label", {
        htmlFor: "file-upload",
        className: "relative flex flex-col items-center justify-center w-full max-w-2xl h-80 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
        onClick: handleClick,
        onDragOver: handleDragOver,
        onDrop: handleDrop
      },
        React.createElement("div", { className: "flex flex-col items-center justify-center pt-5 pb-6" },
          React.createElement(UploadIcon, { className: "w-12 h-12 mb-4 text-gray-500 dark:text-gray-400" }),
          React.createElement("p", { className: "mb-2 text-lg text-gray-500 dark:text-gray-400" },
            React.createElement("span", { className: "font-semibold text-blue-600 dark:text-blue-400" }, "Click to upload"), " or drag and drop"
          ),
          React.createElement("p", { className: "text-sm text-gray-500 dark:text-gray-400" }, "PDF files only")
        ),
        React.createElement("input", {
          id: "file-upload",
          ref: fileInputRef,
          type: "file",
          className: "hidden",
          accept: "application/pdf",
          onChange: handleFileChange
        })
      )
    )
  );
};

// --- From components/PdfViewer.js ---
const PageThumbnail = ({ pageNumber, imageUrl, isSelected, onSelect, onVisible }) => {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef || imageUrl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
          observer.unobserve(entry.target);
        }
      }, { rootMargin: '400px' }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, [imageUrl, onVisible]);

  return (
    React.createElement("div", {
      ref: ref,
      onClick: onSelect,
      className: `relative rounded-lg shadow-md overflow-hidden cursor-pointer group transition-all duration-200 transform hover:scale-105 ${isSelected ? 'ring-4 ring-blue-500' : 'ring-2 ring-transparent'}`
    },
      imageUrl ?
        React.createElement("img", { src: imageUrl, alt: `Page ${pageNumber}`, className: "w-full h-auto block" }) :
        React.createElement("div", { className: "w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center aspect-[1/1.414]" },
          React.createElement("div", { className: "w-8 h-8 border-2 border-gray-400 dark:border-gray-500 border-dashed rounded-full animate-spin" })
        ),
      React.createElement("div", { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200" }),
      isSelected && (
        React.createElement("div", { className: "absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center" },
          React.createElement(CheckCircleIcon, { className: "w-12 h-12 text-white" })
        )
      ),
      React.createElement("div", { className: "absolute bottom-0 left-0 bg-gray-800 bg-opacity-75 text-white text-xs font-bold px-2 py-1 rounded-tr-lg" },
        pageNumber
      )
    )
  );
};

const PdfViewer = ({
  fileName,
  pageImages,
  selectedPages,
  onPageSelect,
  onDeleteAndDownload,
  onClearSelection,
  onNewFile,
  isProcessing,
  invertColors,
  onInvertColorsChange,
  onRenderPage,
  canDownload
}) => {
  const selectionCount = selectedPages.size;

  return (
    React.createElement("div", { className: "flex flex-col h-full" },
      React.createElement("header", { className: "sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 z-10 shadow-sm" },
        React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-4" },
          React.createElement("div", { className: "flex items-center gap-3 min-w-0" },
            React.createElement(PdfFileIcon, { className: "w-6 h-6 text-red-500 flex-shrink-0" }),
            React.createElement("p", { className: "font-semibold text-lg truncate", title: fileName }, fileName)
          ),
          React.createElement("div", { className: "flex items-center gap-2 flex-wrap" },
            React.createElement("span", { className: "text-sm font-medium text-gray-600 dark:text-gray-300" },
              `${selectionCount} of ${pageImages.length} pages selected`
            ),
            React.createElement("button", {
              onClick: onClearSelection,
              disabled: selectionCount === 0,
              className: "px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
            }, "Clear Selection"),
            React.createElement("button", {
              onClick: onNewFile,
              className: "px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-900 transition-colors"
            }, "Load New PDF")
          )
        )
      ),
      React.createElement("div", { className: "flex-grow p-4 md:p-8 overflow-y-auto bg-gray-50 dark:bg-gray-800" },
        React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4" },
          pageImages.map((img, index) =>
            React.createElement(PageThumbnail, {
              key: index,
              pageNumber: index + 1,
              imageUrl: img,
              isSelected: selectedPages.has(index),
              onSelect: () => onPageSelect(index),
              onVisible: () => onRenderPage(index)
            })
          )
        )
      ),
      React.createElement("footer", { className: "sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 z-10 shadow-up" },
        React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-4" },
          React.createElement("label", { htmlFor: "invert-toggle", className: "flex items-center gap-3 cursor-pointer group" },
            React.createElement(InvertIcon, { className: "w-6 h-6 text-gray-600 dark:text-gray-300 transition-transform group-hover:rotate-12" }),
            React.createElement("span", { className: "font-medium text-gray-700 dark:text-gray-200 select-none" }, "Invert Colors for Printing"),
            React.createElement("div", { className: "relative inline-flex items-center" },
              React.createElement("input", {
                type: "checkbox",
                id: "invert-toggle",
                className: "sr-only peer",
                checked: invertColors,
                onChange: (e) => onInvertColorsChange(e.target.checked)
              }),
              React.createElement("div", { className: "w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" })
            )
          ),
          React.createElement("button", {
            onClick: onDeleteAndDownload,
            disabled: !canDownload || isProcessing,
            className: "flex-shrink-0 flex items-center justify-center gap-3 px-6 py-3 text-base font-bold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 disabled:bg-red-400 dark:disabled:bg-red-800 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:scale-100"
          },
            React.createElement(TrashIcon, { className: "w-5 h-5" }),
            React.createElement("span", null, "Process & Download"),
            React.createElement(DownloadIcon, { className: "w-5 h-5" })
          )
        )
      )
    )
  );
};


// --- From App.js ---
const App = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDocProxy, setPdfDocProxy] = useState(null);
  const [pageImages, setPageImages] = useState([]);
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMessage, setProcessingMessage] = useState('');
  const [error, setError] = useState(null);
  const [invertColors, setInvertColors] = useState(false);

  const resetState = useCallback(() => {
    setPdfFile(null);
    setPdfDocProxy(null);
    setPageImages([]);
    setSelectedPages(new Set());
    setIsProcessing(false);
    setError(null);
    setProcessingMessage('');
    setInvertColors(false);
  }, []);

  const handleFileSelect = useCallback((file) => {
    if (file && file.type === 'application/pdf') {
      resetState();
      setPdfFile(file);
    } else {
      setError('Please select a valid PDF file.');
    }
  }, [resetState]);

  const loadPdf = useCallback(async () => {
    if (!pdfFile || !window.pdfjsLib) return;

    setIsProcessing(true);
    setProcessingMessage('Loading PDF document...');
    setError(null);
    setPageImages([]);
    setPdfDocProxy(null);

    try {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      setPdfDocProxy(pdf);
      setPageImages(new Array(pdf.numPages).fill(null));
    } catch (e) {
      console.error(e);
      setError('Could not read the PDF file. It might be corrupted or protected.');
      resetState();
    } finally {
      setIsProcessing(false);
      setProcessingMessage('');
    }
  }, [pdfFile, resetState]);

  useEffect(() => {
    if (pdfFile) {
      loadPdf();
    }
  }, [pdfFile, loadPdf]);

  const renderPage = useCallback(async (pageIndex) => {
    if (!pdfDocProxy || pageImages[pageIndex]) return;

    try {
      const page = await pdfDocProxy.getPage(pageIndex + 1);
      const viewport = page.getViewport({ scale: 1.0 });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      if (context) {
        await page.render({ canvasContext: context, viewport: viewport }).promise;
        const url = canvas.toDataURL('image/jpeg', 0.7);
        setPageImages(currentImages => {
          const newImages = [...currentImages];
          newImages[pageIndex] = url;
          return newImages;
        });
      }
    } catch (e) {
      console.error(`Failed to render page ${pageIndex + 1}`, e);
    }
  }, [pdfDocProxy, pageImages]);

  const togglePageSelection = useCallback((pageIndex) => {
    setSelectedPages(prevSelected => {
      const newSelection = new Set(prevSelected);
      if (newSelection.has(pageIndex)) {
        newSelection.delete(pageIndex);
      } else {
        newSelection.add(pageIndex);
      }
      return newSelection;
    });
  }, []);

  const handleClearSelection = useCallback(() => {
    setSelectedPages(new Set());
  }, []);

  const handleDeleteAndDownload = useCallback(async () => {
    const { PDFDocument, rgb, BlendMode } = window.PDFLib;
    if (!pdfFile || (selectedPages.size === 0 && !invertColors) || !PDFDocument) return;

    setIsProcessing(true);
    setError(null);

    try {
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);

      if (selectedPages.size > 0) {
        setProcessingMessage('Deleting pages...');
        await new Promise(resolve => setTimeout(resolve, 0));
        const pagesToRemove = Array.from(selectedPages).sort((a, b) => b - a);
        pagesToRemove.forEach(pageIndex => {
          pdfDoc.removePage(pageIndex);
        });
      }

      if (invertColors) {
        setProcessingMessage('Applying color inversion...');
        const pages = pdfDoc.getPages();
        const totalPagesToInvert = pages.length;
        const white = rgb(1, 1, 1);

        for (let i = 0; i < totalPagesToInvert; i++) {
          const page = pages[i];
          setProcessingMessage(`Inverting page ${i + 1} of ${totalPagesToInvert}...`);
          await new Promise(resolve => setTimeout(resolve, 0));

          const { width, height } = page.getSize();
          page.drawRectangle({
            x: 0, y: 0, width, height,
            color: white,
            blendMode: BlendMode.Difference,
          });
        }
      }

      setProcessingMessage('Preparing download...');
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      const originalName = pdfFile.name.replace(/\.pdf$/i, '');
      link.download = `${originalName}_modified.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);

      resetState();

    } catch (e) {
      console.error(e);
      setError('Failed to process and download the PDF. Please try again.');
      setIsProcessing(false);
      setProcessingMessage('');
    }
  }, [pdfFile, selectedPages, resetState, invertColors]);

  const canDownload = selectedPages.size > 0 || invertColors;

  return (
    React.createElement("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex flex-col items-center p-4 font-sans" },
      React.createElement("header", { className: "w-full max-w-6xl text-center mb-6" },
        React.createElement("h1", { className: "text-4xl font-bold text-gray-900 dark:text-white" }, "PDF Page Modifier"),
        React.createElement("p", { className: "text-lg text-gray-600 dark:text-gray-400 mt-2" },
          "Visually select pages to delete, invert colors for printing, and download your modified PDF."
        )
      ),
      React.createElement("main", { className: "w-full max-w-6xl flex-grow flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden" },
        error && (
          React.createElement("div", { className: "m-4 p-4 bg-red-100 dark:bg-red-900/50 border border-red-400 text-red-700 dark:text-red-300 rounded-lg", role: "alert" },
            React.createElement("p", null, React.createElement("span", { className: "font-bold" }, "Error:"), " ", error)
          )
        ),
        isProcessing && (
          React.createElement("div", { className: "flex-grow flex flex-col items-center justify-center p-8 text-center" },
            React.createElement("div", { className: "w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" }),
            React.createElement("p", { className: "mt-4 text-lg font-semibold" }, processingMessage)
          )
        ),
        !isProcessing && !pdfFile && React.createElement(FileUploader, { onFileSelect: handleFileSelect }),
        !isProcessing && pdfFile && pageImages.length > 0 && (
          React.createElement(PdfViewer, {
            fileName: pdfFile.name,
            pageImages: pageImages,
            selectedPages: selectedPages,
            onPageSelect: togglePageSelection,
            onDeleteAndDownload: handleDeleteAndDownload,
            onClearSelection: handleClearSelection,
            onNewFile: resetState,
            isProcessing: isProcessing,
            invertColors: invertColors,
            onInvertColorsChange: setInvertColors,
            onRenderPage: renderPage,
            canDownload: canDownload
          })
        )
      ),
      React.createElement("footer", { className: "w-full max-w-6xl text-center mt-6 text-sm text-gray-500 dark:text-gray-400" },
        React.createElement("p", null, "Your files are processed locally in your browser and are never uploaded to any server."),
        React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " PDF Page Modifier. All rights reserved.")
      )
    )
  );
};


// --- Entry point ---
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(
  React.createElement(StrictMode, null,
    React.createElement(App)
  )
);
