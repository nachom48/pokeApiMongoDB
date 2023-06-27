import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (!isValidObjectId(value)){
      throw new BadRequestException(`${value} Is not valid MongoID`)
    }
    return value;
  }
}


//Todos los pipes implementan la interfaz de PipeTransform y tienen q implementar el metodo ed Transformar y recibe la metaData
//Implementa una Interfaz ,osea tiene q usar las funciones que estan declaradas en la interfaz