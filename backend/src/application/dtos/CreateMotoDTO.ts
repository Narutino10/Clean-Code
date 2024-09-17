import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateMotoDTO {
    @IsString()
    modele!: string;

    @IsNumber()
    kilometrage!: number;

    @IsDate()
    dateDernierEntretien!: Date;
}