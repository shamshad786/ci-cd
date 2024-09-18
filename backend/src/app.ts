import express, { Request, Response } from 'express'
import cors from 'cors'
const app  = express()
const port = 7700

app.use(cors({
    origin:[
        "http://localhost:3000",
        "http://localhost:5174",
        "http://localhost:5173",
    ],
    credentials: true,
}))

app.use(express.json())

const data = {
    companyLogo:
      "https://ourtrucksafety.com/public/upload/companydoc/1647043058_thumbnail_image001.png", // Make sure this is in your public folder or a URL
    companyName: "SPEED INTERMODAL",
    letterDate: "Aug 20, 2024",
    employeeName: "ERIC SANCHEZ",
    employeeID: "F2962462",
    dateOfHire: "09-28-2021",
    citation: "-regfe",
    incidentDate: "08/20/2024",
    presidentName: "KARANVEER SINGH",
  };

  app.get('/api/userdata', async(req: Request, res:Response)=>{
        res.status(200).json({
            status: 'success',
            user: data
        })
  })

  app.post('/api/sendmessage', async(req: Request,res:Response)=>{
    const {message} = req.body
        res.status(201).json({
            status: 'success',
            message: message
        })
  })

  app.all("*", (req: Request, res: Response) => {
    if (req.originalUrl === "/") return res.send("API running !! ✅");
    else return res.send('path not found')
  });


  app.listen(port, ()=>{
    console.log('server is running port', port)
  })
