import React from 'react';

function Sobre(props) {

    return (
        <div class="container" style={{ height: "600px" }}>
            <div class="row justify-content-md-center">
                <div class="col align-self-center" align="center">
                    <img src="./resources/gointeroplogo.png" width="300" height="300" alt="GOInterop Tecnologia" />
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col align-self-center" align="center">
                    <h6>Se vai integrar, GOInterop!</h6>
                    <br />
                    <p>A GOInterop tecnologia é uma empresa especializada em interoperabilidade em saúde.</p>
                    <h6>Fale conosco</h6>
                    <a href="https://gointerop.com">www.gointerop.com</a>
                </div>
            </div>
        </div>
    );
} export default Sobre;
