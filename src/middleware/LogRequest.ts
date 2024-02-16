import {Request,Response,NextFunction} from 'express';

export async function logRequest (req:Request,res:Response,next:NextFunction){
    const date = new Date();
    const timestamp = date.toISOString();

const AccessToken=req.headers["access-token"]
console.log(`[${timestamp}] ${req.method}:${req.url}, AccessToken:"${AccessToken}"`)
next()
}