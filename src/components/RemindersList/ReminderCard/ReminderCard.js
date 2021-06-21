import React from "react";
import {
  Wrapper,
  Title,
  DateField,
  Tag,
  Description,
} from "./ReminderCard.Styled";

const ReminderCard = ({ reminder }) => {
  console.log(reminder);
  const { name, date, time, tags, description, category } = reminder;
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
    </Wrapper>
  );
};

export default ReminderCard;
