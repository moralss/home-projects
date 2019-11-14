const sgMail = require('@sendgrid/mail');
const variable = "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";


sgMail.setApiKey(variable);


// var msg = {
//     to: 'jeramoral@gmail.com',
//     from: 'jeramoral@gmail.com',
//     subject: 'Sending with SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong> and easy to do anywhere, even with Node.js</strong>',
// };


function sendMessage(email, text, html) {
    const newMessage = {
        to: email,
        from: email,
        subject: "Welcome , you are registered!",
        text: `${text}`,
        html: `<h1  ${html}  </h1>`,
    }

    return sgMail.send(newMessage); 
}

module.exports = { sendMessage };



