import React, { useContext } from "react";
import { RemindersContext } from "../../contexts/RemindersContext/RemindersContext";
import { Wrapper } from "./ReminderList.Styled";
import ReminderCard from "./ReminderCard";

const RemindersList = ({ reminders }) => {
  return (
    <Wrapper>
      <ul>
        {reminders.map((reminder) => (
          <li>
            <ReminderCard key={reminder.id} reminder={reminder} />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Container = () => {
  const { reminders } = useContext(RemindersContext);
  const reminderLength = reminders.length;

  switch (true) {
    case !!reminderLength:
      return <RemindersList reminders={reminders} />;
    default:
      return <h3>No new reminders</h3>;
  }
};
export default Container;
