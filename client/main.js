"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@trpc/client");
//import type { appRouter } from "../server/routers/index"
const safe_eval_1 = __importDefault(require("safe-eval"));
//const URL = (<HTMLInputElement>document.getElementById('url')).value;
// safe-eval lets you execute JavaScript code without having to use the much discouraged and feared upon eval().
document.addEventListener('DOMContentLoaded', () => {
    console.log('made it here');
    const btn = document.getElementById('button');
    btn.addEventListener('click', () => {
        console.log('clicked');
        const clientURL = document.getElementById('url').value; // a string, eg: 'http://localhost:3001/trpc'
        const client = (0, client_1.createTRPCProxyClient)({
            links: [
                (0, client_1.httpBatchLink)({
                    url: clientURL, // this would be the url from user eg: http://localhost:3001/trpc  (assuming it is listening)
                }),
            ],
        });
        const request = document.getElementById('request').value; // a string, eg: 'client.users.create.mutate({ name: "John", age: 12 })'
        console.log(request);
        (0, safe_eval_1.default)(request);
    });
});
/*
 // This is the trpc query for dummies. assuming we have 5 text fields

 async function trpcQueryForDummies() {
  
  const btn = document.getElementById('button');
  btn.addEventListener('click', () => {
    const clientURL = (<HTMLInputElement>document.getElementById('url')).value; // a string, eg: 'http://localhost:3001/trpc'
    
    const route = (<HTMLInputElement>document.getElementById('route')).value; // a string, eg: 'users'
    const method = (<HTMLInputElement>document.getElementById('method')).value; // a string, eg: 'create'
    const queryType = (<HTMLInputElement>document.getElementById('query')).value; // a string, eg: 'mutate' or 'query'
    let reqBody = (<HTMLInputElement>document.getElementById('body')).value; // an object, eg: '{ name: "John", age: 12 }'

    const client = createTRPCProxyClient<appRouter>({
      links: [
        httpBatchLink({
          url: clientURL, // setting the client to the url
        }),
      ],
    })
            

    let sendQuery = `client.${route}.${method}.${queryType}.(${reqBody})`;  // 'client.users.create.mutate({ name: "John", age: 12 })'
    safeEval(sendQuery); // sending query
  })
}

*/
/**
  // This is the trpcQuery for pros.

async function trpcQueryForPros() {
  
  const btn = document.getElementById('button');
  btn.addEventListener('click', () => {
    const clientURL = (<HTMLInputElement>document.getElementById('url')).value; // a string, eg: 'http://localhost:3001/trpc'
    const request = (<HTMLInputElement>document.getElementById('url')).value; // a string, eg: 'client.users.create.mutate({ name: "John", age: 12 })'

    const client = createTRPCProxyClient<appRouter>({
      links: [
        httpBatchLink({
          url: clientURL, // setting the client to the url
        }),
      ],
    })
            
    safeEval(request); // sending query
  })
}

 */
const resultField = document.getElementById('result'); //get result from tRPC server and append through .textContent to resultField
