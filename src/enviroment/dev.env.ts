import { IEnv } from "../types"


export const development_environment_variables: IEnv =  {
    stage: process.env.ENVIRONMENT || 'development',
    port: 8092,
    apiPath: '/api',
    staticPath: '/public',
    db: 
        // add localhost mongodb details.
        /*name: '',
        user:'',
        pw: '',
        account: '',*/ 
        //uri: (user: string, pw :string, name :string, account: string): string => {
           // return `mongodb://localhost:27017//db_name`
            // return `mongodb+srv://${user}:${pw}${account}.vsche.mongodb.net/${name}?retryWrites=true&w=majority`;
            "mongodb://localhost:27017"
   // }
}
