import clsx from "clsx";
import '../App.css';

type Message = {
  id: string;
  text: string;
  sender: string;
};

type MessagesProps = {
  messages: Message[];
};

export default function Messages({ messages }: MessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2 hide-scrollbar">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={clsx("flex", {
            "justify-end": msg.sender === "me",
            "justify-start": msg.sender === "other",
          })}
        >
          <div
            className={clsx(
              "px-4 py-2 rounded-lg max-w-xs text-sm",
              {
                "bg-blue-500 text-white": msg.sender === "me",
                "bg-white text-gray-800": msg.sender === "other",
              }
            )}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}
