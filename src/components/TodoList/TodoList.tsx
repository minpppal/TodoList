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
      querySnapshot.forEach((item) => {
        clientsArray.push({ id: item.id, title: item.data().title });
      });
      setClients(clientsArray);
    };
    fetchData();
  }, []);

  const onDelete = (id: string) => {
    // id에 해당하는 클라이언트를 상태에서 제거합니다.
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <div>
      {clients.map((client) => (
        <Todo
          key={client.id}
          id={client.id}
          title={client.title}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
