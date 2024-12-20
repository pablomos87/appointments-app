interface IAppointment {
    id: number,
    date: Date,
    time: number,
    userId: number,
    status: "active" | "cancelled",
};

export default IAppointment;

