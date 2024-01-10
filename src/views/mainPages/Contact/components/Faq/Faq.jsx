import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Preguntas frecuentes
        </Box>
      </Box>
      <Box>
        {[
          {
            title:
              '¿Cómo garantizan la calidad de sus productos o servicios?',
            subtitle:
              'En nuestra organización, nos tomamos muy en serio la calidad y el control de nuestros productos o servicios. Implementamos rigurosos procesos y prácticas para garantizar que cumplamos con los más altos estándares de calidad.',
          },
          {
            title: '¿En qué estados de México tienen presencia?',
            subtitle:
              'Nuestra organización tiene presencia tanto a nivel nacional como internacional. Nos enorgullece servir a clientes y atender sus necesidades tanto en nuestro país de origen como en diversos lugares alrededor del mundo. Contamos con una red de distribución y colaboradores que nos permiten ofrecer nuestros productos o servicios de manera efectiva en diferentes ubicaciones geográficas.',
          },
          {
            title: '¿Tienen casos de éxito o testimonios de clientes satisfechos que puedan compartir?',
            subtitle:
              'Sí, contamos con casos de éxito y testimonios de clientes satisfechos que podemos compartir. Nuestros clientes son fundamentales para nosotros, y valoramos su experiencia y retroalimentación.',
          },
          {
            title: '¿Cúal es el costo por alguna prueba de concepto?',
            subtitle:
              'Ninguno, son gratuitas. Nuestro objetivo al ofrecer pruebas de concepto gratuitas es permitir a las empresas explorar cómo nuestras soluciones pueden abordar sus desafíos específicos y proporcionarles una idea clara de su funcionalidad y potencial impacto. Queremos asegurarnos de que nuestros clientes tomen decisiones informadas basadas en una experiencia práctica y tangible.',
          },

        ].map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={2}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
