import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeConstruction } from "../../Redux/Slice";
export default function ContentCard({
  obra,
  imagem,
  resumo,
  contrato,
  contratante,
  id,
  status,
}) {
  const dispatch = useDispatch();
  const Toggle = async () => {
    const state = [obra, imagem, resumo, contrato, contratante, id, status];
    dispatch(changeConstruction(state));
  };

  return (
    <>
      <Card sx={{ maxWidth: 355}} className="CardWrapper">
        <CardMedia
          component="img"
          height="auto"
          image={`http://localhost:3333/files/${imagem}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="section" className="TitleCard">
            {obra}
          </Typography>
          <Typography variant="body2" className="ContentCard"  >
            {resumo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=> Toggle()}><Link to="/obra" className="link_page">Detalhes</Link></Button>
          <Button size="small"><Link to="/obras" className="link_page">Mais obras</Link></Button>
        </CardActions>
      </Card>
    </>
  );
}
