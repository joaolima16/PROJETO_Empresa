import { Request, Response, response } from "express";
import { ConstructionSchema } from "../Models/ConstructionSchema";
import { ImageSchema } from "../Models/ImagesSchema";


class Controller {
  public async createSchema(req: Request, res: Response) {
 
    await new Controller().RelationShipTables();
      await ConstructionSchema.sync({force:false});
      await ImageSchema.sync({force:false})
      .then(()=>{return res.send("Tabelas criadas")})
      .catch((err)=>{return res.send(err)})
  }
  public async RelationShipTables(){
    ConstructionSchema.hasMany(ImageSchema,{foreignKey:{allowNull:false}});
    ImageSchema.belongsTo(ConstructionSchema,{foreignKey:{allowNull:false}});
  }
}
export default new Controller();
