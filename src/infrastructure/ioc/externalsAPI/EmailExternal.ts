const nodemailer = require('nodemailer');

class EmailExternal {
    public async SendForgotPasswordToUserEmail(userEmail: string, token: string) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: 'Recuperação de senha!',
            html: `<h1>Você esqueceu sua senha?</h1><p>Não tem problema, utilize esse token: ${token}</p>`
        };

        await transporter.sendMail(mailOptions, function(error: any, info: any) {
            if (error) {
                throw new Error('Não foi possível enviar e-mail de senha esquecida!');
            }

            return info.response;
        });
    }
}

export default new EmailExternal();
