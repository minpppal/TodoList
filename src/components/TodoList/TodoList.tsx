"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/api/firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import Todo from "./Todo";

interface Client {
  id: string;
  title: string;
  content: string;
  createdAt: Timestamp;
}

const TodoList = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "clients"));
      const clientsArray: Client[] = [];
      querySnapshot.forEach((item) => {
        clientsArray.push({
          id: item.id,
          title: item.data().title,
          content: item.data().content,
          createdAt: item.data().createdAt,
        });
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
          content={client.content}
          onDelete={onDelete}
          createdAt={client.createdAt}
        />
      ))}
    </div>
  );
};

export default TodoList;
