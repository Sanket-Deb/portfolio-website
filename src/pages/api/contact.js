// /src/pages/api/contact.js
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('contact');
      const { name, email, message } = req.body;

      const result = await db.collection('contacts').insertOne({
        name,
        email,
        message,
        createdAt: new Date(),
      });

      res.status(201).json({ success: true, data: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
