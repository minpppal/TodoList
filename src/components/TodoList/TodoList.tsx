"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/api/firebase";
import { collection, getDocs } from "firebase/firestore";
import Todo from "./Todo";

interface Client {
  id: string;
  title: string;
}

const TodoList = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "clients"));
      const clientsArray: Client[] = [];
      querySnapshot.forEach((doc) => {
        clientsArray.push({ id: doc.id, title: doc.data().title });
      });
      setClients(clientsArray);
    };
    fetchData();
  }, []);
  return (
    <div>
      {clients.map((client) => (
        <Todo key={client.id} title={client.title} />
      ))}
    </div>
  );
};

export default TodoList;
