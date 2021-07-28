// 1. Capitulo 2 > Iniciando a API > S.O.L.I.D > Utilizando princípio de responsabilidade única (SRP)
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

// Capítulo 3 > Continuando a aplicação > Trabalhando com Banco de Dados > Injeção de dependência
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) {
    }

    async execute({ name, description }: IRequest): Promise<void> {

        console.log('name__' + name);

        const categryAlreadyExists = await this.categoriesRepository.findByName(name);

        console.log('categryAlreadyExists__' + categryAlreadyExists);

        if (categryAlreadyExists) {
            throw new Error("Category already exists!")
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase }