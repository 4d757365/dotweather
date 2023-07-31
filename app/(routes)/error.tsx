"use client";

import Box from "@/components/Box";

interface errorProps {}

const error: React.FC<errorProps> = ({}) => {
  return (
    <Box className="">
      <div className="h-full flex items-center justify-center">
        Something went wrong.
      </div>
    </Box>
  );
};

export default error;
