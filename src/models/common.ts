export interface PaginationResponse {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationResponse;
}
