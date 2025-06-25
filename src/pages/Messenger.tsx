import {Tab, Tabs} from '@heroui/react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import DialogCollection from "../components/DialogCollection";
import type { DialogData } from "../components/DialogCollection";
import '../App.css';
import ActiveDialog from '../components/ActiveDialog';
import type { Message } from '../components/ActiveDialog';
import React from "react";

const sampleMessages : Message[] = [
  { id: "1", text: "Привет!", sender: "other" },
  { id: "2", text: "Как дела?", sender: "other" },
  { id: "3", text: "Привет, отлично! А у тебя?", sender: "me" },
  { id: "4", text: "Тоже хорошо, спасибо", sender: "other" },
   { id: "5", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", sender: "other" },
    { id: "6", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", sender: "other" }
];

const dialogs: DialogData[] = [
  { id: "1", name: "Nina", lastMessage: "Are we still on?", avatarSrc: "https://i.pravatar.cc/150?u=101" },
  { id: "2", name: "Omar", lastMessage: "Sent the invoice", avatarSrc: "https://i.pravatar.cc/150?u=102" },
  { id: "3", name: "Lena", lastMessage: "Check this out 👉", avatarSrc: "https://i.pravatar.cc/150?u=103" },
  { id: "4", name: "Jasper", lastMessage: "Will be late", avatarSrc: "https://i.pravatar.cc/150?u=104" },
  { id: "5", name: "Mila", lastMessage: "All good on my side", avatarSrc: "https://i.pravatar.cc/150?u=105" },
  { id: "6", name: "Kai", lastMessage: "Let's reschedule", avatarSrc: "https://i.pravatar.cc/150?u=106" },
  { id: "7", name: "Rosa", lastMessage: "Thanks 🙏", avatarSrc: "https://i.pravatar.cc/150?u=107" },
  { id: "8", name: "Victor", lastMessage: "Documents uploaded", avatarSrc: "https://i.pravatar.cc/150?u=108" },
  { id: "9", name: "Isla", lastMessage: "Call me when free", avatarSrc: "https://i.pravatar.cc/150?u=109" },
];

export default function Messenger() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const selectedDialog = dialogs.find((dialog) => dialog.id === selectedId);

  return (
    <>
      <Header />
      <div className="mx-[160px] my-6">
        <div className="flex  shadow-lg border overflow-hidden">
          {/* Левая колонка — 30% */}
          <div className="w-[30%] bg-white min-h-[calc(100vh-160px)] border-r">
            <div className="font-medium text-lg p-4 pb-[15px]">Chats</div>
            
            <div className='px-4'><SearchInput/></div>
            <div className="flex flex-col items-center py-[15px] w-full">
              <Tabs aria-label="Options" radius='none' className="w-full justify-center">
    <Tab key="Sellers" title="Sellers" className="w-full">
        <DialogCollection items={dialogs} 
                          selectedId={selectedId ?? undefined}
                          onSelect={setSelectedId}/>
    </Tab>
    <Tab key="Buyers" title="Buyers" className="w-full">
          <DialogCollection items={dialogs} 
                          selectedId={selectedId ?? undefined}
                          onSelect={setSelectedId}/>
    </Tab>
              </Tabs>
            </div>
          </div>

          {/* Правая колонка — 70% */}
<div className="flex flex-col w-[70%] h-[calc(100vh-160px)] bg-gray-100">
  {selectedDialog ? (
          <ActiveDialog
            name={selectedDialog.name}
            avatarSrc={selectedDialog.avatarSrc}
            isOnline={true} // или по-своему
            messages={sampleMessages}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Выберите диалог
          </div>
        )}

</div>


      </div>
      </div>
    </>
  );
}
