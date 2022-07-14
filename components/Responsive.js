import useSelection from 'antd/lib/table/hooks/useSelection'
import React, { useEffect, useState } from 'react'
import { getWindowDimensions, IdDeviceBreakpointsByWidth, IdMobileHeight } from '../utils/responsive'

const Responsive = ({
  display,
  children
}) => {
  const [dims, setDims] = useState(null);

  function handleResize() {
    const newDims = getWindowDimensions()
    setDims(newDims);
  }

  useEffect(() => {
    setDims(getWindowDimensions());
    window.addEventListener('resize', handleResize, false);
    return () => {
      window.removeEventListener('resize', handleResize, false);
    }
  }, []);

  function shouldRender() {
    if (!dims) return false;
    const { width, height } = dims;

    if (
      display.indexOf('Laptop') !== -1 &&
      width >= IdDeviceBreakpointsByWidth.laptop_min
    ) {
      return true
    }
    if (
      display.indexOf('Tablet') !== -1 &&
      (width <= IdDeviceBreakpointsByWidth.tablet_max &&
        width >= IdDeviceBreakpointsByWidth.tablet_min)
    ) {
      return true
    }
    // For mobile regardless of orientation
    if (
      display.indexOf('Mobile') !== -1 &&
      width <= IdDeviceBreakpointsByWidth.mobile_max
    ) {
      return true
    }
    if (
      display.indexOf('MobilePortrait') !== -1 &&
      (width <= IdDeviceBreakpointsByWidth.mobile_max &&
        height >= IdMobileHeight.mobileLandscape_max)
    ) {
      return true
    }
    return !!(
      display.indexOf('MobileLandScape') !== -1 &&
      (width <= IdDeviceBreakpointsByWidth.mobile_max &&
        height <= IdMobileHeight.mobileLandscape_min)
    )
  }

  return (
    <React.Fragment>
      {shouldRender() ? children : null}
    </React.Fragment>
  )
}

export default Responsive;