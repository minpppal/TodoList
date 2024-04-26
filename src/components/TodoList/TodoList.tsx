"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/api/firebase";
import {
  collection,
  getDocs,
  Timestamp,
  orderBy,
  query,
} from "firebase/firestore";
import Todo from "./Todo";
import { useCheckStarStore } from "@/store/useCheckStarStore";

interface Client {
  id: string;
  title: string;
  content: string;
  timestamp: Timestamp;
}

const TodoList = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const { checkStar } = useCheckStarStore();

  useEffect(() => {
    console.log(checkStar);
    const fetchData = async () => {
      // clients 컬렉션을 createdAt 필드 기준으로 오름차순 정렬
      const querySnapshot = await getDocs(
        query(collection(db, "clients"), orderBy("timestamp"))
      );
      const clientsArray: Client[] = [];
      querySnapshot.forEach((item) => {
        clientsArray.push({
          id: item.id,
          title: item.data().title,
          content: item.data().content,
          timestamp: item.data().timestamp,
        });
        // console.log(clientsArray);
      });
      const sortedClients = clientsArray.sort((a, b) => {
        const aStarred = checkStar[a.id] || false;
        const bStarred = checkStar[b.id] || false;
        if (aStarred && !bStarred) {
          return -1;
        } else if (!aStarred && bStarred) {
          return 1;
        } else {
          return 0;
        }
      });
      setClients(sortedClients);
      console.log(sortedClients);
    };
    fetchData();
  }, [checkStar]);

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
          timestamp={client.timestamp}
        />
      ))}
    </div>
  );
};

export default TodoList;
