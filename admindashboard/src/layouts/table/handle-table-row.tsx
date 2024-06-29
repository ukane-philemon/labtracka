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
  MenuItem,
  Popover,
  Stack,
  TableCell,
  TableRow,
  TextField,
  Typography
} from "@mui/material";
import { HiOutlineTrash } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import editOutline from '@assets/icons/edit_outline.svg'
import type { HandleTableEnum, HandleTableTypes, HeadLabelParameters } from "@interface";
import { capitalizeFirstLetter, fToNow } from "@components/utils";
import { StyledButton, StyledSvgBox } from "@components/styled";
import { DatePickerHelper, DrawerHelper } from "@components/helper";
import { Scrollbar } from "@components/scrollbar";

// interface ModelTableCellParameters {
//   content?: string | number | ReactNode;
//   key: number;
//   type?: 'boolean'
// }

// interface ViewTableItems {
//   // content?: TableContentType;
//   key: number;
//   title: string;
// }

// interface FormEditItems {
//   error: string;
//   label: string;
//   key: number;
//   name: string
//   formType?: HTMLInputTypeAttribute;
//   value: unknown;
// }

// interface FormErrorParameters {
//   courseCode: string;
//   creditUnit: string;
//   name: string;
//   title: string;
// }

interface OpenState {
  delete: boolean;
  edit: boolean;
  popover: EventTarget | null;
  view: boolean;
}

// enum DialogOptions {
//   Edit = 'Edit',
//   View = 'View',
// }

export function HandleTableRow({
  selected, data, handleClick, headLabel, modelType
}: {
  data: HandleTableTypes;
  handleClick: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
  headLabel: HeadLabelParameters[];
  modelType: HandleTableEnum;
  selected: boolean;
}): ReactNode {
  const initialOpen = { popover: null, edit: false, delete: false, view: false }

  // const initialFormError: FormErrorParameters = {
  //   name: '', courseCode: '', creditUnit: '', title: ''
  // }

  const [open, setOpen] = useState<OpenState>(initialOpen);

  const handleCloseMenu = (): void => {
    setOpen({ ...open, popover: null });
  };

  const handleDelete = (): void => {
    setOpen({ ...initialOpen, delete: !open.delete })
  }

  const handleEdit = (): void => {
    setOpen({ ...initialOpen, edit: !open.edit })
  }

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setOpen({ ...open, popover: event.currentTarget });
  };

  const handleView = (): void => {
    setOpen({ ...initialOpen, view: !open.view })
  }

  const handleEditClick = (): void => {
    // setOpen({})
  }

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
    handleClick(event, id.toString());
  }

  const { id } = data

  const modelName: string = modelType.toString();

  return (
    <>
      <TableRow hover key={id} role="checkbox" selected={selected} tabIndex={-1}>
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
        <DialogTitle id="alert-dialog-title">
          Delete {modelName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to this <Typography>{modelName}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>
            Cancel
          </Button>
          <Button onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/*Edit Dialog      */}
      <DrawerHelper
        openPanel={open.edit}
        handleClosePanel={handleEdit} title={`Modify ${modelName}`}
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
      >
        <Stack gap={3} sx={{
          height: "100%",
          justifyContent: "space-between",
        }}>
          <HandleEditDrawer
            dataModel={data}
            headLabel={headLabel}
          />

          <StyledButton onClick={handleEditClick}>
            Modify
          </StyledButton>

          <Button onClick={handleEditClick} variant="outlined">
            Hide
          </Button>
        </Stack>
      </DrawerHelper>
      {/* <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        onClose={handleEdit}
        open={open.edit}
      >
        <DialogTitle id="alert-dialog-title">
          Edit {modelType}
        </DialogTitle>
        <Logic
          headLabel={headLabel}
          dataModel={data}
          dialogOption={DialogOptions.Edit}
          formError={formError}
          modelType={modelType}
        />
        <DialogActions>
          <Button id="cancel" onClick={handleEdit}>
            Cancel
          </Button>
          <Button id="save" onClick={handleEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog> */}

      {/* View Dialog      */}
      <DrawerHelper
        openPanel={open.view}
        handleClosePanel={handleView}
        title={`View ${modelName}`}
      >

        <Stack gap={3} sx={{
          height: "100%",
          justifyContent: "space-between",
        }}>

          <HandleViewDrawer
            dataModel={data}
            headLabel={headLabel}
          />

        </Stack>
      </DrawerHelper>

      <Popover
        anchorEl={open.popover as Element}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handleCloseMenu}
        open={Boolean(open.popover)}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleView}>
          <MdOutlineRemoveRedEye size={20} style={{ margin: '0 8px 0 0' }} />
          View
        </MenuItem>

        <MenuItem onClick={handleEdit}>
          <StyledSvgBox src={editOutline} sx={{ height: 20, width: 20 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <HiOutlineTrash size={20} style={{ color: 'red', margin: '0 8px 0 0' }} />
          Delete
        </MenuItem>
      </Popover>
    </>

  )
}

