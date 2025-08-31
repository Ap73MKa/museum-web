import { AccordionItem, AccordionTrigger, AccordionContent } from "@/shared/ui/accordion";

export function EquipmentItem({ title, items, value }: {
  title: string,
  items: string[],
  value: string
}) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-xl md:text-2xl font-light">
        {title}
      </AccordionTrigger>
      <AccordionContent>
        {items.map(item => (
          <p className="text-neutral-600 text-sm md:text-base pl-4 before:content-[''] before:size-1.5 before:mb-0.5 before:mr-2 before:bg-muted-foreground before:inline-block before:rounded-full">
            {item}
          </p>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
