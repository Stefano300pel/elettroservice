import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Cors from 'cors';
import validator from 'validator'; // Importa il modulo validator
import rateLimit from 'express-rate-limit';

// Inizializza il middleware CORS
const cors = Cors({
  origin: [
    'https://elettroservice.eu',
    'https://www.elettroservice.eu',
    'http://www.elettroservice.eu',
    'http://elettroservice.eu'
  ],
  methods: ['POST', 'GET', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

// Funzione helper per eseguire il middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Interfaccia per i dati del modulo di contatto
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  fotovoltaico?: boolean;
  elettrico?: boolean;
  altro?: boolean;
  privacy?: boolean;
}

// Crea il trasportatore email con Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'smtps.aruba.it', // SMTP server for Aruba
    port: 465, // Port for SSL
    secure: true, // Use SSL
    auth: {
      user: process.env.SMTP_USER, // Variabile di ambiente per l'utente SMTP
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

// Funzione per inviare email
const sendEmail = async (data: ContactFormData) => {
  try {
    const transporter = createTransporter();

    const to = 'info@elettroservice.eu'; // Destinatario dell'email

    const mailOptions = {
      from: `matteo@elettroservice.eu`, // Sostituisci con la tua email
      to,
      subject: 'Nuovo messaggio dal sito web',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2>Nuovo messaggio dal sito web</h2>
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.phone ? `<p><strong>Telefono:</strong> ${data.phone}</p>` : ''}
          <p><strong>Interessi:</strong></p>
          <ul>
            ${data.fotovoltaico ? '<li>Impianto fotovoltaico</li>' : ''}
            ${data.elettrico ? '<li>Impianto elettrico</li>' : ''}
            ${data.altro ? '<li>Altro</li>' : ''}
          </ul>
          <ul>
            ${data.privacy ? '<li>Privacy accettata</li>' : ''}
          </ul>
          <p><strong>Messaggio:</strong></p>
          <p>${data.message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error: any) {
    console.error('Errore durante l\'invio dell\'email:', error);
    return { success: false, error: error.message };
  }
};

// Rate Limiting: Limita a 5 invii per IP ogni 10 minuti
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minuti
  max: 5, // massimo 5 richieste
  message: 'Troppi invii. Per favore riprova più tardi.',
});

// Handler API
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Applica il middleware di rate limiting
  await runMiddleware(req, res, limiter);

  // Applica CORS
  await runMiddleware(req, res, cors);

  // Verifica il metodo HTTP
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  try {
    // Estrai i dati dalla richiesta
    const { name, email, phone, message, fotovoltaico, elettrico, altro, privacy } = req.body;

    // Validazione base
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Campi obbligatori mancanti' });
    }

    // **Validazione dell'email**
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'L\'email non è valida' });
    }

    // Prepara i dati
    const contactData: ContactFormData = {
      name,
      email,
      phone,
      message,
      fotovoltaico: !!fotovoltaico,
      elettrico: !!elettrico,
      altro: !!altro,
      privacy: !!privacy,
    };

    // Invia l'email
    const result = await sendEmail(contactData);

    if (result.success) {
      res.status(200).json({ success: true, message: 'Email inviata con successo!' });
    } else {
      res.status(500).json({
        success: false,
        error: 'Errore durante l\'invio dell\'email',
        details: result.error,
      });
    }
  } catch (error: any) {
    console.error('Errore:', error);
    res.status(500).json({ error: 'Errore del server', details: error.message });
  }
}
