import { CreatShort } from "./creat/creat-short";
import { DeleteShort } from "./delete/delete-short";
import { ReadAllShort } from "./read/all/read-short";
import { ReadUniqueShort } from "./read/unique/read-unique-short";

export const Short = {
    creat: CreatShort,
    read: ReadAllShort,
    readUnique: ReadUniqueShort,
    delete: DeleteShort,   
}