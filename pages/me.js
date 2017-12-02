import React from "react";
import Layout from "../layouts/main";


const divStyle = {
    background: '#8B3AC6',
    backgroundImage: '-webkit-linear-gradient(left, #8B3AC6 0%, #4D3399 100%)',
    backgroundImage: '-o-linear-gradient(left, #8B3AC6 0%, #4D3399 100%)',
    backgroundImage: '-webkit-gradient(linear, left top, right top, from(#8B3AC6), to(#4D3399))',
    backgroundImage: 'linear-gradient(to right, #8B3AC6 0%, #4D3399 100%)',
    backgroundRepeat: 'repeat-x',
    filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF8B3AC6', endColorstr='#FF4D3399', GradientType=1)"
};

const IndexPage = () =>
    <Layout>
        <section className="u-py-100 u-pt-lg-200 u-pb-lg-150 u-flex-center" style={divStyle}>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center text-white">
                        <h1 className="text-white">
                            Who I am?
                        </h1>
                        <div className="u-h-4 u-w-50 bg-white rounded mx-auto my-4"/>
                        <p className="lead">
                            ES:
                            Soy ingeniero de sistemas , me gusta el desarrollo asi como tambien analizar los datos y
                            usando practicas encontradas trato de brindar una solucion a los problemas,
                            y no falta una taza de Cafe (=
                            <br /><br />

                            EN:
                            Im a systems engineer, I like the development as well as analyze the data and using
                            found practices, I try to provide a solution to the problems, and
                            Do not miss a cup of coffee =)
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 my-4 ">
                        <img src="/static/themes/assets/img/how-work/me.jpg" className="bg-primary rounded-circle u-mb-20"/>

                    </div>
                    <div className="col-lg-5  my-4 ml-auto">
                        <h4 className="u-w-50 u-h-50 bg-primary rounded-circle u-flex-center text-white box-shadow-primary u-mb-10">
                        </h4>
                        <h2>
                            JONATHAN
                        </h2>
                        <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40"/>
                        <p>
                            <ul className="list-unstyled u-fw-600 u-lh-2">

                                <li><i className="fa fa-check mr-2 color-primary" />Soy ingeniero de sistemas</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Tengo 28 años</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Estudiante de: Maestria data Science</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Me gusta lo datos</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Me gusta la programacion</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Me gusta la analitica</li>
                                <li><i className="fa fa-check mr-2 color-primary" />8años como developer/ 1año data science</li>
                            </ul>
                            <ul className="list-unstyled u-fw-600 u-lh-2">
                                <li><b>Trabajo con</b></li>
                                <li><i className="fa fa-check mr-2 color-primary" />Spark - Pyspark</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Pyton</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Nodejs</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Go</li>
                                <li><i className="fa fa-check mr-2 color-primary" />C+</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Javascript ES7</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Docker</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Haddop</li>
                                <li><i className="fa fa-check mr-2 color-primary" />AWS, GC, HEROKU</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Jenkis, sonar</li>
                                <li><i className="fa fa-check mr-2 color-primary" />TESTING</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Multiples Base de datos</li>
                                <li><i className="fa fa-check mr-2 color-primary" />..etc</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Machine learning(supervisado)</li>
                                <li><i className="fa fa-check mr-2 color-primary" />Procesamiento de volumenes de imagenes(CVN)</li>
                                <li><i className="fa fa-check mr-2 color-primary" />generando valor a los datos</li>
                                <li><i className="fa fa-check mr-2 color-primary" />tratando de crear un chabot a mano (probando)</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <ul className="list-unstyled u-fw-600 u-lh-2">
                        <li>me encanta divertirme, como tambien compartir conocimiento</li>
                        <li>He tenigo buenas amistades entre estadisticos, fisicos, matematicos, economistas
                            se aprende de todo un poco mi parte o valor es ser innovador o tener la capacidad de
                            resolver problemas.
                        </li>
                    </ul>
                </div>
                <hr className="u-my-md-80"/>
                <div className="row">

                    <div className="media mt-12">
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2" />
                        <div className="media-body">
                            <h4 className="h5">
                                La Platforma
                            </h4>
                            <p>
                                Esta Plataforma que vengo avanzando de a pocos es un aplicacion web o local en la cual haga
                                que conecte a multi database , corra algoritmos uno o varios. y vote
                                services API directo a una aplicacion por areas de un empresa.
                                <br />
                                Tengo que suerte de conocer gente muy buena, y con mucha experiencia y me ha dicho que la idea es buena, aunque no he visto en el Peru algo asi.

                            </p>
                        </div>
                    </div>
                    <div className="media mt-12">
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2" />
                        <div className="media-body">
                            <h4 className="h5">
                                La Idea
                            </h4>
                            <p>
                                Por lo que se busca es resolver un problema con ML aplicando casi todas las tecnicas posible y es gratis cuando se libere.
                                suena sencillo pero el tratamiento de las variables son los que daran valor
                                Espero tener tiempo de a poco avanzar y lanzarlo
                            </p>
                        </div>
                    </div>
                    <div className="media mt-12">
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2" />
                        <div className="media-body">
                            <h4 className="h5">
                                La Arquitectura
                            </h4>
                            <p>
                                <img src="/static/themes/assets/img/how-work/arquitectura.png" className="bg-primary u-mb-20"/>
                            </p>
                        </div>
                    </div>

                    <div className="media mt-12">
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2" />
                        <div className="media-body">
                            <h2 className="mb-4">
                                El DESAFIO
                            </h2>
                            <p>
                              Mi compañera trabaja en banca trabaja en crediticios, le es muy dificil dar creditos por mas experiencias que
                              tenga, su banco no cuenta con un sistema o una aplicacion que pueda resolver si su usuario pertenece
                              a una categoria de pagadores o no pagadores o semi pagadores.le toca entrar a un DB buscar, ver historial creditico
                                 entre otras cosas mas.<br />
                                hasta que llega a una conclusion, es muy tiempo muy valioso que pierde, mi compañera me cuenta quetiene una solucion posible pero no
                                puede ya es un tiempo mas de resolver buscar las variables.
                            </p>

                            <p>
                                <ul>
                                    <li className="mb-2">
                                        <b>Respuesta 1:</b>Como cientifico de datos. atacas el problema , defines...etc.
                                       RUMI-ML ya tiene algo que estoy avanzado con
                                        geolocalizon las variales podrian ser seria logintud , latitud, dni, departamento formato RENIEC, entre otras a analizar
                                        usar "machine learning(K-mean)" te vota usuario por un tipo en un mapa(Leaflet) con lo sectores a quienes is se les
                                        puede dar credito, como esta entrenado, podria poner el dni o ubicacion y ya podria dar un analisis de que tipo de sector que viene
                                        y dar o no el credito. obviamente esto es algo basico ya que existen otro metodos pero por el momento ya tiene algo con que ayudarse.
                                    </li>
                                    <li className="mb-2">
                                        <b>Respuesta 2:</b>Como cientifico de datos. atacas el problema , defines...etc.
                                        en otros paises aveces tienes que decirle en por <b>"NO TE DOY EL CREDITO"</b>, posiblementes algunos empleados, mucho
                                        trabajo, mucho estres no tiene las palabras adecuadas que decirle en otros modos por que no le das el credito solicitado,
                                        con "Lenguaje Natural" se podria dar valor a ciertas variables formando la frase y mas bonita para decirle un NO y no
                                        se sienta discriminado. tranquilamente el sistema votaria el texto y el usuario la leeria seria una ayuda.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>


                    <div className="media mt-12">
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2" />
                        <div className="media-body">
                            <h4 className="h5">
                                TANTAS COSAS POR HACER, PROCESAR, YA TENGO ALGUNOS AMIGOS ECONOMISTAS QUE ME ESTA AYUDANDO CON LOS MODELOS
                                TIEMPO AL TIEMPO.
                            </h4>

                        </div>
                    </div>
                </div>

            </div>
        </section>

        <hr className="m-0"/>

    </Layout>


export default IndexPage
