import type { ChangeEvent, MouseEvent, ReactNode } from "react";
import { useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import editOutline from "@assets/icons/edit_outline.svg";
import {
  type HandleTableEnum,
  type HandleTableTypes,
  type HeadLabelParameters,
  WarningOption,
} from "@interface";
import { capitalizeFirstLetter, fToNow } from "@components/utils";
import { StyledButton } from "@components/styled";
import {
  DatePickerHelper,
  DrawerHelper,
  PopoverHelper,
  SvgHelper,
} from "@components/helper";
import { Scrollbar } from "@components/scrollbar";
import { WarningDialog } from "@components/dialogs";

interface OpenState {
  delete: boolean;
  edit: boolean;
  popover?: Element;
  view: boolean;
  warningText?: string;
  successDialog?: ReactNode;
}

export function HandleTableRow({
  selected,
  data,
  handleClick,
  headLabel,
  modelType,
}: {
  data: HandleTableTypes;
  handleClick: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
  headLabel: HeadLabelParameters[];
  modelType: HandleTableEnum;
  selected: boolean;
}): ReactNode {
  const initialOpen: OpenState = { edit: false, delete: false, view: false };

  const [open, setOpen] = useState<OpenState>(initialOpen);

  const handleCloseMenu = (): void => {
    setOpen({ ...open, popover: undefined });
  };

  const handleDelete = (): void => {
    setOpen({ ...initialOpen, delete: !open.delete });
  };

  const handleEdit = (): void => {
    setOpen({ ...initialOpen, edit: !open.edit });
  };

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setOpen({ ...open, popover: event.currentTarget });
  };

  const handleView = (): void => {
    setOpen({ ...initialOpen, view: !open.view });
  };

  const handleEditClick = (): void => {
    setOpen({
      ...open,
      warningText:
        "Are you sure you want to hide this Lab? Users will not be able to view this lab when hidden.",
    });
  };

  const handleWarningClick = (option: WarningOption): void => {
    if (option === WarningOption.Yes) {
      open.edit = false;
    }
    setOpen({
      ...open,
      warningText: undefined,
    });
  };

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    handleClick(event, id.toString());
  };

  const { id } = data;

  const modelName: string = modelType.toString();

  return (
    <>
      <TableRow
        hover
        key={id}
        role="checkbox"
        selected={selected}
        tabIndex={-1}
      >
        <TableCell padding="checkbox">
          <Checkbox
            checked={selected}
            disableRipple
            onChange={handleCheckbox}
          />
        </TableCell>

        <TableCellDataView dataModel={data} headLabel={headLabel} />
        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <SlOptionsVertical size={20} />
          </IconButton>
        </TableCell>
      </TableRow>

      {/*Delete Dialog      */}
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={handleDelete}
        open={open.delete}
      >
        <DialogTitle id="alert-dialog-title">Delete {modelName}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to this <Typography>{modelName}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>

      {/*Edit Dialog      */}
      <DrawerHelper
        openPanel={open.edit}
        handleClosePanel={handleEdit}
        title={`Modify ${modelName}`}
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
      >
        <Stack
          gap={3}
          sx={{
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <HandleEditDrawer dataModel={data} headLabel={headLabel} />

          <StyledButton onClick={handleEditClick}>Modify</StyledButton>

          <Button onClick={handleEditClick} variant="outlined">
            Hide
          </Button>
        </Stack>
      </DrawerHelper>

      {/* View Dialog      */}
      <DrawerHelper
        openPanel={open.view}
        handleClosePanel={handleView}
        title={`View ${modelName}`}
      >
        <Stack
          gap={3}
          sx={{
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <HandleViewDrawer dataModel={data} headLabel={headLabel} />
        </Stack>
      </DrawerHelper>

      <PopoverHelper
        open={Boolean(open.popover)}
        item={[
          {
            icon: <MdOutlineRemoveRedEye size={20} />,
            title: "view",
            onClick: handleView,
          },
          {
            icon: <SvgHelper src={editOutline} />,
            title: "edit",
            onClick: handleEdit,
          },
          {
            icon: <HiOutlineTrash size={20} style={{ color: "red" }} />,
            title: "delete",
            onClick: handleDelete,
            color: "error.main",
          },
        ]}
        anchorEl={open.popover}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        onClose={handleCloseMenu}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      />

      <WarningDialog
        content={open.warningText}
        open={Boolean(open.warningText)}
        handleClick={handleWarningClick}
      />
    </>
  );
}

const TableCellDataView = ({
  dataModel,
  headLabel,
}: {
  dataModel: HandleTableTypes;
  headLabel: HeadLabelParameters[];
}): ReactNode => (
  <>
    {headLabel.map(({ id, hide }) => {
      if (hide) {
        return;
      }

      let item = dataModel[id] as unknown;

      // check if value is a date time
      if (Object.prototype.toString.call(item) === "[object Date]") {
        item = fToNow(item as Date);
      }

      return (
        <TableCell
          key={id}
          align="center"
          component="th"
          padding="none"
          scope="row"
        >
          {item as ReactNode}
        </TableCell>
      );
    })}
  </>
);

const HandleEditDrawer = ({
  dataModel,
  headLabel,
}: {
  dataModel: HandleTableTypes;
  headLabel: HeadLabelParameters[];
}): ReactNode => (
  <Scrollbar sx={{ height: "60vh" }}>
    <Stack pt={1} gap={3} sx={{ width: "95%" }}>
      {headLabel.map(({ id, label, edit }) => {
        const item = dataModel[id] as any as unknown;

        if (Object.prototype.toString.call(item) === "[object Date]") {
          return <DatePickerHelper key={id} value={item as Date} />;
        }
        return (
          <TextField
            type={typeof item === "number" ? "number" : undefined}
            disabled={!edit}
            key={id}
            label={label ?? capitalizeFirstLetter(id)}
            defaultValue={item}
          />
        );
      })}
    </Stack>
  </Scrollbar>
);

const HandleViewDrawer = ({
  dataModel,
  headLabel,
}: {
  dataModel: HandleTableTypes;
  headLabel: HeadLabelParameters[];
}): ReactNode => (
  <Scrollbar sx={{ height: "80vh" }}>
    <Grid container spacing={3.5}>
      {headLabel.map(({ id, label }) => {
        let item = dataModel[id] as unknown;
        if (Object.prototype.toString.call(item) === "[object Date]") {
          item = fToNow(item as Date);
        }
        return (
          <Grid
            item
            key={id}
            xs={6}
            sx={{
              margin: 0,
              width: "100%",
            }}
          >
            <Typography>{label ?? capitalizeFirstLetter(id)}</Typography>
            <Typography variant="subtitle2">{item as ReactNode}</Typography>
          </Grid>
        );
      })}
    </Grid>
  </Scrollbar>
);