import {Avatar, Tab, Tabs, Textarea} from '@heroui/react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import Messages from "../components/Messages";
import AttachmentDropdown from '../components/AttachmentDropDown';
import DialogItem from '../components/DialogItem';
import '../App.css';

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
          <div className="flex flex-col items-center py-[15px] w-full">
  <Tabs aria-label="Options" className="w-full justify-center">
    <Tab key="Sellers" title="Sellers" className="w-full">
     <div className="max-h-[450px] overflow-y-auto space-y-2 pr-2 hide-scrollbar">
          {/* Много элементов для демонстрации прокрутки */}
          <DialogItem name="Alice" subtitle="Hello!" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <DialogItem name="Bob" subtitle="New order" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
          <DialogItem name="Charlie" subtitle="Payment sent" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <DialogItem name="Diana" subtitle="Shipping today" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
          <DialogItem name="Eva" subtitle="Got it!" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <DialogItem name="Frank" subtitle="Review needed" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <DialogItem name="George" subtitle="See you soon" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <DialogItem name="Hannah" subtitle="Let's talk" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <DialogItem name="Igor" subtitle="✅ Done" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
        </div>
      
    </Tab>
    <Tab key="Buyers" title="Buyers" className="w-full">
       <div className="max-h-[450px] overflow-y-auto space-y-2 pr-2 hide-scrollbar">
          {/* Много элементов для демонстрации прокрутки */}
          <DialogItem name="Eva" subtitle="Got it!" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
          <DialogItem name="Frank" subtitle="Review needed" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
          <DialogItem name="George" subtitle="See you soon" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
          <DialogItem name="Hannah" subtitle="Let's talk" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
          <DialogItem name="Igor" subtitle="✅ Done" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
          <DialogItem name="Alice" subtitle="Hello!" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d'  />
          <DialogItem name="Bob" subtitle="New order" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <DialogItem name="Charlie" subtitle="Payment sent" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          <DialogItem name="Diana" subtitle="Shipping today" avatarSrc='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
        </div>
    </Tab>
  </Tabs>
</div>
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
  <div className="sticky bottom-0 px-2 pb-1">
  <form
  className="flex bg-white rounded-full w-full mx-auto hide-scrollbar"
  style={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)' }}
>
  <AttachmentDropdown/>
    <Textarea placeholder="Type your message..." minRows={1} maxRows={3} className="flex-1 px-4 rounded-full"/>
  </form>
</div>

</div>


      </div>
      </div>
    </>
  );
}
