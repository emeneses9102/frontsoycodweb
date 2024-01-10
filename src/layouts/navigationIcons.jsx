import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CellTowerIcon from '@mui/icons-material/CellTower';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import PolicyIcon from '@mui/icons-material/Policy';
import FiveGIcon from '@mui/icons-material/FiveG';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SdCardIcon from '@mui/icons-material/SdCard';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DnsIcon from '@mui/icons-material/Dns';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const pages = [
  {
    title: 'Páginas Principales',
    id: 'main-pages',
    pages: [
      {
        title: 'Inicio',
        href: '/',
        icon: <HomeIcon />
      },
      {
        title: 'Soluciones',
        href: '/soluciones',
        icon: <TipsAndUpdatesIcon />
      },
      {
        title: 'Alianzas',
        href: '/alianzas',
        icon: <Diversity3Icon />
      },
      {
        title: 'Blog',
        href: '/blog',
        icon: <RateReviewIcon />
      },
      {
        title: 'Eventos',
        href: '/eventos',
        icon: <CalendarMonthIcon />
      },
      {
        title: 'Contacto',
        href: '/contacto',
        icon: <ContactMailIcon />
      },
    ],
  },
  {
    title: 'Portafolio de Soluciones',
    id: 'solutions-pages',
    pages: [
      {
        title: 'Redes',
        href: '/portafolio-de-soluciones-redes',
        icon: <CellTowerIcon />
      },
      {
        title: 'Datacenter',
        href: '/portafolio-de-soluciones-data-center',
        icon: <CorporateFareIcon />
      },
      {
        title: 'Seguridad informática',
        href: '/portafolio-de-soluciones-en-seguridad-informatica',
        icon: <VerifiedUserIcon />
      },
      {
        title: 'Aplicaciones de Movilidad (IoT)',
        href: '/portafolio-de-soluciones-en-aplicaciones-de-movilidad',
        icon: <PrecisionManufacturingIcon />
      },
    ],
  },
  {
    title: 'Alianzas',
    id: 'auth-pages',
    pages: [
      {
        title: 'Honeywell',
        href: '/alianza/honeywell',
        icon: <PointOfSaleIcon />
      },
      {
        title: 'Aruba',
        href: '/alianza/aruba-networks',
        icon: <CellWifiIcon />
      },
      {
        title: 'Lenovo',
        href: '/alianza/lenovo',
        icon: <StorageIcon />
      },
      {
        title: 'Redis',
        href: '/alianza/redis-enterprise',
        icon: <MemoryIcon />
      },
      {
        title: 'Fortinet',
        href: '/alianza/fortinet',
        icon: <PolicyIcon />
      },
      {
        title: 'Cradlepoint',
        href: '/alianza/cradlepoint-connect-beyond',
        icon: <FiveGIcon />
      },
      {
        title: 'Vmware',
        href: '/alianza/vmware',
        icon: <AddToQueueIcon />
      },
      {
        title: 'Veeam',
        href: '/alianza/veeam-software',
        icon: <SdCardIcon />
      },
      {
        title: 'Hewlett Packard',
        href: '/alianza/hewlett-packard',
        icon: <LaptopMacIcon />
      },
      {
        title: 'Hewlett Packard Enterprise',
        href: '/alianza/hewlett-packard-enterprise',
        icon: <DnsIcon />
      },
    ],
  },
  {
    title: 'Redes Sociales',
    id: 'socialnetworks-pages',
    pages: [
      {
        title: 'Facebook',
        href: 'https://www.facebook.com/SYCOD4.0/',
        icon: <FacebookIcon />
      },
      {
        title: 'Twitter',
        href: 'https://twitter.com/grupo_sycod',
        icon: <TwitterIcon />
      },
      {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/company/sycod-mx/mycompany/',
        icon: <LinkedInIcon />
      },
      {
        title: 'Youtube',
        href: 'https://www.youtube.com/channel/UCbqVgRQkuyyOAPaVoWHowmA/featured',
        icon: <YouTubeIcon />
      }
    ],
  },
];
