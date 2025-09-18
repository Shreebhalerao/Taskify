
const otpTemplate = (otp, name) => {
	return `<!DOCTYPE html>
	<html>
	  <head>
		<meta charset="UTF-8" />
		<title>OTP Verification Email</title>
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
			font-size: 35px;
		  }
		</style>
	  </head>
	
	  <body>
		<div class="container">
		  <a href=""
			><img
			  class="logo"
			  src="https://res.cloudinary.com/dfykppt3d/image/upload/v1714201599/taskify-logo_dp8q1e.png"
			  alt="Taskify Logo"
		  /></a>
		  <div class="message" style="color: #ffffff">OTP Verification Email</div>
		  <div class="body" style="color: #ffffff">
			<p>Dear ${name}</p>
			<p>
			  Thank you for registering with Taskify. To complete your registration,
			  please use the following OTP (One-Time Password) to verify your
			  account
			</p>
			<h2 class="highlight">${otp}</h2>
			<p>
			  This OTP is valid for 3 minutes. If you did not request this
			  verification, please disregard this email. Once your account is
			  verified, you will have access to our platform and its features.
			</p>
		  </div>
		  <div class="support">
			If you have any questions or need assistance, please feel free to reach
			out to us at
			<a
			  href="mailto:gadeaniruddha2@gmail.com"
			  style="color: rgb(37, 233, 103)"
			>
			  gadeaniruddha2@gmail.com </a
			>. We are here to help!
		  </div>
		</div>
	  </body>
	</html>`;
};
module.exports = otpTemplate;