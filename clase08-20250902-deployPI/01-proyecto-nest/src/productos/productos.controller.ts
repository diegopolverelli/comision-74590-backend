import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, ValidationPipe } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { title } from 'process';

@Controller('api/productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  altaProductos(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true})) createProductoDto: CreateProductoDto) {
    console.log(createProductoDto)
    let {title, price}=createProductoDto
    // if(!title || !price){
    //   throw new BadRequestException(`title y price son requeridos`)
    // }

    // console.log(createProductoDto.color)

    return this.productosService.addProduct(createProductoDto);
  }

  

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productosService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(+id);
  }
}


let nombre="Juan"
// nombre=false