import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { json } from 'body-parser';
import cookieParser from 'cookie-parser';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';
const assets = sirv('static', {
    maxAge: 31536000, // 1Y
    immutable: true,
    dev,
});
polka() // You can also use Express
    .use(json({type: "*"}))
    .use(cookieParser())
    .use(
        compression({threshold: 0}),
        assets,
        sapper.middleware({
            session: (req, res) => {
                const userDecode = req.cookies?.['user'];
                const user = userDecode ? JSON.parse(userDecode) : {}
                if (user) {
                    user.user.image = "Lion.gif";
                }
                return {...user, authenticated: !!user}
            }
        })
    )
    .listen(PORT, err => {
        if (err) console.log('error', err);
    });
