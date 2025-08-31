import { Accordion } from "@/shared/ui/accordion"
import { EquipmentItem } from "./equipment-item"

export function Equipment() {
    return (
        <div id="equipment" className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-20 px-4 xl:px-0">
          <div className="text-2xl md:text-4xl mb-6">
              ОБОРУДОВАНИЕ
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm md:text-base text-muted-foreground">Инструменты, которые мы используем для создания той музыки, что мы любим. Мы используем самые лучшие инструменты, чтобы создать музыку, которая будет звучать как настоящая.</h3>
            <Accordion className="w-full" type="single" collapsible defaultValue="item-1">
                <EquipmentItem
                  value="item-1"
                  title="Мониторинговая система"
                  items={["Focal Alpha 65", "M-Audio M-Track 2x2", "Audio-Technica ATH-M20x"]}
                />
                <EquipmentItem
                  value="item-2"
                  title="Микрофоны"
                  items={["Rode NT1-A", "Shure SM57"]}
                />
                <EquipmentItem
                  value="item-3"
                  title="Гитары"
                  items={["Fabio ST100", "Yamaha C40"]}
                />
                <EquipmentItem
                  value="item-4"
                  title="Клавишные"
                  items={["Arturia KeyLab Essential 61"]}
                />
            </Accordion>
          </div>
        </div>
    );
}
