import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Textarea } from "@/shared/ui/textarea"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/shared/ui/sheet"
import { cn } from "@/shared/lib/utils"

export function ContactUsSheet({text="СВЯЗАТЬСЯ", className, ...props}: React.ComponentProps<typeof Button> & {text: string}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className={cn("rounded-full text-white bg-transparent font-light", className)} {...props}>
          {text}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-[32rem] border-l-0 overflow-y-auto">
        <SheetHeader>
        </SheetHeader>

        <h3 className="px-4 md:px-6 text-xl mt-6 mb-4 md:text-3xl md:mt-12 md:mb-6">СВЯЗАТЬСЯ С НАМИ</h3>
        <div className="grid grid-cols-[auto_1fr] gap-x-4 px-4 md:px-6 w-full text-muted-foreground">
          <div>ТЕЛЕФОН</div>
          <a href="tel:+79999999999" target="_blank" className="hover:underline underline-offset-4">
            +7 (999) 999-99-99
          </a>
          <div>TELEGRAM</div>
          <a href="https://t.me/museuminc" className="hover:underline underline-offset-4">
            @museuminc
          </a>
          <div>АДРЕС</div>
          <a href="https://yandex.ru/maps/-/CLEF5N4x" target="_blank">
            г.Владимир, ул.Красноармейская, 43Б
          </a>
        </div>

        <div className="grid flex-1 auto-rows-min gap-3 px-4 md:px-6 my-4">
          <div className="grid gap-0.5">
            <Label htmlFor="name" className="font-normal text-base">Имя</Label>
            <Input id="name" className="rounded-lg shadow-none" />
          </div>
          <div className="grid gap-0.5">
            <Label htmlFor="phone" className="font-normal text-base">Телефон</Label>
            <Input id="phone" className="rounded-lg shadow-none" />
          </div>
          <div className="grid gap-0.5">
            <Label htmlFor="comment" className="font-normal text-base">Комментарий</Label>
            <Textarea id="comment" className="rounded-lg shadow-none" />
          </div>
        </div>
        <SheetFooter className="md:px-6">
          <Button type="submit">Оставить заявку</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
