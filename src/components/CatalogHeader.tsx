import {Select, SelectItem} from "@heroui/react";

export default function CatalogHeader() {
  return (
    <div className="mt-[40px] mb-[40px] ml-[156px] mr-[65px]">
        <h1 className="text-3xl font-bold">
              Category name
        </h1>
       <div className="flex justify-end">
 

    {/* Select — справа */}
    <Select placeholder="Sort by" variant="bordered" radius="none" size="sm" className="w-[170px] mr-[115px]"   classNames={{
    popoverContent: "rounded-none",
    listbox: "rounded-none",
    innerWrapper: "rounded-none"
  }}  listboxProps={{
    itemClasses: {
      base: [
        "rounded-none",
        "text-default-800",
        "transition-colors",
        "data-[hover=true]:bg-black",
        "data-[hover=true]:text-white",
        "data-[selectable=true]:focus:bg-black",
        "data-[selectable=true]:focus:text-white",
        "data-[focus-visible=true]:ring-2 ring-black",
      ],
    },
  }}>
      <SelectItem title="Price Low to High" className="hover:radius-none"/>
      <SelectItem title="Price High to Low" className="hover:border-r-none"/>
      <SelectItem title="Newly listed" className="hover:border-r-none"/>
    </Select>
  </div>
        
    </div>
  );
}
