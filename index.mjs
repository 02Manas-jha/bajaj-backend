import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.post('/bfhl',(req,res) => {
    const { data } = req.body;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length ? [lowercaseAlphabets.sort((a, b) => a.localeCompare(b)).slice(-1)[0]] : [];

    const response = {
        is_success:true,
        user_id:"Manas_Jha_02032003",
        email:"manasadutiya@gmail.com",
        roll_number:"21BCE10375",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    };

    res.json(response);
});

app.get('/bfhl',(req,res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});