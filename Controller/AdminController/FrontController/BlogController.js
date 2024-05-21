
const blogModel = require('../../../models/blog/blogpost');
const postPropertyModel = require('../../../models/postProperty/post');
const cloudinary = require('cloudinary').v2;

class blogController {

    static vivek=async(req,res)=>{

        console.log("hello")
     
         // send mail with defined transport object
         try {
           const { username, email, mobile } = req.body;
          console.log(req.body)
           // const ema=email
           if (mobile && username&&email) {
             // await sendPostEmail(email,number,projectName)
             const transporter = await nodemailer.createTransport({
               service: "gmail",
               port: 465,
               secure: true,
               logger: false,
               debug: true,
               secureConnection: false,
               auth: {
                 // user: process.env.Email,
                 // pass: process.env.EmailPass
                 user: process.env.Email,
                 pass: process.env.EmailPass
               },
               tls: {
                 rejectUnAuthorized: true,
               },
             });
             console.log("hellohn")
             // Send mail with defined transport objec
             let info = await transporter.sendMail({
               from: process.env.Email, // Sender address
               to: "amit8601396382@gmail.com", // List of receivers (admin's email) =='query.aadharhomes@gmail.com' email
               subject: " Enquiry",
               html: `
                         <!DOCTYPE html>
                         <html lang:"en>
                         <head>
                         <meta charset:"UTF-8">
                         <meta http-equiv="X-UA-Compatible"  content="IE=edge">
                         <meta name="viewport"  content="width=device-width, initial-scale=1.0">
                         <title>New Enquiry</title>
                         </head>
                         <body>
                             <h3> Enquiry</h3>
                             <p>Customer Name : ${username}</p>
                             <p>Customer Email Id : ${email}</p>
                             <p>Customer Mobile Number : ${mobile} </p>
                            
                             <p>Thank you!</p>
                         </body>
                         </html>
                 `,
             });
     
         
             res.status(201).json({
               message:"User data submitted successfully , and the data has been sent via email",
               // dataInsert: data
             });
           } else {
           res.status(400).json({
               message:"email not sent successfuly !"
           })
           }
         } catch (error) {
           console.log(error);
           res.status(500).json({
             message: "Internal server error ! ",
           });
         }
     
       
     
     }
     static deepak=async(req,res)=>{
       console.log("hello")
       const { username, email, mobile } = req.body;
         //connect with smtp gmail
         const transporter = await nodemailer.createTransport({
           host: "smtp.gmail.com",
           port: 587,
           auth: {
             user: process.env.Email,
             pass: process.env.EmailPass
           },
         })
     
         // send mail with defined transport object
         let info = await transporter.sendMail({
           from: "amit100acre@gmail.com", // Sender address
           to: "amit8601396382@gmail.com", // List of receivers (admin's email) =='query.aadharhomes@gmail.com' email
           subject: "Enquiry",
           html: `
                     <!DOCTYPE html>
                     <html lang:"en>
                     <head>
                     <meta charset:"UTF-8">
                     <meta http-equiv="X-UA-Compatible"  content="IE=edge">
                     <meta name="viewport"  content="width=device-width, initial-scale=1.0">
                     <title>New Enquiry</title>
                     </head>
                     <body>
                         <h3> Enquiry</h3>
                         <p>Customer Name : ${username}</p>
                         <p>Customer Email Id : ${email}</p>
                         <p>Customer Mobile Number : ${mobile} </p>
                        
                         <p>Thank you!</p>
                     </body>
                     </html>
             `,
         });
     
     
         res.status(201).json({
           message:
             "User data submitted successfully , and the data has been sent via email",
           // dataInsert: data
         });
     
     }
    
}
module.exports = blogController

