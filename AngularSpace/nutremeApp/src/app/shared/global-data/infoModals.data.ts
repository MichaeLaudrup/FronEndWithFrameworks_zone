import { InfoModalData } from "../models"


export const mbaInfoData: InfoModalData = {
    title: "¿Qué es el metabolismo basal?",
    subtitle: "MBA",
    content: "La tasa metabólica basal (TMB) es la cantidad mínima de energía que necesita \
              tu cuerpo durante un día. En este gráfico te ilustramos tu tasa metabólica \
              basal en reposo, es decir, sin hacer deporte, además de la tasa metabólica basal \
              haciendo deporte y la necesaria según tu objetivo sea subir, bajar, mantener..etc. tu peso",
    links: [
        {
        title: '¿Qué son las kcal?',
        description: '',
        url: 'https://es.wikipedia.org/wiki/Calor%C3%ADa'
        },
        {
            title: '¿Cuantás calorías debo consumir en un día?',
            description: '',
            url: 'https://es.wikipedia.org/wiki/%C3%8Dndice_metab%C3%B3lico_basal'
        },
    ],
    device: 'Los días que no entrenes intenta conseguir un consumo de kcal similar a tu MBA, los días de entrenamiento \
             intenta conseguir el consumo de kcal propio de realizar actividad física y asociado a tu objetivo.'
}




export const dashboardInfoModals: InfoModalData[] = [

]