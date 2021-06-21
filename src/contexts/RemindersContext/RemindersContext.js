import React, { createContext, useState, useEffect } from "react";

export const RemindersContext = createContext();

const RemindersContextProvider = (props) => {
  const [reminders, setReminders] = useState(
    JSON.parse(localStorage.getItem("reminders")) || []
  );

  const removeReminder = (id) => {
    const filteredReminders = reminders.filter(
      (reminder) => reminder.id !== id
    );
    setReminders(filteredReminders);
  };
  const addReminder = (reminder) => {
    setReminders([reminder, ...reminders]);
  };

  useEffect(() => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  }, [reminders]);

  return (
    <RemindersContext.Provider
      value={{
        addReminder,
        removeReminder,
        reminders,
      }}
    >
      {props.children}
    </RemindersContext.Provider>
  );
};

export default RemindersContextProvider;