const TableCellDataView = (
  {
    dataModel,
    headLabel,
  }: {
    dataModel: HandleTableTypes;
    headLabel: HeadLabelParameters[];
  }): ReactNode => (
  <>
    {
      headLabel.map(({ id, hide }) => {

        if (hide) { return }


        let item = dataModel[id] as unknown

        // check if value is a date time
        if (Object.prototype.toString.call(item) === '[object Date]') {
          item = fToNow(item as Date)
        }

        return (
          <TableCell key={id}
            align='center'
            component="th"
            padding="none" scope="row"
          >
            {item as ReactNode}
          </TableCell>
        )
      })
    }
  </>
)

const HandleEditDrawer = ({ dataModel, headLabel }: {
  dataModel: HandleTableTypes,
  headLabel: HeadLabelParameters[],
}): ReactNode => (
  <Scrollbar sx={{ height: "60vh" }}>
    <Stack pt={1} gap={3} sx={{ width: "95%" }}>
      {
        headLabel.map(({ id, label, edit }) => {

          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- it's totally fine
          const item = dataModel[id] as any as unknown

          if (Object.prototype.toString.call(item) === '[object Date]') {
            return <DatePickerHelper key={id} value={item as Date} />
          }
          return <TextField
            type={typeof item === "number" ? 'number' : undefined}
            disabled={!edit}
            key={id}
            label={label ?? capitalizeFirstLetter(id)}
            defaultValue={item}
          />
        })
      }
    </Stack>
  </Scrollbar>
)

const HandleViewDrawer = ({ dataModel, headLabel }: {
  dataModel: HandleTableTypes,
  headLabel: HeadLabelParameters[],
}): ReactNode => (
  <Scrollbar sx={{ height: "80vh" }}>
    <Grid container spacing={3.5}>
      {
        headLabel.map(({ id, label }) => {

          let item = dataModel[id] as unknown
          if (Object.prototype.toString.call(item) === '[object Date]') {
            item = fToNow(item as Date)
          }
          return (
            <Grid item key={id} xs={6} sx={{
              margin: 0,
              width: "100%"
            }}>
              <Typography>
                {label ?? capitalizeFirstLetter(id)}
              </Typography>
              <Typography variant="subtitle2">
                {item as ReactNode}
              </Typography>
            </Grid>
          )
        })
      }
    </Grid>
  </Scrollbar>
)


//   let data: HandleTableTypes
//   let tableCell: ModelTableCellParameters[] | undefined;
//   let viewTableItems: ViewTableItems[] | undefined;
//   let formEditItems: FormEditItems[] | undefined;
//   let gender: string;

//   switch (modelType) {
//     case AllModelsEnum.Users:
//       data = dataModel as UsersInterface
//       if (dialogOption === undefined) {
//         tableCell = [
//           {
//             key: 0, content: (
//               <Stack alignItems="center" direction="row" spacing={2}>
//                 <Avatar alt={data.name} src={IMAGE_PATH.concat(data.picture || 'images/avatar/avatar_1.jpg')}/>
//                 <Typography noWrap variant="subtitle2">
//                   {data.name}
//                 </Typography>
//               </Stack>
//             )
//           },
//           {key: 2, content: data.matriculationNumber},
//           {key: 3, content: data.department},
//           {
//             key: 4, content: data.isSignedUp, type: "boolean"
//           },
//         ]
//       } else {
//         switch (dialogOption) {
//           case DialogOptions.Edit:
//             if (formError) {
//               formEditItems = [
//                 {label: 'Name', key: 0, name: 'name', error: formError.name, value: data.name}
//               ]
//             }
//             break
//           case DialogOptions.View:
//             gender = data.gender ? data.gender.charAt(0).toUpperCase() + data.gender.slice(1) : 'Female';
//             viewTableItems = [
//               {title: 'Name', content: data.name, key: 0},
//               {title: 'Matriculation Number', content: data.matriculationNumber, key: 1},
//               {title: 'Gender', content: gender, key: 2},
//               {title: 'Department', content: data.department, key: 3},
//               {title: 'Email Address', content: data.email, key: 4},
//               {title: 'Created At', content: fToNow(data.createdAt), key: 5},
//               {title: 'Updated At', content: fToNow(data.updatedAt), key: 6}
//             ]
//             break
//         }
//       }
//       break
//     case AllModelsEnum.Courses:
//       data = dataModel as CoursesInterface

//       if (dialogOption === undefined) {
//         tableCell = [
//           {key: 0, content: data.title},
//           {key: 1, content: data.courseCode},
//           {key: 2, content: data.creditUnit},
//         ]
//         break
//       }

//       switch (dialogOption) {
//         case DialogOptions.Edit:
//           if (formError) {
//             formEditItems = [
//               {label: 'Title', key: 0, name: 'title', error: formError.title, value: data.title}
//             ]
//           }
//           break
//         case DialogOptions.View:
//           viewTableItems = [
//             {title: 'Title', content: data.title, key: 0},
//             {title: 'Course Code', content: data.courseCode, key: 1},
//             {title: 'Credit Unit', content: data.creditUnit, key: 2},
//             {title: 'Created By', content: data.createdBy, key: 3},
//             {title: 'Created At', content: fToNow(data.createdAt), key: 4},
//             {title: 'Updated At', content: fToNow(data.updatedAt), key: 5}
//           ]

