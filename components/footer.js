

const Footer = () => (
    <footer>
        <section className="bg-gray-v2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <img src="/static/themes/assets/img/logo-inverse.png" />
                            <p className="u-my-40">
                                Aplicación gratuita para trabajar y procesar grandes volúmenes de información utilizando Spark y otras herramientas y metodologías,
                                se basa en problemas y cómo el aprendizaje automático puede resolverlo.
                            </p>

                    </div>
                    <div className="col-lg-2 col-md-6 ml-auto mb-5 mb-lg-0">
                        <h4>Links</h4>
                        <div className="u-h-4 u-w-50 bg-primary rounded mt-3 u-mb-40" />
                        <ul className="list-unstyled u-lh-2">
                            <li><a href="/">Inicio </a> </li>
                            <li><a href="/me">Me </a> </li>
                            <li><a href="/download">Descargar </a> </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 ml-auto mb-5 mb-lg-0">
                        <h4>Contact Info</h4>
                        <div className="u-h-4 u-w-50 bg-primary rounded mt-3 u-mb-40" />
                        <ul className="list-unstyled">

                            <li className="mb-2">
                                <span className="icon icon-Mail text-primary mr-2" />
                                <a href="mailto:jony327@gmail.com">jony327@gmail.com</a>
                            </li>
                            <li className="mb-2">
                                <span className="icon icon-Pointer text-primary mr-2" /> Lima, PE
                            </li>
                        </ul>
                        <ul className="list-inline social social-rounded social-white mt-4">
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/jonaqp/"><i className="fa fa-linkedin" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="u-py-40">
            <div className="container">
                <p className="mb-0 text-center">
                    &copy; Copyright 2017  -  Created by jonathan Quiza - PE
                </p>
            </div>
        </section>
    </footer>

)

export default Footer