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
                            Soy ingeniero de sistemas, me gusta el desarrollo, así como también analizar los datos
                            y usando practicas encontradas trato de brindar una solución a los problemas, y no falta una taza de Café
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <img src="/static/themes/assets/img/how-work/me.jpg" className="bg-primary rounded-circle u-mb-20"/>
                        <div className="clearfix"/>
                        <div className="row">
                            <p>
                                <ol>
                                    <li>Me encanta divertirme, como también compartir conocimiento</li>
                                    <li>Intentar crear una plataforma util y sea util para los demas. como <br /> ingeniero es parte de la formación</li>
                                    <li>He tenido buenas amistades entre estadísticos, físicos, matemáticos,<br />
                                        economistas se aprende conocimiento de todo un poco , mi valor es ser innovador <br />
                                        o tener la capacidad de resolver problemas.
                                    </li>
                                    <li>Análisis de la Información</li>
                                    <li>Machine learning(supervisado)</li>
                                    <li>Procesamiento de volúmenes de imágenes(CNN)</li>
                                    <li>Generando valor a los datos</li>
                                    <li>Tratando de crear un chabot(Deep Learning)</li>
                                </ol>
                                <ul className="list-inline social social-rounded social-white mt-4">
                                    Linkedin:
                                    <li className="list-inline-item">
                                       <a href="https://www.linkedin.com/in/jonaqp/"><i className="fa fa-linkedin" /></a>
                                    </li>
                                </ul>
                            </p>
                        </div>

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

                                <li><i className="fa fa-check mr-2 color-primary"/>Soy ingeniero de sistemas</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Tengo 28 años</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Estudiante de: Maestría data Science</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Me gusta lo datos</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Me gusta la programación</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Me gusta la analítica</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>8 años developer/ 1 año y medio como data science</li>
                            </ul>
                            <ul className="list-unstyled u-fw-600 u-lh-2">
                                <li><b>Trabajo con</b></li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Spark - Pyspark - Scala</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Python3</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Nodejs</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Go</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>C++</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Javascript ES7</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Docker</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Hadoop</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>AWS, GC, HEROKU</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Jenkis, sonar</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>TESTING</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Visualizaciones(Tableau)</li>
                                <li><i className="fa fa-check mr-2 color-primary"/>Base de datos(SQL y NOSQL)</li>

                            </ul>
                        </p>
                    </div>
                </div>

                <hr className="u-my-md-80"/>
                <div className="row">

                    <div className="media mt-12">
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2"/>
                        <div className="media-body">
                            <h4 className="h5">
                                La Plataforma
                            </h4>
                            <p>
                                Esta Plataforma que vengo avanzando de a pocos es un aplicación web
                                o local en la cual haga que conecte a múltiple base de datos, corra
                                algoritmos, procese volumenes de información y vote services API directo a una aplicación
                                container Docker-nodejs con visualizacion 3D, seria como una Integracion de Rapipminer o spotfire
                                tableau, y contenedor bajo microservicios.
                                <br />
                                Tengo que suerte de conocer gente muy buena e interesante con mucha experiencia y
                                me ha dicho que la idea es buena para procesar información a costo gratis, aunque
                                no he visto en el Perú algo así.
                            </p>
                        </div>
                    </div>
                    <div className="media mt-12">
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2"/>
                        <div className="media-body">
                            <h4 className="h5">
                                La Idea
                            </h4>
                            <p>
                                Por lo que se busca es resolver problemas con ML aplicando casi todas las técnicas posibles
                                y es gratis cuando se libere.<br />
                                Por otro lado estoy tratando de ver que sean micro-modulos de integración para que otros usuarios
                                si gustan compartan problemas y algoritmos y la plataforma pueda soportarlo.<br />
                                El tratamiento de las variables son los que darán valor.<br />
                                Espero tener tiempo de a poco avanzar y lanzarlo
                            </p>
                        </div>
                    </div>
                    <div className="media mt-12">
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2"/>
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
                        <span className="icon icon-Bulb text-primary u-fs-28 mr-3 mt-2"/>
                        <div className="media-body">
                            <h2 className="mb-4">
                                Un Desafío
                            </h2>
                            <p>
                                Mi compañera trabaja en banca trabaja en crediticios, le es muy difícil dar créditos
                                por mas experiencias que tenga, su banco no cuenta con un sistema o una aplicación que
                                pueda resolver si su usuario pertenece a una categoría de pagadores o no pagadores o semi pagadores.
                                Le toca entrar a un DB buscar, ver historial creditico entre otras cosas más..<br />

                                hasta que llega a una conclusión, es muy tiempo muy valioso que pierde, mi compañera me cuenta
                                que tiene una solución posible pero no puede ya es un tiempo más de resolver buscar las variables..
                            </p>

                            <p>
                                <ul>
                                    <li className="mb-2">
                                        <b>Respuesta 1:</b>Como científico de datos. atacas el problema, defines...etc.
                                        RUMI-ML ya tiene algo que estoy avanzado con geolocalización las variables podrían
                                        ser seria longitud , latitud, dni, departamento formato RENIEC, entre otras a analizar
                                        usar " (K-mean)" te vota usuario por un tipo en un mapa(Leaflet) con los sectores a quienes
                                        is se les puede dar crédito, como está entrenado, podría poner el dni o ubicación y ya podría
                                        dar un análisis de qué tipo de sector que viene y dar o no el crédito. obviamente esto es
                                        algo básico ya que existen otro método,
                                        pero por el momento ya tiene algo con que ayudarse y con mejoras se podrá implementar otros algoritmos
                                    </li>
                                    <li className="mb-2">
                                        <b>Respuesta 2:</b>
                                        Como científico de datos. atacas el problema, defines...etc. en otros países a veces tienes
                                        que decirle en por "NO TE DOY EL CREDITO", posiblemente algunos empleados, mucho trabajo,
                                        mucho estrés no tiene las palabras adecuadas que decirle en otros modos porque no le das el
                                        crédito solicitado, con "Lenguaje Natural" se podría dar valor de texto a ciertas variables
                                        formando la frase y de la forma más bonita para decirle un NO
                                        y no se sienta discriminado suena muy duro, pero la realidad así se juega en el mundo bancario..
                                        <br/>
                                        tranquilamente el sistema votaría el texto y el usuario la leería sería una ayuda.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="media mt-12">
                        <div className="media-body">
                            <h4>&nbsp; &nbsp; &nbsp;&nbsp;
                                PROBLEMA ATACADO CON AYUDA DE CIENCIAS DE LOS DATOS
                            </h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <hr className="m-0"/>

    </Layout>


export default IndexPage
