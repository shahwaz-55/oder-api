
import mongoose = require('mongoose')

export type IEnvironmentType = 'production' | 'staging' | 'development' | 'beta';

export interface IPopulate {
  path: string;
  model?: string;
  populate?: IPopulate;
}
export interface IEnv {
    stage?: string;
    port: number;
    db: string;
    //domain: string;
    apiPath: string;
    staticPath: string;
  }
 /* export interface IMongoDBCfg {
    name: string;
    user: string;
    pw: string;
    account: string;
    uri: (user: string, pw: string, name: string, account: string) => string;
  }*/
  
export interface IPagination {
  perPage?: number,
  pageNo?: number,
}

// ! need to explain deep populate
// const populate = {
//   path: 'manager',
//   populate: {
//     path: 'organization',
//     populate: {
//       path: ''
//     }
//   }
// }

export interface IFindPaginationQuery{
  page_size?: number,
  page_number?:number
}

