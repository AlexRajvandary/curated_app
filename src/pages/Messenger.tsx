import {Avatar, Tab, Tabs} from '@heroui/react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

import Messages from "../components/Messages";

const sampleMessages = [
  { id: "1", text: "Привет!", sender: "other" },
  { id: "2", text: "Как дела?", sender: "other" },
  { id: "3", text: "Привет, отлично! А у тебя?", sender: "me" },
  { id: "4", text: "Тоже хорошо, спасибо", sender: "other" },
   { id: "5", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", sender: "other" },
    { id: "6", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", sender: "other" }
];

export default function Messenger() {
  return (
    <>
      <Header />
      <div className="mx-[160px] my-6">
        <div className="flex rounded-xl shadow-lg border overflow-hidden">
          {/* Левая колонка — 30% */}
          <div className="w-[30%] bg-white p-4 min-h-[calc(100vh-160px)] border-r">
            <div className="font-medium text-lg pb-[15px]">Chats</div>
            <SearchInput/>
            <Tabs aria-label="Options" className='py-[15px]'>
        <Tab key="Sellers" title="Sellers">
          
        </Tab>
        <Tab key="Buyers" title="Buyers">
          
        </Tab>
      </Tabs>
          </div>

          {/* Правая колонка — 70% */}
<div className="flex flex-col w-[70%] h-[calc(100vh-160px)] bg-gray-200">
  {/* Верхняя часть с аватаром и именем */}
  <div className="w-full flex items-start p-4 pb-4 gap-4 bg-white border-b">
    <Avatar className="w-9 h-9" />
    <div className="flex flex-col justify-center -mt-1">
      <div className="text-medium font-medium">Name</div>
      <div className="text-sm text-gray-500">Online</div>
    </div>
  </div>

  {/* Контейнер сообщений */}
  <div className="flex-1 overflow-y-auto px-6 pb-[100px] pt-4 hide-scrollbar">
    <Messages messages={sampleMessages} />
  </div>
  <div className="sticky bottom-0 px-4 pb-4">
  <form
  className="flex gap-2 bg-white rounded-full px-4 py-2 w-full mx-auto"
  style={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)' }}
>
    <input
      type="text"
      placeholder="Type your message..."
      className="flex-1 pl-4 rounded-full"
    />
    <button
      type="submit"
      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
    >
      Send
    </button>
  </form>
</div>

</div>


      </div>
      </div>
    </>
  );
}
