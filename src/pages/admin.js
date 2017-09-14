import React from "react";
import Helmet from 'react-helmet';

export default () => {
    return (
        <div>

            <Helmet>
                <title>Admin</title>
                <link rel="stylesheet" href="https://unpkg.com/netlify-cms@~0.4/dist/cms.css" />
                <script src="https://unpkg.com/netlify-cms@~0.4/dist/cms.js"></script>
            </Helmet>


        </div>
    )
}
