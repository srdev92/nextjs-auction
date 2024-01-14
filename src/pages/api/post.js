import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {

    } else {
        res.status(405).json({ message: 'Method not allowed!' });
    }
}