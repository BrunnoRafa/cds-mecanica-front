import { Fabricante } from '../shared/enum/fabricante.enum';

export interface Pecas {
  id: number;
  nome: string;
  descricao: string;
  fabricante: Fabricante
}
