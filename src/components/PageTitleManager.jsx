import React from 'react';
import { usePageTitle } from '../hooks/usePageTitle';

const PageTitleManager = () => {
  usePageTitle(); // This hook is now inside Router context
  
  // This component doesn't render anything visible
  // It only manages the page titles dynamically
  return null;
};

export default PageTitleManager;
