import { useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import "typeface-quicksand";
import Layout from "../components/Layout";
import A4 from "../components/A4";
import ControlPanel from "./control-panel";
import {
  ZOOM_TYPE,
  ZOOM_STEP,
  INIT_SCALE_FACTOR,
  ZOOM_BOUNDS,
} from "../config";
import Header from "./cv-header";
import Body from "./cv-body";

const CV = () => {
  const [scaleFactor, setScaleFactor] = useState(INIT_SCALE_FACTOR);
  const A4ref = useRef();

  const onBeforeGetContentForPrinting = () => {
    setScaleFactor(INIT_SCALE_FACTOR);
    return Promise.resolve();
  };
  const getPrintableComponentRef = () => {
    return A4ref;
  };

  const handleZoomChange = (type) => {
    if (type === ZOOM_TYPE.IN) {
      if (scaleFactor > ZOOM_BOUNDS.MAX) return;
      setScaleFactor(scaleFactor + ZOOM_STEP);
    } else {
      if (scaleFactor < ZOOM_BOUNDS.MIN) return;
      setScaleFactor(scaleFactor - ZOOM_STEP);
    }
  };
  return (
    <ThemeProvider theme={{ scaleFactor: scaleFactor / INIT_SCALE_FACTOR }}>
      <Layout scaleFactor={scaleFactor}>
        <ControlPanel
          handleZoomChange={handleZoomChange}
          onBeforeGetContent={onBeforeGetContentForPrinting}
          getPrintableComponentRef={getPrintableComponentRef}
        />
        <A4 scaleFactor={scaleFactor} A4ref={A4ref}>
          <Header />
          <Body />
        </A4>
      </Layout>
    </ThemeProvider>
  );
};

export default CV;
