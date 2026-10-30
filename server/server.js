import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

app.use(cors())
app.use(express.json())

// Connect to DB on every request (uses cached connection)
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ success: false, message: 'Database connection failed' });
    }
});

app.get('/', (req, res) => res.send('API is working'))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

// Only listen when running locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT)
    })
}

export default app;
