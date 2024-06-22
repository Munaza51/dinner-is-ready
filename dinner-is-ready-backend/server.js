const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const foodRoutes = require('./routes/foods');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/foods', foodRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
