"use client";
import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";

//กำหนด type ของข้อมูล Object 
interface Data {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  //ตัวอย่างการใส่ Type ให้ตัวแปร
  const [data, setData] = useState<Data[]>([]);
  const [fistName, setFistName] = useState<String>("diamond");
  //กำหนด type ให้ parameter
  const myPlusFunction=(num1:number, num2:number)=> {
    return num1 * num2;
  }

  const result = myPlusFunction(100, 2);

  //ท่าเบสิคในการดึงข้อมูล
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Navbar />
      {result}
      {/* <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul> */}
    </main>
  );
}
