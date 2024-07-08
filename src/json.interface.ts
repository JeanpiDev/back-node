/* eslint-disable prettier/prettier */
export interface JSONRequest {
  relations: any;
  entityName: string;
  fields: string[];
  filters?: { [key: string]: any };
}