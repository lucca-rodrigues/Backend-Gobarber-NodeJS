import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../Repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

// GET
appointmentsRouter.get('/', (request, response) => {
  const appointment = appointmentsRepository.all();

  return response.json(appointment);
});


// POST
appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const compareDateInAppointment = appointmentsRepository.findByDate(parsedDate);

  if (compareDateInAppointment) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }
  const appointment = appointmentsRepository.create(provider, parsedDate);
  return response.json(appointment);
});

export default appointmentsRouter;
