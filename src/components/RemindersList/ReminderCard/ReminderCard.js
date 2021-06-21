import React, { useContext } from "react";
import { RemindersContext } from "../../../contexts/RemindersContext/RemindersContext";
import {
  Wrapper,
  Title,
  DateField,
  Tag,
  Description,
  DeleteButton,
} from "./ReminderCard.Styled";

const ReminderCard = ({ reminder }) => {
  const { removeReminder } = useContext(RemindersContext);

  const { name, date, time, tags, description, category, id } = reminder;
  const handleClick = () => {
    removeReminder(id);
  };
  return (
    <Wrapper>
      <Title>{name}</Title>
      <DateField>
        Date <span>{date}</span>
      </DateField>
      <DateField>
        Time <span>{time}</span>
      </DateField>
      <Tag>{tags}</Tag>
      <Description>{description}</Description>
      <Description>{category}</Description>
      <DeleteButton variant="transparent" onClick={handleClick} />
    </Wrapper>
  );
};

export default ReminderCard;
