// Capítulo 3 > Continuando a aplicação > Avatar do usuário > Remover arquivo de avatar existente
import fr from "fs";

export const deleteFile = async (filename: string) => {
    try {
        await fr.promises.stat(filename);
    } catch {
        return;
    }

    await fr.promises.unlink(filename);
}