import { Request, Response, NextFunction } from 'express';

function corsMiddleWare(req: Request, res: Response, next: NextFunction) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'localhost:5173');

    // Request methods you wish to allow
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );

    // Request headers you wish to allow
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With,Content-Type,  Origin, Accept, Authorization, sentry-trace'
    );

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
}

export default corsMiddleWare;