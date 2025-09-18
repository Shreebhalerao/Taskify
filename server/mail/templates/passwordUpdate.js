exports.passwordUpdated = (email, name) => {
	return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Password Update Confirmation</title>
      <style>
        body {
          background-color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #333333;
          margin: 0;
          padding: 0;
        }
  
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          background-color: #333333;
          color: #ffffff;
          border-radius: 40px;
        }
  
        .logo {
          max-width: 200px;
          margin-bottom: 20px;
        }
  
        .message {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
        }
  
        .body {
          font-size: 16px;
          margin-bottom: 20px;
        }
  
        .support {
          font-size: 14px;
          color: #999999;
          margin-top: 20px;
        }
  
        .highlight {
          font-weight: bold;
          color: rgb(202, 62, 227);
        }
      </style>
    </head>
  
    <body>
      <div class="container">
        <a href="https://taskify-full-stack.vercel.app/"
          ><img
            class="logo"
            src="https://res.cloudinary.com/dfykppt3d/image/upload/v1714201599/taskify-logo_dp8q1e.png"
            alt="StudyNotion Logo"
        /></a>
        <div class="message">Password Updated Successfully</div>
        <div class="body">
          <p>Hey, ${name}</p>
          <p>
            Your password has been successfully updated for the email
            <span class="highlight" style="color: rgb(202, 62, 227)">${email}</span>
          </p>
          <p>
            If you did not request this password change, please contact us
            immediately to secure your account.
          </p>
        </div>
        <div class="support">
          If you have any questions or need further assistance, please feel free
          to reach out to us at
          <a href="mailto:gadeaniruddha2@gmail.com" style="color: rgb(37, 233, 103)">
              gadeaniruddha2@gmail.com </a>.
             We are here to help!
        </div>
      </div>
    </body>
  </html>
    `;
};