import {Accordion, AccordionItem} from "@heroui/react";

export default function CatalogFilters(){
    return(
    <aside className="w-[250px] bg-white shadow p-4 rounded-lg h-fit sticky top-[100px] self-start">
        
           <Accordion defaultExpandedKeys={["2"]} selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Accordion 1"
      >
       
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Accordion 2"
      >
        
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Accordion 3"
      >
        
      </AccordionItem>
       <AccordionItem
        key="4"
        aria-label="Accordion 3"
        title="Accordion 3"
      >
        
      </AccordionItem>
       <AccordionItem
        key="5"
        aria-label="Accordion 3"
        title="Accordion 3"
      >
        
      </AccordionItem>
       <AccordionItem
        key="6"
        aria-label="Accordion 3"
        title="Accordion 3"
      >
        
      </AccordionItem>
       <AccordionItem
        key="7"
        aria-label="Accordion 3"
        title="Accordion 3"
      >
        
      </AccordionItem>
       <AccordionItem
        key="8"
        aria-label="Accordion 3"
        title="Accordion 3"
      >
        
      </AccordionItem>
       <AccordionItem
        key="9"
        aria-label="Accordion 3"
        title="Accordion 3"
      >
        
      </AccordionItem>
       <AccordionItem
        key="10"
        aria-label="Accordion 10"
        title="Accordion 10"
      >
        
      </AccordionItem>
    </Accordion>
    </aside>);
}