import * as React from 'react';
import Box from '@mui/material/Box';

interface ContentProps {
  children?: React.ReactNode; // `children` prop'unun tipini React.ReactNode olarak belirliyoruz
}

const Content: React.FC<ContentProps> = ({ children }) => (
  <Box component="main" sx={{ p: 3 }}>
    {children}
  </Box>
);

export default Content;
