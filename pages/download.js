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
                            repository
                        </h1>
                        <div className="u-h-4 u-w-50 bg-white rounded mx-auto my-4"/>
                        <p className="lead">
                            <img src="/static/themes/assets/img/how-work/github.png" className="bg-primary u-mb-20"/>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <hr className="m-0"/>

    </Layout>


export default IndexPage
