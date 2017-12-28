import React from 'react'
import Layout from '../layouts/main'


const  divStyle = {
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
                          Rumi-ML
                      </h1>
                      <div className="u-h-4 u-w-50 bg-white rounded mx-auto my-4" />
                      <p className="lead">
                          Aplicación para correr algoritmos usindo Spark - open source
                      </p>
                  </div>
              </div>
          </div>
      </section>
          <section>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-5 my-4 ">
                          <img src="/static/themes/assets/img/how-work/get_data.png"/>
                      </div>
                      <div className="col-lg-5  my-4 ml-auto">
                          <h4 className="u-w-50 u-h-50 bg-primary rounded-circle u-flex-center text-white box-shadow-primary u-mb-20">
                              01
                          </h4>
                          <h2>
                              GET DATA
                          </h2>
                          <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40"/>
                          <p>
                            <ul>
                                <li>Identify the Problem</li>
                                <li>Describe the expected outcome</li>
                                <li>Identify data source </li>
                                <li>Fix incorrect Data</li>
                                <li>Fix missing</li>
                            </ul>
                          </p>
                      </div>
                  </div>

                  <hr className="u-my-md-80"/>

                  <div className="row">
                      <div className="col-lg-5  my-4 mr-auto">
                          <h4 className="u-w-50 u-h-50 bg-primary rounded-circle u-flex-center text-white box-shadow-primary u-mb-20">
                              02
                          </h4>
                          <h2>
                              PREPARE DATA
                          </h2>
                          <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40"/>
                          <p>
                              <ul>
                                  <li>Combine</li>
                                  <li>Enrich</li>
                                  <li>Apply business rules </li>
                                  <li>Hypothesize</li>
                                  <li>Build Analytic Models</li>
                                  <li>Diagnostics</li>
                                  <li>Evaluate</li>
                                  <li>Metrics and Precision</li>
                              </ul>
                          </p>
                      </div>
                      <div className="col-lg-5 my-4 ">
                          <img src="/static/themes/assets/img/how-work/prepare_data.png"/>
                      </div>
                  </div>
                  <hr className="u-my-md-80"/>
                  <div className="row">
                      <div className="col-lg-5 my-4 ">
                          <img src="/static/themes/assets/img/how-work/build_data.png"/>
                      </div>
                      <div className="col-lg-5  my-4 ml-auto">
                          <h4 className="u-w-50 u-h-50 bg-primary rounded-circle u-flex-center text-white box-shadow-primary u-mb-20">
                              03
                          </h4>
                          <h2>
                              BUILD DATA
                          </h2>
                          <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40"/>
                          <p>
                              <ul>
                                  <li>Report</li>
                                  <li>Alert</li>
                                  <li>New Insights </li>
                                  <li>Interactive KPI</li>
                                  <li>Recommendations</li>
                                  <li>Measure ROI</li>
                              </ul>
                          </p>
                      </div>
                  </div>

              </div>
          </section>

          <hr className="m-0"/>

  </Layout>


export default IndexPage
