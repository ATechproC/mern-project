import React, { useEffect, useState } from 'react';

const BookingSlots = () => {

    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState("");

    const getAvailbeSlots = () => {

        // setDocSlots([]);

        const today = new Date();

        // getting current date :
        for (let i = 0; i < 7; i++) {

            setDocSlots([]);

            // getting date with index : 
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            // console.log(currentDate); 

            // setting nd time of te date with index :

            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            // setting Houres : 

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours((currentDate.getHours() > 10) ? currentDate.setHours() + 1 : 10);
                currentDate.setMinutes(currentDate.setMinutes() > 30 ? 0 : 30);
            } else {
                currentDate.setMinutes(0);
                currentDate.setHours(10);
            }

            let timeSlots = [];
            while (currentDate > today) {
                const formatedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

                timeSlots.push({
                    dateTime : new Date(currentDate),
                    time : formatedTime
                });
            }

            setDocSlots(prev => [...prev, timeSlots]);

        }

        console.log(docSlots)

    }

    useEffect(() => {
        getAvailbeSlots();
    }, []);

    return (
        <div>BookingSlots</div>
    )
}

export default BookingSlots