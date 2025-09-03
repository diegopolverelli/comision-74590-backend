import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./src/.env"}),
    MongooseModule.forRoot(    // .forFeatureAsync
      // 'mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
      process.env.MONGO_URL!,
      {
        dbName: process.env.DB_NAME
      }
    ),
    ClientesModule, 
    UsuariosModule, 
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){}

}
