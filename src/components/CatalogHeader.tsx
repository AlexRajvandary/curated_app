import {Select, SelectItem} from "@heroui/react";

export default function CatalogHeader() {
  return (
    <div className="mt-[40px] mb-[40px] ml-[156px]">
        <h1 className="text-3xl font-bold">
              Category name
        </h1>
       <div className="flex justify-end">
 

    {/* Select — справа */}
    <Select placeholder="Sort by" variant="bordered" radius="none" size="sm" className="w-[200px] mr-[115px]">
      <SelectItem title="Price Low to High" />
      <SelectItem title="Price High to Low" />
      <SelectItem title="Newly listed" />
    </Select>
  </div>
        
    </div>
  );
}
