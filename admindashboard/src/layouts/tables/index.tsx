import type { ChangeEvent, MouseEvent, ReactNode } from "react";
import { useState } from "react";
import {
  Card,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
} from "@mui/material";
// import type {
//   AllModelsEnum,
//   HandleTableEnum,
//   HandleTableTypes,
//   HeadLabelParameters,
//   TableOptions,
// } from "@components/interface";
// import { TableOrder} from "@components/interface/table";
import { applyFilter, emptyRows, getComparator } from "@layouts/table/utils";
import { Scrollbar } from "@components/scrollbar";
import type {
  AllModels,
  HandleTableTypes,
  HeadLabelParameters,
  TableOptions,
} from "@interface";
import {
  AllModelsEnum,
  LaboratoryTableLabel,
  TableOrder,
  UserTableLabel,
} from "@interface";
import { TableToolbar } from "./table-toolbar";
import { TableHeadProps } from "./table-head-props";
import { HandleTableRow } from "./handle-table-row";
import { TableEmptyRows } from "./table-empty-rows";
import { TableNoData } from "./table-no-data";

// interface Parameters

export function HandleTable({
  data,
  initialOrder,
  modelType,
  options,
}: {
  data: AllModels[];
  initialOrder?: string;
  modelType: AllModelsEnum;
  options?: TableOptions;
}): ReactNode {
  let headLabel: HeadLabelParameters[];

  switch (modelType) {
    case AllModelsEnum.Laboratory:
      headLabel = LaboratoryTableLabel;
      break;

    case AllModelsEnum.User:
      headLabel = UserTableLabel;
      break;

    default:
      headLabel = [{ id: "id" }];
      break;
  }

  const [filterName, setFilterName] = useState("");

  const [page, setPage] = useState<number>(0);

  const [order, setOrder] = useState<TableOrder>(TableOrder.ASC);

  const [orderBy, setOrderBy] = useState<string>(
    initialOrder ?? headLabel[0].id,
  );

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [selected, setSelected] = useState<string[]>([]);

  const [filterField, setFilterField] = useState(headLabel[0].id);

  const dataFiltered = applyFilter({
    inputData: data,
    comparator: getComparator(order, orderBy),
    filterField,
    filterName,
  });

  const notFound = dataFiltered.length === 0 && Boolean(filterName);

  const handleChangePage = (
    _event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setPage(0);
    setRowsPerPage(parseInt((event.target as { value: string }).value, 10));
  };

  const handleClick = (_: unknown, name: string): void => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleFilterByName = (event: ChangeEvent<HTMLInputElement>): void => {
    setPage(0);
    setFilterName(event.target.value);
    setFilterField(event.target.value);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setSelected(data.map((n) => n.id));
      return;
    }
    setSelected([]);
  };

  const handleSort = (_: unknown, id: string): void => {
    if (id === "") {
      return;
    }
    const isAsc = orderBy === id && order === TableOrder.ASC;
    setOrder(isAsc ? TableOrder.DESC : TableOrder.ASC);
    setOrderBy(id);
  };

  const dataCount = data.length;

  const displayPagination =
    options?.hidePagination ?? dataCount <= rowsPerPage ? "none" : undefined;

  return (
    <Card>
      <TableToolbar
        filterName={filterName}
        numSelected={selected.length}
        onFilterName={handleFilterByName}
        options={options}
        placeholder={`Search ${modelType.toLowerCase()}...`}
      />
      <Scrollbar>
        <TableContainer component={Paper}>
          <Table aria-label="sticky table" stickyHeader sx={{ minWidth: 800 }}>
            <TableHeadProps
              headLabel={headLabel}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              order={order}
              orderBy={orderBy}
              rowCount={dataCount}
            />
            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: HandleTableTypes) => (
                  <HandleTableRow
                    data={row}
                    handleClick={(event) => {
                      handleClick(event, row.id);
                    }}
                    headLabel={headLabel}
                    key={row.id}
                    modelType={modelType}
                    selected={selected.includes(row.id)}
                  />
                ))}

              <TableEmptyRows
                emptyRows={emptyRows(page, rowsPerPage, dataCount)}
                height={77}
              />
              {notFound ? <TableNoData query={filterName} /> : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <TablePagination
        component="div"
        count={dataCount}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          id: "table-pagination",
          display: displayPagination,
        }}
      />
    </Card>
  );
}