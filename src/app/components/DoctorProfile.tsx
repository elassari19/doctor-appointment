import React from 'react';

interface Props {
  doctor: any;
  onBookAppointment: () => void;
}

const DoctorProfile = ({ doctor, onBookAppointment }: Props) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col items-center bg-blue-700 text-white">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-40 h-40 rounded-full object-cover border-4 border-white mb-4"
        />
        <div className="text-center">
          <h1 className="text-xl mb-0.5">{doctor.name}</h1>
          <div className="text-gray-200 mb-1">{doctor.speciality}</div>
          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {doctor.stats.map((stat: number, index: number) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-sm"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <section title="About Dr. Kim">
          <p>{doctor.about}</p>
        </section>
        <section title="Education">
          <ul className="list-none pl-0">
            {doctor.education.map((item: any, index: number) => (
              <li key={index} className="mb-0.5">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section title="Professional Experience">
          <ul className="list-none pl-0">
            {doctor.experience.map((item: any, index: number) => (
              <li key={index} className="mb-0.5">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <button
          onClick={onBookAppointment}
          className="block w-full p-4 bg-blue-700 text-white hover:bg-blue-800 focus:outline-none rounded-md text-center font-medium cursor-pointer mt-4"
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
