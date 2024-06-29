import { Box } from "@mui/material";
import { type ReactNode } from "react";
import { HandleTable } from "@layouts/table";
import { AllModelsEnum } from "@interface";
import { mockLaboratory } from "@mock";

export const LaboratoryTable = (): ReactNode => {
  return (
    <Box
      sx={{
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <HandleTable data={mockLaboratory} modelType={AllModelsEnum.Laboratory} />
    </Box>
  );
};