//           break
//       }
//       break
//     case AllModelsEnum.Results:
//       data = dataModel as ResultsInterface
//       if (dialogOption === undefined) {
//         tableCell = [
//           {key: 0, content: data.matriculationNumber},
//           {key: 1, content: data.results.length}
//         ]
//         break
//       }

//       switch (dialogOption) {
//         case DialogOptions.Edit:
//         case DialogOptions.View:
//           viewTableItems = [
//             {title: 'Matriculation Number', key: 0, content: data.matriculationNumber},
//             {title: 'Number of Results Uploaded', key: 1, content: data.results.length},
//             {title: 'Created At', content: fToNow(data.createdAt), key: 5},
//             {title: 'Updated At', content: fToNow(data.updatedAt), key: 6}
//           ]
//           break
//       }
//       break
//     case ExtendedModelEnum.StudentResults:
//       data = dataModel as StudentResultsTable
//       if (dialogOption === undefined) {
//         tableCell = [
//           {key: 0, content: data.courseCode},
//           {key: 1, content: data.creditUnit},
//           {key: 2, content: data.grade},
//           {key: 4, content: data.approved, type: 'boolean'},
//         ]
//         break
//       }

//       switch (dialogOption) {
//         case DialogOptions.Edit:
//         case DialogOptions.View:
//           viewTableItems = [
//             {title: 'Approved', key: 0, content: data.approved},
//             {title: 'Course Code', key: 1, content: data.courseCode},
//             {title: 'Course Title', key: 2, content: data.title},
//             {title: 'Quality Point', key: 3, content: data.qualityPoint},
//             {title: 'Score', key: 4, content: data.score},
//             {title: 'Semester', key: 5, content: data.semester},
//             {title: 'Uploaded At', key: 6, content: fToNow(data.uploadedAt)},
//             {title: 'Uploaded By', key: 7, content: data.uploadedBy}
//           ]
//           break
//       }
//       break
//   }

//   if (tableCell) {
//     return <ModelsTableCell data={tableCell}/>
//   } else if (dialogOption) {
//     switch (dialogOption) {
//       case DialogOptions.Edit:
//         if (handleFormData && formEditItems) {
//           return <EditDialog formItems={formEditItems} handleFormData={handleFormData}/>
//         }
//         break
//       case DialogOptions.View:
//         return viewTableItems && <ViewDialog tableItems={viewTableItems}/>
//     }
//   }
// }

// function ModelsTableCell({data}: { data: ModelTableCellParameters[] }): ReactNode {

//   return (
//     <>
//       {data.map((item) => {

//         let content;
//         switch (item.type) {
//           case 'boolean':

//             content = item.content ? (
//               <MdCheckCircleOutline />
//             ) : (<MdOutlineCancel />)
//             break

//           default:
//             content = item.content ?? <IoMdRemoveCircleOutline/>
//             break;
//         }


//         return (
//           <TableCell
//             align='center'
//             component="th"
//             key={item.key} padding="none" scope="row"
//           >
//             {content}
//           </TableCell>
//         )
//       })}
//     </>
//   )
// }

// function EditDialog({handleFormData, formItems}: {
//   handleFormData: (event: ChangeEvent<HTMLInputElement>) => void;
//   formItems: FormEditItems[]
// }): ReactNode {
//   return (
//     <>
//       {formItems.map((item) => (
//         <TextField
//           error={Boolean(item.error !== '')}
//           fullWidth
//           helperText={item.error}
//           key={item.key}
//           label={item.label}
//           margin='dense'
//           name={item.name}
//           onChange={handleFormData}
//           type={item.formType ?? 'text'}
//           value={item.value}
//           variant='standard'
//         />
//       ))}
//     </>
//   )
// }

// function ViewDialog({tableItems}: {
//   tableItems: ViewTableItems[]
// }): ReactNode {

//   return (
//     <DialogContentText id="alert-dialog-description">
//       <TableContainer component={Paper}>
//         <Table aria-label="view data table">
//           <TableBody>
//             {tableItems.map((item) => (
//               <TableRow key={item.key}>
//                 <TableCell>
//                   {item.title}
//                 </TableCell>
//                 <TableCell>
//                   <ViewDialogContent content={item.content} />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </DialogContentText>
//   )
// }

// function ViewDialogContent({content}: { content: TableContentType }): ReactNode {
//   const type = typeof content
//   switch (type) {
//     case "undefined":
//       return <IoMdRemoveCircleOutline/>
//     case 'boolean':
//       return content ? <MdCheckCircleOutline />
//         : <MdOutlineCancel />
//     case "number":
//     case "string":
//     case "bigint":
//     case "symbol":
//     case "object":
//     case "function":
//       return <Typography>{content}</Typography>
//   }
// }