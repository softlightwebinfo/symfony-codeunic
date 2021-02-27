import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { json } from "body-parser";
import { getCookieServer } from "./libs/cookies";

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
    .use((req, _res, next) => {
        // @ts-ignore
        req.key = "miclaveultrasecreta123";
        next();
    })
    .use(
        json(),
        compression({threshold: 0}),
        sirv('static', {dev}),
        sapper.middleware({
            session: (req, res) => {
                return ({
                    token: getCookieServer(req.headers.cookie, "token"),
                    user: JSON.parse(getCookieServer(req.headers.cookie, "user") || "{}"),
                })
            }
        })
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });
