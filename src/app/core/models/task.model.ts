export interface TaskModel {
  title: string;
  expireDate: Date | null;
  complete: boolean,
  expire: boolean,
  uuid: string,
}
