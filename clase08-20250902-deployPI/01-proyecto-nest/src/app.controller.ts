import { Controller, Get, Logger, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("productos1")
  listarProductos(@Query("limit") cantidad:string){
    // console.log(cantidad)
    Logger.log(cantidad, "appController")
    return this.appService.getProducts(cantidad)
  }
}
