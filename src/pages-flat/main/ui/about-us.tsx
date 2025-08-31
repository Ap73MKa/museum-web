import { Card, CardContent } from "@/shared/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";

export function AboutUs() {
  return (
    <div className="grid grid-cols-2 max-w-7xl w-full mx-auto">
      <div className="w-full flex items-center justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card className="p-0 shadow-none border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img src="./museum-1.png" alt="" className="size-full object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card className="p-0 shadow-none border-none">
                  <CardContent className="flex aspect-square overflow-hidden items-center justify-center p-0">
                    <img src="./museum-2.jpg" alt="" className="size-full object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card className="p-0 shadow-none border-none">
                  <CardContent className="flex aspect-square overflow-hidden items-center justify-center p-0">
                    <img src="./museum-3.jpg" alt="" className="size-full object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div>
        <p> Бла Бла бла</p>
      </div>
    </div>
  )
}
