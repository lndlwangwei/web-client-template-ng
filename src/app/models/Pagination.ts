export class Pagination<T> {
  public currentPage: number;
  public pageSize: number;
  public totalSize: number;
  public start: number;
  public items: T[];
}
