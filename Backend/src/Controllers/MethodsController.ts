import { Request, Response } from "express";
import { ConstructionSchema } from "../Models/ConstructionSchema";
import { ImageSchema } from "../Models/ImagesSchema";
import Controller from "./Controller";
class MethodsController {
    public async GetObras(req: Request, res: Response) {
        try {
            const id = req?.query?.id
            if (id) {
                await Controller.RelationShipTables();
                const obra = await ConstructionSchema.findOne({
                    where: { id },
                    include: ImageSchema
                });

                return res.status(200).send(obra);
            }
            else{
                await Controller.RelationShipTables();
                const obras = await ConstructionSchema.findAll({ include: ImageSchema });
                return res.status(200).send(obras);
            }
          
        }
        catch (ex) {
            return res.status(400).send("Ocorreu um erro na aplicação" + ex);
        }
    }
    public async CreateConstruction(req: Request, res: Response) {
        try {
            await ConstructionSchema.create({ ...req.body });
            return res.status(200).send("Obra adicionada");
        }
        catch (ex) {
            return res.status(400).send(ex);
        }
    }
    public async UploadImages(req: Request, res: Response) {
        try {
            const { id } = req?.params
            if (req.file) {
                await Controller.RelationShipTables();
                await ImageSchema.create({ imageUrl: req.file?.filename, obraId: id }, { include: ConstructionSchema })
                return res.status(200).send("Imagem salva");
            }
        }
        catch (ex) {
            return res.status(400).send("Ocorreu um erro: " + ex)
        }
    }
    public async GetImages(req: Request, res:Response){
        const {id} = req?.params
        const images = await ImageSchema.findAll({where:{obraId: id}})
        return res.status(200).send(images);
    }
}
export default new MethodsController();