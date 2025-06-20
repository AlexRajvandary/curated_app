import {Accordion, AccordionItem, Radio, RadioGroup, Slider} from "@heroui/react";
import SearchInput from "./SearchInput";

export default function CatalogFilters(){
    return(
    <aside className="w-[200px] bg-white shadow p-4 h-fit sticky top-[100px] self-start">
        
          
     <Accordion defaultExpandedKeys={["2"]} selectionMode="multiple">
      
        <AccordionItem
        key="1"
        aria-label="Section"
        title="Section"
        classNames={{
      title: "text-sm font-semibold",
    }}
      >
      <RadioGroup className="text-sm mb-2" size="sm" defaultValue="All">
        <Radio value="All" size="sm">All</Radio>
        <Radio value="Menswear" size="sm">Menswear</Radio>
        <Radio value="Womenswear" size="sm">Womenswear</Radio>
        <Radio value="Kids" size="sm">Kids</Radio>
        <Radio value="Sales" size="sm">Sales</Radio>
      </RadioGroup>
       
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Brand"
        title="Brand"
        classNames={{
      title: "text-sm font-semibold",
    }}
      >
      <RadioGroup label={<SearchInput />} className="text-sm mb-2" size="sm" defaultValue="Nike" aria-multiselectable>
        <Radio value="Nike" size="sm">Nike</Radio>
        <Radio value="Jordan Brand" size="sm">Jordan Brand</Radio>
        <Radio value="Adidas" size="sm">Adidas</Radio>
        <Radio value="Balenciaga" size="sm">Balenciaga</Radio>
        <Radio value="Vintage" size="sm">Vintage</Radio>
        <Radio value="Streetwear" size="sm">Streetwear</Radio>
        <Radio value="Vans" size="sm">Vans</Radio>
        <Radio value="New Balance" size="sm">New Balance</Radio>
        <Radio value="Puma" size="sm">Puma</Radio>
        <Radio value="Gucci" size="sm">Gucci</Radio>
        <Radio value="Valentino" size="sm">Valentino</Radio>
        <Radio value="Christian Louboutin" size="sm">Christian Louboutin</Radio>
        <Radio value="Asics" size="sm">Asics</Radio>
        <Radio value="Maison Margiela" size="sm">Maison Margiela</Radio>
        <Radio value="Saint Laurent Paris" size="sm">Saint Laurent Paris</Radio>
      </RadioGroup>

      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Category"
        title="Category"
         classNames={{
      title: "text-sm font-semibold",
    }}
      >
        
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Size"
        title="Size"
         classNames={{
      title: "text-sm font-semibold",
    }}
      >
        
      </AccordionItem>
       <AccordionItem
        key="5"
        aria-label="Price"
        title="Price"
         classNames={{
      title: "text-sm font-semibold",
    }}
      >
            <Slider
              className="max-w-md"
              defaultValue={[100, 5000]}
              formatOptions={{style: "currency", currency: "USD"}}
              label="Price Range"
              maxValue={10000}
              minValue={0}
              step={1}
              size="sm"
            />
        
      </AccordionItem>
       <AccordionItem
        key="6"
        aria-label="Condition"
        title="Condition"
         classNames={{
      title: "text-sm font-semibold",
    }}
      >
          <RadioGroup className="text-sm mb-2" size="sm" defaultValue="All">
        <Radio value="All" size="sm">All</Radio>
        <Radio value="New" size="sm">New/Never Worn</Radio>
        <Radio value="Used" size="sm">Gently Used</Radio>
        <Radio value="Very" size="sm">Very Worn</Radio>
      </RadioGroup>
      </AccordionItem>
       <AccordionItem
        key="7"
        aria-label="Filter by Tags"
        title="Filter by Tags"
         classNames={{
      title: "text-sm font-semibold",
    }}
      >
        
      </AccordionItem>
       <AccordionItem
        key="8"
        aria-label="Location"
        title="Location"
         classNames={{
      title: "text-sm font-semibold",
    }}
      >
        <RadioGroup className="text-sm mb-2" size="sm" defaultValue="All">
        <Radio value="All" size="sm">All</Radio>
        <Radio value="Asia" size="sm">Asia</Radio>
        <Radio value="US" size="sm">United States</Radio>
        <Radio value="Europe" size="sm">Europe</Radio>
        <Radio value="Canada" size="sm">Canada</Radio>
        <Radio value="Australia/NZ" size="sm">Australia</Radio>
        <Radio value="UK" size="sm">United Kingdom</Radio>
        <Radio value="Other" size="sm">Other</Radio>
      </RadioGroup>
      </AccordionItem>
    </Accordion>
    </aside>);
}