import {Tab, Tabs} from '@heroui/react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

export default function Messenger() {
  return (
    <>
      <Header />
      <div className="mx-[160px] my-6">
        <div className="flex rounded-xl shadow-lg border overflow-hidden">
          {/* Левая колонка — 30% */}
          <div className="w-[30%] bg-white p-4 min-h-[calc(100vh-160px)]">
            <div className="font-medium text-xl pb-[15px]">Chats</div>
            <SearchInput/>
            <Tabs aria-label="Options" className='py-[15px]'>
        <Tab key="Sellers" title="Sellers">
          
        </Tab>
        <Tab key="Buyers" title="Buyers">
          
        </Tab>
      </Tabs>
          </div>

          {/* Правая колонка — 70% */}
          <div className="w-[70%] bg-gray-200 p-4 min-h-[calc(100vh-160px)]">
            {/* Content */}
          </div>
        </div>
      </div>
    </>
  );
}
