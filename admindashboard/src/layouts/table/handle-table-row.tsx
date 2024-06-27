import type {ChangeEvent, HTMLInputTypeAttribute, ReactNode} from "react";

interface Parameters {
  selected: boolean;
  // modelType: HandleTableEnum;
  // data: HandleTableTypes;
  handleClick: (event: ChangeEvent<HTMLInputElement>, key: string) => void;
}

interface ModelTableCellParameters {
  content?: string | number | ReactNode;
  key: number;
  type?: 'boolean'
}

interface ViewTableItems {
  // content?: TableContentType;
  key: number;
  title: string;
}

interface FormEditItems {
  error: string;
  label: string;
  key: number;
  name: string
  formType?: HTMLInputTypeAttribute;
  value: unknown;
}

interface FormErrorParameters {
  courseCode: string;
  creditUnit: string;
  name: string;
  title: string;
}

interface OpenState {
  delete: boolean;
  edit: boolean;
  popover: EventTarget | null;
  view: boolean;
}

enum DialogOptions {
  Edit = 'Edit',
  View = 'View',
}

// export function HandleTableRow({selected, data, handleClick, modelType}: Parameters): ReactNode {
//   const initialOpen = {popover: null, edit: false, delete: false, view: false}

//   const initialFormError: FormErrorParameters = {
//     name: '', courseCode: '', creditUnit: '', title: ''
//   }

//   const [open, setOpen] = useState<OpenState>(initialOpen);

//   const formError = initialFormError

//   const handleCloseMenu = (): void => {
//     setOpen({...open, popover: null});
//   };

//   const handleDelete = (): void => {
//     setOpen({...open, delete: !open.delete})
//   }

//   const handleEdit = (): void => {
//     setOpen({...open, edit: !open.edit})
//   }

//   const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>): void => {
//     setOpen({...open, popover: event.currentTarget});
//   };

//   const handleView = (): void => {
//     setOpen({...open, view: !open.view})
//   }

//   const {_id} = data

//   return (
//     <>
//       <TableRow hover key={_id} role="checkbox" selected={selected} tabIndex={-1}>
//         <TableCell padding="checkbox">
//           <Checkbox
//             checked={selected}
//             disableRipple
//             onChange={(event: ChangeEvent<HTMLInputElement>) => {
//               handleClick(event, _id);
//             }}
//           />

//         </TableCell>

//         <Logic dataModel={data} modelType={modelType}/>
//         <TableCell align="right">
//           <IconButton onClick={handleOpenMenu}>
//             <Iconify icon="eva:more-vertical-fill"/>
//           </IconButton>
//         </TableCell>
//       </TableRow>

//       {/*Delete Dialog      */}
//       <Dialog
//         aria-describedby="alert-dialog-description"
//         aria-labelledby="alert-dialog-title"
//         onClose={handleDelete}
//         open={open.delete}
//       >
//         <DialogTitle id="alert-dialog-title">
//           Delete {modelType}
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to this <Typography>{modelType}</Typography>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDelete}>
//             Cancel
//           </Button>
//           <Button onClick={handleDelete}>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/*Edit Dialog      */}
//       <Dialog
//         aria-describedby="alert-dialog-description"
//         aria-labelledby="alert-dialog-title"
//         onClose={handleEdit}
//         open={open.edit}
//       >
//         <DialogTitle id="alert-dialog-title">
//           Edit {modelType}
//         </DialogTitle>
//         <Logic
//           dataModel={data}
//           dialogOption={DialogOptions.Edit}
//           formError={formError}
//           modelType={modelType}
//         />
//         <DialogActions>
//           <Button id="cancel" onClick={handleEdit}>
//             Cancel
//           </Button>
//           <Button id="save" onClick={handleEdit}>
//             Save
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Dialog      */}
//       <Dialog
//         aria-describedby="alert-dialog-description"
//         aria-labelledby="alert-dialog-title"
//         onClose={handleView}
//         open={open.view}
//       >
//         <DialogTitle id="alert-dialog-title">
//           View {modelType}
//         </DialogTitle>
//         <Logic
//           dataModel={data}
//           dialogOption={DialogOptions.View}
//           modelType={modelType}
//         />
//         <DialogActions>
//           <Button onClick={handleView}>
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Popover
//         anchorEl={open.popover as Element}
//         anchorOrigin={{vertical: 'top', horizontal: 'left'}}
//         onClose={handleCloseMenu}
//         open={Boolean(open.popover)}
//         transformOrigin={{vertical: 'top', horizontal: 'right'}}
//       >
//         <MenuItem onClick={handleView}>
//           <Iconify icon="mdi:show-outline" sx={{mr: 2}}/>
//           View
//         </MenuItem>

//         <MenuItem onClick={handleEdit}>
//           <Iconify icon="eva:edit-fill" sx={{mr: 2}}/>
//           Edit
//         </MenuItem>

//         <MenuItem onClick={handleDelete} sx={{color: 'error.main'}}>
//           <Iconify icon="eva:trash-2-outline" sx={{mr: 2}}/>
//           Delete
//         </MenuItem>
//       </Popover>
//     </>

//   )
// }

// function Logic(
//   {
//     dataModel,
//     modelType,
//     dialogOption,
//     formError,
//     handleFormData,
//   }: {
//     dataModel: HandleTableTypes;
//     dialogOption?: DialogOptions;
//     formError?: FormErrorParameters;
//     handleFormData?: (event: ChangeEvent<HTMLInputElement>) => void;
//     modelType: HandleTableEnum;
//   }): ReactNode {

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