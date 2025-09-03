import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({
    timestamps: true, 
    strict: false, 
    // collection: "productos2021"
})
export class Product {
  @Prop({
    unique: true, 
    type: String
  })
  title: string;

  @Prop()
  price: number;

  @Prop({
    default: 0
  })
  stock?: number;

  @Prop()
  descrip: string;

//   constructor(){
//     this.title=""
//     this.price=100
//   }
}

export const ProductSchema = SchemaFactory.createForClass(Product);
