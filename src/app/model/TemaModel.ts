import { PostagemModel } from "./PostagemModel"

export class TemaModel{
    public id: number
    public assunto: string
    public descricao: string
    public foto_url: string
    public postagem: PostagemModel[]
}