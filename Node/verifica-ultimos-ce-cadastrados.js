// app.js
const mysql = require('mysql');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "mail.allinkscoa.com.br",    
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "noreply",
        pass: "HWA4ang69#SL"
    },
    tls: { rejectUnauthorized: false }
});

const con = mysql.createConnection({
    host: 'allinkscoa.com.br',
    user: 'root',  
    password: 'proucroadro7', 
    database: 'GERAIS' 
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

const hoje = new Date();
let mailBody = "O Robison não cadastrou nenhuma CE nas últimas 24 horas, por favor verifique com urgência se algum problema aconteceu!!!";
let sql = "SELECT MAX(ce_mercante_consulta.data_inclusao) AS 'data_ce' FROM	GERAIS.ce_mercante_consulta";

con.query(sql, (err, rows) => {
    if (err) throw err

    rows.forEach(row => {        

        if (row.data_ce < hoje) {
            
            const mailOptions = {
                from: 'noreply@allinkscoa.com.br',
                to: 'wellington.feitosa@allink.com.br',
                subject: 'ATENÇÃO - NENHUM CE CADASTRADO PELO ROBISON NAS ÚLTIMAS 24 HORAS!!!',
                text: mailBody
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email enviado: ' + info.response);
                }
            });

        }
        console.log(row.data_ce < hoje);
    });
})

con.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})