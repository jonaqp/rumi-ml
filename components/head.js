import NextHead from "next/head";
import {string} from "prop-types";

const defaultDescription = ''
const Head = (props) => (
    <NextHead>
        <meta charset="UTF-8"/>
        <title>{props.title || ''}</title>
        <meta name="description" content={props.description || defaultDescription}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png"/>
        <link rel="apple-touch-icon" href="/static/touch-icon.png"/>
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882"/>
        <link rel="icon" href="/static/favicon.ico"/>
        <link rel="icon" href="/static/favicon.ico"/>

        <link rel="stylesheet" href="/static/themes/assets/fonts/csscad4.css?family=Dosis:400,500,600,700%7COpen+Sans:400,600,700" />

        <link rel="stylesheet" href="/static/themes/assets/vendor/strokegap/style.css" />
        <link rel="stylesheet" href="/static/themes/assets/vendor/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/static/themes/assets/vendor/linearicons/style.css" />
        <link rel="stylesheet" href="/static/themes/assets/vendor/bootstrap/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/themes/assets/vendor/slick-carousel/slick/slick.css" />
        <link rel="stylesheet" href="/static/themes/assets/vendor/fancybox/dist/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/static/themes/assets/vendor/animate.css/animate.min.css" />

        <link rel="stylesheet" href="/static/themes/assets/css/style.css" />

    </NextHead>
)

Head.propTypes = {
    title: string,
    description: string
}

export default Head
