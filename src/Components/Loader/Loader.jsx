import React from 'react';
import { 
  Audio,
  BallTriangle,
  Bars,
  Blocks,
  Circles,
  CirclesWithBar,
  ColorRing,
  Comment,
  Discuss,
  DNA,
  FallingLines,
  FidgetSpinner,
  Grid,
  Hearts,
  Hourglass,
  InfinitySpin,
  LineWave,
  MagnifyingGlass,
  MutatingDots,
  Oval,
  ProgressBar,
  Puff,
  Radio,
  RevolvingDot,
  Rings,
  RotatingLines,
  RotatingSquare,
  RotatingTriangles,
  TailSpin,
  ThreeCircles,
  ThreeDots,
  Triangle,
  Vortex,
  Watch
} from 'react-loader-spinner'; // Import all loaders

const Loader = ({ 
  type , // Default loader type
  height , 
  width , 
  color , 
  ariaLabel , 
  loaderHeight
}) => {
  const renderLoader = () => {
    const loaders = {
      audio: <Audio height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      ballTriangle: <BallTriangle height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      bars: <Bars height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      blocks: <Blocks height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      circles: <Circles height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      circlesWithBar: <CirclesWithBar height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      colorRing: <ColorRing height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      comment: <Comment height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      discuss: <Discuss height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      dna: <DNA height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      fallingLines: <FallingLines height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      fidgetSpinner: <FidgetSpinner height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      grid: <Grid height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      hearts: <Hearts height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      hourglass: <Hourglass height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      infinitySpin: <InfinitySpin height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      lineWave: <LineWave height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      magnifyingGlass: <MagnifyingGlass height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      mutatingDots: <MutatingDots height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      oval: <Oval height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      progressBar: <ProgressBar height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      puff: <Puff height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      radio: <Radio height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      revolvingDot: <RevolvingDot height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      rings: <Rings height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      rotatingLines: <RotatingLines height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      rotatingSquare: <RotatingSquare height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      rotatingTriangles: <RotatingTriangles height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      tailSpin: <TailSpin height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      threeCircles: <ThreeCircles height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      threeDots: <ThreeDots height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      triangle: <Triangle height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      vortex: <Vortex height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
      watch: <Watch height={height} width={width} color={color} ariaLabel={ariaLabel} visible={true} />,
    };

    return loaders[type] || loaders.bars; // Fallback to Bars loader if type is invalid
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: loaderHeight }}>
      {renderLoader()}
    </div>
  );
};

export default Loader;
