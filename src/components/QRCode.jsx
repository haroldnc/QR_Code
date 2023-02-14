import qrCode from "../assets/image-qr-code.png";
import "./css/QRCode.css";

const QRCode = () => {
  return (
    <div className="card-qr-code">
      <img src={qrCode} alt="QR Code" className="qr-code" />
      <h2 className="card-title">
        Improve your font-end skills by building projects
      </h2>
      <p className="card-description">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRCode;
