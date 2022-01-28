import { TemaModel } from "./TemaModel"
import { UsuarioModel } from "./UsuarioModel"

export class PostagemModel{
    public id: number
    public titulo: string
    public texto: string
    public data: Date
    public curtida: number
    public imagem: string
    public tema: TemaModel
    public usuario: UsuarioModel
}