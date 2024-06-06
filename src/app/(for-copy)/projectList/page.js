'use client'
import { useRouter } from 'next/navigation';

const DownloadButton = () => {
    const router = useRouter();

    const handleDownload = async () => {
        const response = await fetch('/api/download');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'example.pdf'; // Adjust the filename as needed
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    };

    return (
        <button onClick={handleDownload} className="btn btn-primary">
            Download File
        </button>
    );
};

export default DownloadButton;
