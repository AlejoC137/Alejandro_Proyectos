

import React from "react"

export function getMenuHard(){

  const menuHard = [
    {
      "_id": "CODE01",
      "type": "PROYECTOS",
      "category": "CODE",
      "NombreES": ".Capuchino.",
      "NombreEN": ".Capuchino.",
      "AÑO": "7.000",
      "DescripcionES": "Doble espresso con leche espumada.",
      "DescripcionEN": "Double espresso with frothed milk.",
      "TipoES": "Café",
      "TipoEN": "Coffee",
      "SubTipoES": "Caliente",
      "SubTipoEN": "Hot",
      "DietaES": "NA",
      "CuidadoES": "NA",
      "CuidadoEN": "NA",
      "Estado": "Activo",
      "DietaEN": "NA",
      "foto": "http://res.cloudinary.com/dwcp7dk9h/image/upload/v1713473866/vitrina/ccohbniepcdl58n4dec2.jpg",
      "undefined": {}
    },
    
  ]


    return menuHard;


}





const projectsHard  = {

    _id: "CODE01",
    nameES: "Proyecto",
    nameEN: "Proyecto",
    category: "CODE",
    general_properties: {
      active: true,
      client: {name:"Proyecto Café Med S.A.S", contact:'https://www.instagram.com/proyecto__cafe/'},
      team: [{ 
        name: "Melisa Acebedo", 
        roleES: "Directora Creativa", 
        roleEN: "Creative Director", 
        contact: "" }]
    },
    particular_properties: [{}],
    media: {
      img: [{ 
        name: "" ,
        reference: "", 
        description: "", 
      }],
      video: [{ 
        name: "", 
        reference: "", 
        description: "", 
      }]
    },


    descriptions: [
        
        { 
      type: "General", 
      description: "", 
    },
        { 
      type: "Head_Line", 
      description: "", 
    },
        { 
      type: "Introduccion", 
      description: "", 
    },
      
],
    body_text: [
        
        { 
      order: 1, 
      description: "", 
    },
        { 
      order: 2, 
      description: "", 
    },
        { 
      order: 3, 
      description: "", 
    },
        { 
      order: 4, 
      description: "", 
    },

],


    projectsDates: [
        
        { 
      landMark: "V00", 
      date: "2024-02-15" ,
    },
        { 
      landMark: "V01", 
      date: "2024-03-01" ,
    },
        { 
      landMark: "V02", 
      date: "2024-03-15" ,
    },
        { 
      landMark: "V03", 
      date: "2024-04-01" ,
    },



],


    myRoles: [{ 
      description: "", 
      dates: { 
        name: "HEAD OF DEVELOPMENT", 
        start: "", 
        end: "TODAY" }, 
      }],

    xrefs: [{ 
      name:"Product Deploy",
      content:"https://proyecto-cafe-sigma.vercel.app/lenguajeSelect", 
    }],
    entryAuthor: { name: "Alejandro Patiño" }
  
}