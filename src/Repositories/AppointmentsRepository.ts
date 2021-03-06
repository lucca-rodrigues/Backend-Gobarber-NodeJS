import { isEqual } from 'date-fns';
import Appointment from '../Models/Appointments';

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all():Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null{
    const compareAppointment = this.appointments.find((appointment) => isEqual(date, appointment.date));
    return compareAppointment || null;
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);

    this.appointments.push(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
