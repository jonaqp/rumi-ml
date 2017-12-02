import React from "react";
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class SiteDocument extends Document {

    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();

        return (
            <html>
            <Head>
                {styleTags}
            </Head>
            <body id='top'>
                {main}
                <NextScript />
                <script src="/static/themes/assets/vendor/jquery/dist/jquery.min.js"></script>
                <script src="/static/themes/assets/js/bundle.js"></script>
                <script src="/static/themes/assets/js/fury.js"></script>
            </body>
            </html>
        )
    }
}