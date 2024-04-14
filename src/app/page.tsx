import MainTitle from "@/components/Main/MainTitle";
import MainTab from "@/components/Main/MainTab";
import Todo from "@/components/TodoList/Todo";
import TodoList from "@/components/TodoList/TodoList";
import GoWritePostBtn from "@/components/Main/GoWritePostBtn";

export default function Home() {
  return (
    <>
      <div className="bg-white h-full">
        <MainTitle />
        <MainTab />
        <div>
          <TodoList />
        </div>
        <div>
          <GoWritePostBtn />
        </div>
      </div>
    </>
  );
}
