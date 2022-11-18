import * as filestack from 'filestack-js';
const client = filestack.init('AR9KzyDSRRLue82OmiLxOz');
const options = {
    fromSources: ["local_file_system","instagram","facebook"],
    accept: ["image/*"],
    transformations: {
        crop: true,
        rotate: true
    },
    onFileSelected: file => {
        // If you throw any error in this function it will reject the file selection.
        // The error message will be displayed to the user as an alert.
        if (file.size > 20000 * 20000) {
            throw new Error('File too big, select something smaller than 20MB');
        }
    }
  };

function Uploader () {
    return (client.picker(options).open());
}

export default Uploader;