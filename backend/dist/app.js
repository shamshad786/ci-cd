"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 7700;
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "http://localhost:5174",
        "http://localhost:5173",
    ],
    credentials: true,
}));
app.use(express_1.default.json());
const data = {
    companyLogo: "https://ourtrucksafety.com/public/upload/companydoc/1647043058_thumbnail_image001.png", // Make sure this is in your public folder or a URL
    companyName: "SPEED INTERMODAL",
    letterDate: "Aug 20, 2024",
    employeeName: "ERIC SANCHEZ",
    employeeID: "F2962462",
    dateOfHire: "09-28-2021",
    citation: "-regfe",
    incidentDate: "08/20/2024",
    presidentName: "MANPREET SINGH",
};
app.get('/userdata', async (req, res) => {
    res.status(200).json({
        status: 'success',
        user: data
    });
});
app.post('/sendmessage', async (req, res) => {
    const { message } = req.body;
    res.status(201).json({
        status: 'success',
        message: message
    });
});
app.all("*", (req, res) => {
    if (req.originalUrl === "/")
        return res.send("API running !! ✅");
    else
        return res.send('path not found');
});
app.listen(port, () => {
    console.log('server is running port', port);
});
