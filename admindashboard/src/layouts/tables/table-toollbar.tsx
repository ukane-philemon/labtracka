import {
  InputAdornment,
  OutlinedInput,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdPrint, IoMdSearch } from "react-icons/io";
import { MdFilterList } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import type { ChangeEvent, ReactNode } from "react";
import type { TableOptions } from "@interface";
import { ReplaceDeleteEnum } from "@interface";

export function TableToolbar({
  filterName,
  numSelected,
  onFilterName,
  placeholder,
  options,
}: {
  numSelected: number;
  filterName: string;
  onFilterName: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  options?: TableOptions;
}): ReactNode {
  return (
    <Toolbar
      sx={{
        height: 96,
        display: "flex",
        justifyContent: "space-between",
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: "primary.main",
          bgColor: "primary.lighter",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <OutlinedInput
          onChange={onFilterName}
          placeholder={placeholder}
          startAdornment={
            <InputAdornment position="start">
              <IoMdSearch />
            </InputAdornment>
          }
          value={filterName}
        />
      )}

      <IconButton>
        <IoMdPrint />
      </IconButton>

      {numSelected > 0 ? (
        <SelectAllAction flag={options?.replaceDelete} />
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <MdFilterList />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

function SelectAllAction({ flag }: { flag?: ReplaceDeleteEnum }): ReactNode {
  switch (flag) {
    case ReplaceDeleteEnum.Report:
      return (
        <Tooltip title="Report">
          <IconButton>
            <TbReportAnalytics />
          </IconButton>
        </Tooltip>
      );
    default:
      return (
        <Tooltip title="Delete">
          <IconButton>
            <FaRegTrashCan />
          </IconButton>
        </Tooltip>
      );
  }
}