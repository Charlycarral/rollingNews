import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Aboutus.css";

const Error404 = () => {
  return (
    <div class="pt-5 bgerro">
      <div className="d-flex flex-column   align-items-center container fluid">
        <h2 className="my-5 text-black fw-bold ">
          Hubo un problema para encontrar la pagina... Ups
        </h2>
        <img
          id="gif"
          src="https://lh3.googleusercontent.com/fife/AAWUweUc3u8vO-HI9wgRjNR5CvY0TRm0bixCtYhCDR8A1K6b_U65tti_wlF0KVjzhCmRyZP8Dehi92689tFB-hEgFDk4nudI6x8UtIaZGg74cYuR_6WIPKA2_ZEIkfzljhC46fB7X6Mq4ZwssPIFfPnc83UIZ4ib2SP4dVl4EEAi8pX47justLYyqrLlMVew9uJ6LR1-IDHqbTsfS5zawRlw0Qjks5L3zATfEDMZ63MYU_ORc7kmXmtBdYNPlUPekFW0AXNDcOrco_VDYnbeJ9v5REVO-ryJ7fBoPKEeTHAwDiuiSoqZBX8N3Cmr1CdHBZgFUTJop4kHZu9cw8mqdJvr6W_1-HU5okN4d3f6-HrXmeLpwaSdz-UlmVMiRRspWqShKAa0IHB8m2Z_subQbISdqXR83W0zm2w9_PeWhkorrEdQXBiS-ni5B_b1tNQdb7JkV3W4WxhVU_4jpV1MhJevgz7Pv8d2y1Dkbc1Qvj7je90TBbVEG9Thpktc6JkokoG8UlDXZU5xHCdBiY0e3QhNavTynEGNzG0U73j7SWPlUThy_RTt2Jn6FtEPGuMgnW-5gRLqC2uaIMsFhbNyRYGreStZFYyP1TAhNWMUUpYpYhu2Ij8k3tPKwOaIH-Zmndl2CQgTz7dzuiJ392HAV6_TtQPMm7-WplS49wV_Jxk8guV2IinCWD-_kshE3cv0-TndDv4JvR-WANdzavtAVupmIUFBpR8B4iN-4w=w1868-h942-ft"
          alt="gif"
          className="w-75"
        />
        <p className="fs-3">
          Es probable que el link que seguiste este roto o no exista...
        </p>

        <Link className="mb-5" to="/">
          {" "}
          <Button variant="danger">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
