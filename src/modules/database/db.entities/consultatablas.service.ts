/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DynamicEntityService } from '../db.service';

@Injectable()
export class ConsultaTablaService {
    constructor(
        private readonly dynamicEntityService: DynamicEntityService,

    ) {}

  //  // ******************* Coonsulta de tablas con campos especificos ********************************
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   async consultaJSON(entityName: string, fields: any, relations: any): Promise<any> {
  //     //console.log('entro a consultaJSON');
  //     const encabezados= fields.map((field: { campo: any; }) => field.campo)
  //     //console.log(encabezados);
  //     const opciones = await this.dynamicEntityService.searchCampWithRelations(entityName, encabezados , relations);
  //     console.log(opciones);
  //     const entidadesPrincipales = procesarOpciones(opciones, relations);
  //     const entidadesOrdenadas = ordenarSegunFields(entidadesPrincipales, fields);

  //     return entidadesOrdenadas;

  //     function separarRelaciones(objeto: any, relaciones: string[]): any {
  //       const entidadPrincipal = { ...objeto };

  //       relaciones.forEach(relacion => {
  //         if (objeto[relacion]) {
  //           const relacionObj = objeto[relacion];
  //           if (Array.isArray(relacionObj)) {
  //             relacionObj.forEach((item, index) => {
  //               Object.keys(item).forEach(key => {
  //                 entidadPrincipal[`${relacion}.${index + 1}${key}`] = item[key];
  //                 //console.log(`${relacion}.${index + 1}${key}`);
  //               });
  //             });
  //           } else {
  //             // Si es un objeto simple, agregamos directamente con el prefijo
  //             Object.keys(relacionObj).forEach(key => {
  //               entidadPrincipal[`${relacion}.${key}`] = relacionObj[key];
  //               //console.log(`${relacion}.${key}`);
  //             });
  //           }
  //           delete entidadPrincipal[relacion];

  //         }
  //       });
  //       return entidadPrincipal;
  //     }

  //     function procesarOpciones(opciones: any[], relaciones: string[]): any {
  //       const entidadesPrincipales = [];
      
  //       opciones.forEach(opcion => {
  //         const entidadPrincipal = separarRelaciones(opcion, relaciones);
  //         entidadesPrincipales.push(entidadPrincipal);
          
  //       });
      
  //       return entidadesPrincipales;
  //     }

  //     function ordenarSegunFields(entidades: any[], fields: any[]): any[] {
  //       return entidades.map(entidad => {
  //         const entidadOrdenada = {};
  //         fields.forEach(field => {
  //           const nombreCampo = field.campo;
  //           // Buscar el campo en la entidad, incluyendo campos con prefijos de relación
  //           const campoEncontrado = Object.keys(entidad).find(key => 
  //             key === nombreCampo || key.startsWith(`${nombreCampo}_`) || key.endsWith(`_${nombreCampo}`)
  //           );
  //           if (campoEncontrado) {
  //             entidadOrdenada[campoEncontrado] = entidad[campoEncontrado];
  //           } else {
  //             entidadOrdenada[nombreCampo] = null; // o un valor por defecto si prefieres
  //           }
  //         });
  //         return entidadOrdenada;
  //       });
  //     }
    // } 
}





