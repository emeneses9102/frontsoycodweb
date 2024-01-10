import React, { Suspense } from 'react';
import './App.css';
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main as MainLayout } from './layouts';
import { Fixed as FixedLayout } from './layouts';
import {
  Home as HomeView,
  Solutions as SolutionsView,
  Members as MembersView,
  Blog as BlogView,
  Events as EventosView,
  Contact as ContactView,
  Privacy as PrivacyView,
  NotFound as NotFoundView,
} from './views/mainPages';
import {
  Honeywell as HoneywellView,
  Hpe as HpeView,
  Aruba as ArubaView,
  Redis as RedisView,
  Cradlepoint as CradlepointView,
  Fortinet as FortinetView,
  Lenovo as LenovoView,
  Vmware as VmwareView,
  Veeam as VeeamView,
  Hp as HpView,
  Tecnocontrol as TecnocontrolView
} from './views/partnersPages';
import { AllEvents as AllEventsView } from './views/eventPages';
import {
  Portafolio as PortafolioView,
  Redes as RedesView,
  Alambricas as AlambricasView,
  Celulares as CelularesView,
  Inalambricas as InalambricasView,
  Industriales as IndustrialesView,
  RedesIot as RedesIotView,
  Sdwan as SdwanView,
  Datacenter as DatacenterView,
  Hiperconvergencia as HiperconvergenciaView,
  BasedeDatos as BasedeDatosView,
  Virtualizacion as VirtualizacionView,
  Respaldos as RespaldosView,
  Nube as NubeView,
  Almacenamiento as AlmacenamientoView,
  SeguridadInformatica as SeguridadInformaticaView,
  Ciberseguridad as CiberseguridadView,
  AplicacionesMovilidad as AplicacionesMovilidadView,
  InternetCosas as InternetCosasView,
  AutomatizacionProcesos as AutomatizacionProcesosView,
  CentrosDistribucion as CentrosDistribucionRFIDView,
  LogisticaTransporte as LogisticaTransporteView
} from './views/solutionPages';

import WithLayout from './WithLayout';
// import LoadingSpinner from './common/components/UIElements/LoadingSpinnerMain';
import LoadingSpinner from './common/components/UIElements/LoadingSpinnerNew';

export default function App() {
  return (
    <Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route
            exact
            path="/"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={HomeView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/experiencias"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={AllEventsView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/soluciones"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={SolutionsView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianzas"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={MembersView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/blog"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={BlogView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/eventos"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={EventosView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/contacto"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={ContactView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/honeywell"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={HoneywellView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/hewlett-packard-enterprise"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={HpeView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/aruba-networks"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={ArubaView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/redis-enterprise"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={RedisView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/cradlepoint-connect-beyond"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={CradlepointView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/fortinet"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={FortinetView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/lenovo"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={LenovoView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/vmware"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={VmwareView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/veeam-software"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={VeeamView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/alianza/hewlett-packard"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={HpView}
                layout={MainLayout}
              />
            ))()}
          />
           <Route
            exact
            path="/alianza/tecnocontrol"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={TecnocontrolView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/aviso-de-privacidad"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={PrivacyView}
                layout={MainLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio-de-soluciones-tecnologicas"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={PortafolioView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio-de-soluciones-redes"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={RedesView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/redes/redes-alambricas"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={AlambricasView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/redes/redes-celulares"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={CelularesView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/redes/redes-inalambricas"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={InalambricasView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/redes/redes-industriales"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={IndustrialesView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/redes/redes-iot"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={RedesIotView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/redes/sd-wan"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={SdwanView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio-de-soluciones-data-center"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={DatacenterView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/datacenter/hiperconvergencia"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={HiperconvergenciaView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/datacenter/base-de-datos"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={BasedeDatosView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/datacenter/virtualizacion"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={VirtualizacionView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/datacenter/respaldos"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={RespaldosView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/datacenter/nube"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={NubeView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/datacenter/almacenamiento-san-y-nas"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={AlmacenamientoView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio-de-soluciones-en-seguridad-informatica"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={SeguridadInformaticaView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/seguridad-informatica/ciberseguridad"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={CiberseguridadView}
                layout={FixedLayout}
              />
            ))()}
          />
           <Route
            exact
            path="/portafolio-de-soluciones-en-aplicaciones-de-movilidad"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={AplicacionesMovilidadView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/aplicaciones-de-movilidad-iot/internet-de-las-cosas"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={InternetCosasView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/aplicaciones-de-movilidad-iot/automatizcion-de-procesos"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={AutomatizacionProcesosView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/aplicaciones-de-movilidad-iot/identificacion-por-radiofrecuencia"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={CentrosDistribucionRFIDView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="/portafolio/soluciones/aplicaciones-de-movilidad-iot/logistica-y-transporte"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={LogisticaTransporteView}
                layout={FixedLayout}
              />
            ))()}
          />
          <Route
            exact
            path="*"
            element={((matchProps) => (
              <WithLayout
                {...matchProps}
                component={NotFoundView}
                layout={MainLayout}
              />
            ))()}
          />
        </Routes>
      </Suspense>
    </Fragment>
  );
}
