import React from "react";
import Header from "../../components/Header";
import Form from "../../components/Form";
import RemindersList from "../../components/RemindersList";

const Home = () => {
  return (
    <main>
      <Header />
      <Form />
      <RemindersList />
    </main>
  );
};

export default Home;
