import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";


ReactDOM.render(<QRCode value="insert link here" />, document.getElementById("Container"),
// template for styling and displaying the QR code, will need to be moved.
<div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    // value={value}
    viewBox={`0 0 256 256`}
    />
</div>
);

