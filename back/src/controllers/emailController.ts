import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASSWORD } from '../config/envs';

const NewAppointmentEmail = async (req: Request, res: Response): Promise<Response> => {

    const { user } = req.body;

    if (!user || !user.email || !user.name || !user.date || !user.time) {
        return res.status(400).json({ error: 'Datos de usuario incompletos.' });
    }

    try {
        const config = {
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASSWORD,
            },
        };

        const transporter = nodemailer.createTransport(config);

        const info = await transporter.sendMail({
            from: EMAIL_USER,
            to: user.email,
            subject: 'Turno agendado',
            text: `Hola ${user.name}! Te confirmamos que tu turno ha sido agendado para el día ${user.date} a las ${user.time}.`,
        });

        return res.status(200).json(info);

    } catch (error) {

        if (error instanceof Error) {
            return res.status(500).json({
                error: 'Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.',
                message: error.message
            });
        } else {
            return res.status(500).json({
                error: 'Error desconocido. Por favor, inténtalo de nuevo más tarde.'
            });
        }
    }
};

export default NewAppointmentEmail;