import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [ClientesModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){}

}
