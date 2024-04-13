import MainTitle from "@/components/Main/MainTitle";
import MainTab from "@/components/Main/MainTab";
import Todo from "@/components/TodoList/Todo";

export default function Home() {
  return (
    <>
      <div className="bg-white h-full">
        <MainTitle />
        <MainTab />
        <Todo />
        <Todo />
      </div>
    </>
  );
}
