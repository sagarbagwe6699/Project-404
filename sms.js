var nodemailer = require('nodemailer');
var xoauth2=require('xoauth2')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
      user: 'sanjayjnayak9@gmail.com',
      clientId: '654777836582-28mvnk0qvk3m7at3kbljb80h74evvvk1.apps.googleusercontent.com',
      clientSecret: 'GFYNyX-1FIV1TwkRJ1QxrtZ4',
      refreshToken: '1/q9xzkHS65QoPDcgra7tbUWkfx5onVxXZ9D37sfXsVqc',
      accessToken:'ya29.GluuBjtrbRC6ZiJNGx-fdylKU8w-mS0IHzXzjELQW_lDgK8qxjUhmeaQCMPs6VVkETgr8w58WxdIqtz-3yf8ZEzt33RdWJYVkdL0egQzNDTyawJGmc-mTTFx4O-e'

  }
});

var mailOptions = {
  from: 'Sanjay<sanjayjnayak9@gmail.com>',
  to: 'sagarbagwe6699@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});