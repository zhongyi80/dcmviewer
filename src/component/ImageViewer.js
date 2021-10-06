// Importing React
import React from 'react'
// Importing all the dependencies for the Cornerstone library
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import * as cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";

import dicomParser from "dicom-parser";
import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;


// Listing the dependencies for reference later
cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;

// The image, from a url, that we will be uploading and viewing with code below. 
//let imageId = 'https://rawgit.com/cornerstonejs/cornerstoneWebImageLoader/master/examples/Renal_Cell_Carcinoma.jpg';
let imageId = "dicomweb://s3.amazonaws.com/lury/PTCTStudy/1.3.6.1.4.1.25403.52237031786.3872.20100510032220.11.dcm";


// Initiating a class component
class ImageViewer extends React.Component {

    constructor(props) {
        super(props);
        // Any inherited properties could be referenced here
    }
    render() {
        return (
            // The <div> element reserved for the DICOM image 
          <div>              
              <div id="dicomImage" style={{width: "512px",height: "512px"}}></div>
          </div>
        );
        }

    //This is ran after the component has been inserted into the application's tree structure...basically when it is added to its parent element 
    componentDidMount() {
        // The <div> element that was created above
        const element = document.getElementById('dicomImage');
        // Enabling the <div> so it can render the given image
        cornerstone.enable(element);
        // The custom image loader (from Cornerstone) that displays the image in the <div> element
        cornerstone.loadImage(imageId).then(function(image) {
            cornerstone.displayImage(element, image);
        });
    }    
}

// Exporting the component so it can be referenced in the parent component
export default ImageViewer