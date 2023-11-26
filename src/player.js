import React from "react";
import { Card, Container} from "react-bootstrap";

export default function Player (props) {

    const ContainerStyle={
        display:"flex",
        justifyContent:"center",
    }
        const CardStyle={
            width:"16rem",
            height:"100%",
            borderRadius:"1rem",
        };
        
        const imageStyle={
            width:"11rem",
            height:"11rem", 
            justifyContent:"center",
            borderRadius:"1rem",
        }
        return ( 
            <Container style={ContainerStyle}>
         <Card style={CardStyle} id="card"> 
            <div>
             <img src={props.imageUrl} alt={props.name} style={imageStyle}/>
             </div> 
             <div id="Name">
             <span id="name">{props.name}</span> 
             </div> 
             <div>
            <strong>Age: </strong><span id="age">{props.age} ans</span>  
             </div>
             <div>
             <strong>Nationality: </strong><span id="nat">{props.nationality}</span>
             </div>  
             <div>
             <strong>Club: </strong><span id="club">{props.club}</span> 
             </div> 
             <div>
         <strong>Number: </strong><span id="number">{props.number}</span>  
             </div>
         </Card>
         </Container>
         );
       }  
     ;