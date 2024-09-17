import { AppDataSource } from './data-source';
import { Moto } from './domain/entities/Moto';

async function seed() {
    await AppDataSource.initialize();

    const motoRepository = AppDataSource.getRepository(Moto);

    const motos = [
        { modele: 'Street Triple', kilometrage: 5000, dateDernierEntretien: new Date() },
        { modele: 'Tiger Sport 660', kilometrage: 16000, dateDernierEntretien: new Date() }
    ];

    await motoRepository.save(motos);

    console.log('Data seeded successfully');
}

seed().catch(error => console.log('Error seeding data:', error));
