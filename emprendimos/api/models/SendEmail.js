import * as Email from "mailer";
import settings from "../settings";
import {Logs} from "../libs/Logs";

export default class SendEmail {
    constructor(to, subject, body, template) {
        this.from = process.env.EMAIL;
        this.password = process.env.EMAIL_PASSWORD;
        this.to = to;
        this.subject = subject;
        this.body = body;
        this.template = template || "./templates/recovery.txt";
    }

    sendEmail(cbSuccess, cbError) {
        Email.send({
                host: settings.email.gmail.host,
                port: settings.email.gmail.port,
                ssl: true,
                domain: "emprendimos.com",
                to: this.to,
                from: "info@emprendimos.com",
                subject: this.subject,
                authentication: "login",
                username: this.from,
                password: this.password,
                template: this.template,
                data: this.body,
            },
            function (err, result) {
                let log = new Logs();
                if (err) {
                    log.write(`[User]sendEmail[error]=>${JSON.stringify(err)}`);
                    console.log(err);
                    cbError && cbError(err);
                    return;
                } else {
                    cbSuccess && cbSuccess(result);
                    // log.write(`[User]publishContactos[SUCCESS]=>${JSON.stringify(result)}`);
                }
            });
    }
}