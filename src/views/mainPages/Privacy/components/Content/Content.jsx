import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PrivacySection = ({
  title,
  description,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
  text10,
}) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text1}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text2}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text3}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text4}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text5}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text6}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text7}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text8}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text9}
      </Typography>
      <Typography
        component={'p'}
        sx={{ marginBottom: 2 }}
        color={'textSecondary'}
      >
        {text10}
      </Typography>
      <Typography component={'p'} color={'textSecondary'}>
        {description}
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  const data = [
    {
      title: '1. Objeto de la utilización de información personal',
      text1:
        'Los datos personales o sensibles que nos proporcione, tendrán el tratamiento y propósito del responsable, nuestras subsidiarias y/o afiliadas y/o terceros, que en forma enunciativa, pero no limitativa se describe a continuación: ',
      text2:
        'Base de datos de clientes o proveedores: de conformidad con las políticas internas y legales del responsable, es necesario recabar la información personal de nuestros clientes o proveedores para la celebración de operaciones comerciales o contractuales con los mismos.',
      text3:
        'Promoción de Productos y Servicios: lo cual incluye toda la promoción sobre ofertas en nuestros servicios o productos y la implementación de nuevos productos o servicios ofrecidos a terceros.',
      text4:
        'Asimismo su información personal será utilizada para proveer los servicios y productos que ha solicitado, recibir los servicios o productos que nos ha ofertado, informarle sobre cambios en los mismos y evaluar la calidad del servicio que le brindamos, o en su caso, recibimos.',
      text5:
        'Cumplimiento contractual o comercial: En general, sus datos personales serán tratados y utilizados para dar cumplimiento a las obligaciones contractuales en su caso, existentes con el responsable.',
      description:
        ' Para el acceso, uso, manejo, almacenamiento, transferencia o disposición de los datos que se recaben para recibir u otorgar los servicios y productos correspondientes, y/o informar sobre cambios o nuevos requerimientos en los productos o servicios y que estén relacionados con los contratos celebrados, y/o dar cumplimiento a obligaciones contraídas, y/o evaluar la calidad del servicio o productos brindados a usted o por usted, con el propósito entre otros, de identificarle, ubicarle, comunicarle, contactarle, enviarle información, detentar una base de datos, así como su transmisión y divulgación a terceros por cualquier medio que permita la Ley para efectos de que estos últimos lleven a cabo el cumplimiento de cualquier obligación contractual del Responsable frente al Titular; tales como pago de servicios, pago de honorarios, referencias crediticias, auditorías corporativas o fiscales efectuadas al Responsable. El uso de los Datos Personales y Sensibles tendrá relación directa con la relación comercial que usted tiene con la Responsable en su carácter de cliente, proveedor o similar. La temporalidad del manejo de los Datos Personales y/o Datos Sensibles será indefinida a partir de la fecha en que usted los proporcionó al Responsable, pero desde luego usted podrá oponerse en cualquier momento que lo considere oportuno.',
    },
    {
      title: '2. Datos personales recabados',
      text1:
        'Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: a) cuando usted nos los proporciona directamente; b) cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea, y c) cuando obtenemos información a través de otras fuentes que están permitidas por la ley.',
      text2:
        'Recabamos sus datos personales de forma directa cuando usted mismo nos los proporciona por diversos medios. Los datos que obtenemos por este medio y cuando usted visita nuestro sitio de Internet, al utilizar nuestros servicios u ofertar la prestación de sus servicios pueden ser, de manera enunciativa, más no limitativa:',
      text3:
        'Nombre completo, domicilio, fecha y lugar de nacimiento, ocupación, profesión, actividad o giro de su negocio, teléfono, correo electrónico, C.U.R.P., R.F.C, referencias comerciales y personales, copia de alguna identificación oficial, información de representantes y apoderados legales, todo tipo de información legal, fiscal y financiera, así como información de personal con facultades para celebrar y confirmar operaciones con nosotros.',
      text4:
        'Toda aquella información que el titular haya proporcionado y/o le proporcione al responsable a lo largo de la relación contractual o comercial que establezcan.',
      text5:
        'La recolección de datos que realiza el responsable es de buena fe y por tal motivo presume que los mismos son verídicos, correctos, completos e identifican al titular que los suministra y/o provee, por lo que es responsabilidad del titular que los datos que éste le proporcione al responsable cumplan con tales características y se actualicen en la medida que se requiera. De igual forma, Telcel se reserva el derecho de ejercer las acciones que considere pertinentes en caso de falsedad de datos.',
      description: '',
    },
    {
      title: '3. Datos Personales Sensibles, Financieros y Patrimoniales',
      text1:
        'Le informamos que para cumplir con las finalidades previstas en este aviso de privacidad, no recabamos ni tratamos datos personales sensibles directamente.',
      text2:
        'Para las finalidades del presente Aviso de Privacidad, serán tratados Datos Financieros y Patrimoniales, como aquellos referentes a sus estados financieros, ingresos, deudas, actas constitutivas y documentación de propiedades y acciones.',
      text3:
        'Para el tratamiento de estos Datos Personales Financieros y Patrimoniales, requerimos de su consentimiento expreso, de conformidad con el artículo 8 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, por lo que al utilizar nuestros servicios o firmar el presente aviso de privacidad nos otorga el consentimiento expreso antes descrito para que sus datos sean tratados conforme a los términos y condiciones del presente Aviso de Privacidad.',
      text4: '',
      text5: '',
      description: '',
    },
    {
      title:
        '4. Derechos de acceso, rectificación, cancelación, oposición y revocación (“ARCO”) del consentimiento',
      text1:
        'En todo momento, usted podrá revocar el consentimiento que nos ha otorgado para el tratamiento de sus datos personales, a fin de que dejemos de hacer uso de los mismos. Para ello, es necesario que presente su petición vía correo electrónico en contacto@sycod.com.',
      text2:
        'Usted tiene derecho de acceder a los datos personales que poseemos y a los detalles del tratamiento de los mismos, así como a rectificarlos en caso de ser inexactos o incompletos; cancelarlos cuando considere que no se requieren para alguna de las finalidades señalados en el presente aviso de privacidad, estén siendo utilizados para finalidades no consentidas o haya finalizado la relación contractual o de servicio, o bien, oponerse al tratamiento de los mismos para fines específicos. En todo momento, usted podrá revocar el consentimiento que nos ha otorgado para el tratamiento de sus datos personales, a fin de que dejemos de hacer uso de los mismos.',
      text3: 'Su solicitud deberá contener la siguiente información:',
      text4:
        '1. El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud.',
      text5:
        '2. Los Documentos que acrediten la identidad, en su caso, la representación legal del titular.',
      text6: '3. La persona a la que fueron entregados sus datos personales.',
      text7: '4. El propósito para el cual nos aportó sus datos personales.',
      text8:
        '5. La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados.',
      text9:
        '6. Cualquier otro elemento o documento que facilite la localización de datos personales.',
      text10: '7. Todo lo establecido en el artículo 29 de la Ley.',
      description: '',
    },
    {
      title: '5. Transferencia de Datos',
      text1: '',
      description:
        'Le informamos que sus datos personales pueden ser transferidos y tratados dentro y fuera del país, a nuestras subsidiarias, afiliadas, partes relacionadas o terceros, por personas distintas a esta empresa. En ese sentido, su información puede ser compartida con las empresas que requieran de nuestros servicios, asimismo el Titular de los datos personales entiende y acepta que el Responsable está autorizado para transferir los Datos a terceros o empresas, a nuestras subsidiarias, afiliadas y partes relacionadas respetando en todo momento la finalidad de este Aviso.',
    },
    {
      title: '6. Modificaciones al Aviso de Privacidad',
      text1: 'Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos o la recepción de los mismos. Estas modificaciones estarán disponibles al público a través de nuestra página de Internet www.sycod.com ,en la sección de aviso de privacidad.',
      text2: 'Si usted considera que su derecho de protección de datos personales ha sido lesionado por alguna conducta de nuestros empleados o de nuestras actuaciones o respuestas, favor de informarlo a través del correo electrónico: contacto@sycod.com, con una descripción detallada de los motivos o razones que usted considere como violatorios de sus derechos.',
      description:
        'Consiento y autorizo que mis datos personales sean tratados conforme a lo previsto en el presente aviso de privacidad.',
    },
  ];
  return (
    <Box>
      {data.map((item, i) => (
        <Box key={i} marginBottom={i < data.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
