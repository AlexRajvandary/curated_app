import Header from "../components/Header";
import Footer from "../components/Footer";
import { Avatar, Button, Tabs, Tab } from "@heroui/react";

export default function UserPage() {
  return (
    <>
      <Header />
      <div className="mx-[160px] mt-[40px]">
        <div className="flex items-center gap-8">
          {/* Аватар */}
          <Avatar
            className="w-[110px] h-[110px] text-large"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />

          {/* Информация справа */}
          <div className="flex flex-col gap-4">
            {/* Имя пользователя */}
            <div className="text-xl font-semibold">User Name</div>

            {/* Статистика */}
            <div className="flex gap-12">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">123</span>
                <span className="text-sm text-gray-500">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">456</span>
                <span className="text-sm text-gray-500">Following</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">78</span>
                <span className="text-sm text-gray-500">Sold</span>
              </div>
            </div>
          </div>
        </div>
          {/* Кнопки */}
            <div className="flex gap-4 mt-[20px]">
              <Button color="primary" className="px-5 py-2">
                Follow
              </Button>
              <Button color="default" variant="flat" className="px-5 py-2">
                Message
              </Button>
            
            </div>
             <div className="flex flex-wrap gap-4 mt-[20px] ml-[-10px]">
      <Tabs variant="underlined" size="lg">
          <Tab key="photos" title="Selling">
          </Tab>
          <Tab key="music" title="Sold" />
          <Tab key="videos" title="Reviews" />
        </Tabs>
    </div>
      </div>
      <Footer />
    </>
  );
}
