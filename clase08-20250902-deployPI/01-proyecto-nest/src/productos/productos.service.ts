import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Model } from 'mongoose';
import { Product } from './Schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductosService {
  constructor(@InjectModel(Product.name) private readonly productosModelo: Model<Product> ){}
  // constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  addProduct(createProductoDto: CreateProductoDto) {
    // return 'This action adds a new producto';
    return this.productosModelo.create(createProductoDto)
  }

 
  altaDeProductos(){
    // logica
    return false
  }

  async findAll() {
    return this.productosModelo.find().lean()
    // return `This action returns all productos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
