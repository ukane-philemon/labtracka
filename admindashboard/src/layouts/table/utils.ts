// import type { HandleTableTypes } from "@interface";
import { TableOrder } from "@interface";


export type Comparator = -1 | 1 | 0;

interface ApplyFilterParameters {
  // inputData: HandleTableTypes[];
  // comparator: (a: HandleTableTypes, b: HandleTableTypes) => number;
  filterField: string;
  filterName?: string;
}

export function emptyRows(page: number, rowsPerPage: number, arrayLength: number): number {
  return page ? Math.max(0, (1 + page) * rowsPerPage - arrayLength) : 0;
}

function descendingComparator(a: object, b: object, orderBy: string): Comparator {
  if (!Object.hasOwn(a, orderBy)) {
    return 1;
  }
  if (!Object.hasOwn(b, orderBy)) {
    return -1;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- it's fine
  const A = Object(a)[orderBy]
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- it's fine
  const B = Object(b)[orderBy]
  if (B < A) {
    return -1;
  } else if (B > A) {
    return 1;
  }
  return 0;
}

export function getComparator(order: TableOrder, orderBy: string): (a: object, b: object) => number {
  return order === TableOrder.DESC
    ? (a: object, b: object) => descendingComparator(a, b, orderBy)
    : (a: object, b: object) => -descendingComparator(a, b, orderBy);
}

// export function applyFilter({
//   inputData, comparator, filterName, filterField
// }: ApplyFilterParameters): HandleTableTypes[] {
//   if (inputData.length === 0) {
//     return []
//   }
//   const stabilizedThis = inputData.map<[HandleTableTypes, number]>((item, index) => [item, index]);

//   stabilizedThis.sort((a, b): number => {

//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });

//   let data = stabilizedThis.map((el) => el[0]);

//   if (Object.hasOwn(inputData[0], filterField) && filterName) {
//     data = data.filter((t: HandleTableTypes) => {
//       const field = t[filterField as keyof HandleTableTypes]
//       return field.includes(filterName)
//     })
//   }

//   return data;
// }
