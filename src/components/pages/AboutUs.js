import React from "react";
import "./Aboutus.css";
import { Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="bg-light">


   
    <div className="mt-5 pt-3 container fuenteTitulosAdmin ">
      <div className="main">
        <div clasName="texto mt-5">
          <h1 className="text-center mt-5 mb-4 pb-4 fuenteTitulosAdmin fw-bold bordetabla">
            Acerca de Nosotros
          </h1>
          <p id="aboutus">
            ¿Quiénes somos? Somos un equipo de desarrolladores web emprendidos
            en el mundo de las noticias, cada uno pasional con su categoría y/o
            nicho. Creamos RollingNews para traerte las noticias que importan y
            lo mas rápido posible. Estamos para vos.
          </p>
        </div>
      </div>
      <h2 className="text-center my-5 fw-bold">Nuestro Equipo</h2>
      <div className="row">
        <div className="col-12 w-100">
          <Card className="">
            <Card.Img
              variant="top"
              className="w-25 img-fluid "
              src="https://lh3.googleusercontent.com/fife/AAWUweXaMNWPTu499HyAiMLTP1hNntOvYVMHiFtWQFrrojKU_On6D_1sfvuqW6i-QvrK2oYH2uH2pmgueBSeA88LR15_TWXCb3-hWmuYOok7R_d6pcu9-SEfM6ohvsN5G5xL9d_UpdxOLJYKus9KDPlh-Ci3I7QknWYlWXpcEfdrAFyS_vicDPIr1VyZ88W2PqMu-KY4vB81bWIyWT07Z7VO6hLfjWYgDaHkgJMXmJEL3p2uSjeNWWoYLcz7Jt0y9opgB3vncC4xdsSJSXeTFasxCTBAQVUwck_vt6hR9eDRH0sT4i3mn4TG0b6ZAYKEZ9EjmE2eOUKkHIMdUhU6LlmBEN4S0Ed2QE6lt5sC3MndIcCH_zJ8192RM4bY09HyZoEy6sVRTqOaIXSsAHvdcCFju1gg4_tyxPnDfySQLEC6rnpKQG7_CfZjYQHPUWXF4ZngwhoMz9tR8o1xofNOhZDAsg8ND5JRi9SZUN_x49CsLJTmgBcIbx2RKN5ACYAkheuhYm0UNbr57MdBmKsVBrhC4Ae2Ly7dmCwYQMt5yKOpnAAg4x_pAMNxwnEJHVJ5Zx2HjCDsqGZ2a-UbFn8awfyK32LemrAcZr42xnypAv_2YhNgycNMcfF18bZ_XidlcSPOQAxkqhcdsu3CltZqL07uCCqagVsQdhiaa1n5ezTSsJzotTTouQGLJ29FRbpjzl1U9Hn5M-rnD0qTa1BCgaFAgI-gCnPJGoo7Kw=w1063-h922-ft"
            />
            <Card.Body>
              <Card.Title className="fw-bold fs-3">Carlos Carral</Card.Title>
              <Card.Text className="lead">
                El lider del grupo, sin él, el equipo entero se cae. Siempre
                pendiente de que las cosas salgan bien y acordes. Tambien tiene
                una fascinación por la política, así que es el encargado de
                traernos las mejores notas a RollingNews.
              </Card.Text>
              <Card.Text>
                <p className="correo">carloscarral1@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 w-100">
          <Card>
            <Card.Img
              variant="top"
              className="w-25"
              src="https://lh3.googleusercontent.com/fife/AAWUweV3HBJzVXyy1eUjhY4uPT7OEV-bjC8abjXsT3teGrWK_gX5psdqFNm6vfB2FnMxG-DxK_sn8Gkx5OyrNidh2DOVVcvqJloZm4WRHEAnTCL-_OmJGF_k2k2hjldjngktR9LT3usaHCAKEy4247LolbACSByRvKRwiFx2dB6lyFct1cHWCfF5e-8S-PzkPl06qgX1LiVKsG5XoF5KNVB97vo2Q7nwHcq3TQZIpvIthJIFEqdYHtFfqhGLQFz8DR3hjo6J9qt0cBJ1hYhMCvZObN2RR4C61-XULelwdwKzJOYCGH-HvdrIJeaP3lmJiiLfQwfI25o5SRPvDfrBHFAIhLybWhugrZPPJbRAAfgRC2LOaAEKg5gWfCpBFbA38nruPLe_pCDNZaeIz6FZcVCz6_GljRIMRlW7OLL_CkQcsTzJb1uxluZa9Hru3g5vI8PKr74q0CuR6f9TGPkKv70N08MYR_9jNnCF-UVi6NUSfKsrJNejWCnb2iGN_VTZGQnQU_B8DMDnQ_v02e4EUQBzjOlDGmUjcb3jvT9jvc-BCd4gZfwT1GWNbywcHAAWDIBWDnrUgnlPFgHEEjyUxvUBAjZcOOK2haepw9KfW0PJQiPxf6gJay7LADEq1awVo2UF3-od2u1kfFTfoft8aQHLBNYwcjglFZEhfgt2-aOOZswLUI8UmhZOY_Qtbe49YgcnPG2B7pu7UYS9PUVkvbPMuC7besWpdx5pvQ=w1063-h922-ft"
            />
            <Card.Body>
              <Card.Title className="fw-bold fs-3">Fermin Aguilar</Card.Title>
              <Card.Text className="lead">
                Experto en tecnología en RN. Le encanta hacer reviews de los
                celulares del momento y tienen un gran impacto en sus lectores
                recurrentes. También es el gamer del grupo
              </Card.Text>
              <Card.Text>
                <p className="correo">ferminaguilar5@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 w-100">
          <Card>
            <Card.Img
              variant="top"
              className="w-25"
              src="https://lh3.googleusercontent.com/fife/AAWUweUHQLM4x9jI2WSpts7KIUCeWJHvbjszkRccVyzYwv0-W0UQrkBPhCNhlhNl4O4-6JS0q3ZwviQQc-nFMYULwgE5rJtyq5TGYvjW1tMl13ixnZAxcpYpGfDZ4dYuIWm32cE9txZiOLVFatFbxin-1J9fmDJgyk3SwiM5anoEeLNbnUl-2fDPMuxx3PTELGZy2aXQWsdI7ucPjC3LgX_T9rjb97cYObImRAMHkT6vsEf4BMwIuXinBlbsYRjXB7YORO3zR_7BXlkGprCaYNPURY2q7gP3hniGi8IWiuDUfgb1SK06dSP4rX-iULyBpXUAhIVfkG3Y7kUQgRZCK0sOv87JwBtkgvu44nbLqDeGIhhW9zYwWKyFGzfAYq6O9jeoSWUqkqxgQliWxe7xpIJpaDcJ_cajst_sPAspKqyWHlx04U-VwAwxib05xsagEF0RAypiuqngO5MIJ0lkZ10VuQtY11vvg4nTsiQkbPO8PyjacAm9D63xD5BcSl8vnzFQ_nYxqs0qn3PhCPy9K056vb_8pZQsgpoMINrxkDgEuirbUBu1jj4ngrG9tvv-MVMyGwqbT8AjGnSOaat9I6JUPaODr20I-BgRaRBNrupF3EjdVXTNLpsjzGSpIhSCjK2dq4B_7hCPj1fyHsoweBSGSrGyy7NoQ131Nbqzq_XQTaE5RqeNjsoIc6ttlMoypLNFYfNxMzCJOJo-e18G8_TJo59MqZ-cjqD60w=w1063-h922-ft"
            />
            <Card.Body>
              <Card.Title className="fw-bold fs-3">Ramiro Isa Jara</Card.Title>
              <Card.Text className="lead">
                Amante de la fotografía y con varios cursos profesionales hechos
                de la misma. Siempre proporciona las mejores imágenes para
                nuestra galería.
              </Card.Text>
              <Card.Text>
                <p className="correo">ramiroisajara@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 w-100">
          <Card>
            <Card.Img
              variant="top"
              className="w-25"
              src="https://lh3.googleusercontent.com/fife/AAWUweUfN0pq8PdEIct80jR3ifcwgj9VJOvUpHju45IAo59y_nMXg7jqddkP1wyvdwcybx2FlxbamJd7bDYzQFfs1VA-WX8O0ogFAMEuePnvHWAZJUw5vRLxbumyPt42hobRoJrcbsDV5qF9DVOy69vPbbarIekD-kAvgxFYxTvQmzfAUIpNpWxAR_esnTKFA_609K2dkmf0MNqnJGFOA_vxYyljL0FXjNVNEU9TmqL4Y4mlRDL8vXEA9TQt6LfahdDYsnPi6acWneu7KkaaUk5LXaYPZy8jzSMPgW0zFEMCYRd56u1kDwiDhl8sLvDbYgJkZnTZOU4EODHqEkLQQyAsN37fL73QgvyuKJeCDa36mtTqxfKGTb_z0X76xGvKDZRIEzZvlKcHMj6dJaSAjvo6iSLon5N9WxFSFi1MaJOLDiTljHFzG7Tti4z3kxVvAIQrjV4yw0b485m5RpDDZL9dJOW3EtYdC-XWCcmhFzA5kclZKDS9-YH4dTQY5jI4BiFpdJssCSFJjpVcwC33Z_74Rab-pBMzMhw9BPNtcM4dYI7O4XKf1n-T--l6g6yC-QG6e77E-k_a_698kViscA1a7-MmlLrYk5aES3IPsenA_Ko7TapwewTynaEz0ZMl8z-rCnOJjdLBK2bY7GQMYYBFaJbETk2OCBr8j1GC4OvsK_vwyV-kPtYT8aeUqdlrFNWH2kfvEnOoS4NTgU7BebLhHjXzy5HKx1alKQ=w1063-h922-ft"
            />
            <Card.Body>
              <Card.Title className="fw-bold fs-3">Aimé Saracho</Card.Title>
              <Card.Text className="lead">
                Estudiante de administración de empresas y marketing digital, se
                fascina por la economía asi que este es su rol dentro de Rolling
                News.
              </Card.Text>
              <Card.Text>
                <p className="correo">aimesaracho@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 w-100">
          <Card className="mb-5">
            <Card.Img
              variant="top"
              className="w-25"
              src="https://lh3.googleusercontent.com/fife/AAWUweVUdspniA_o3nWsKJ02k-PVxa2trjuLuqFrnjhHW3k0TEfjiwe5J0WfRzJ7xWiR8P85cCZyMwozjthVbwnwAHKSesaOdU7ERpOVBNX_EiOsFTaG-367DlvM6BKp8np7tmE5IRtRc3t3-4C7oZTlz1Rqv7prIQQZME32pLVVoNMOQexrddiuX6W72ugwX1c-BlBTsOcjT9urBqs9gALfAFjIAuzsnkfGIQyYaaN9xa1yAPO3hp367qeQMK18g4uEFviQAqHY9jGsXy4l8CDWb-WgUDRVzAn4ZP7Wv1xZutcB_oBkmFsk7qEhEpXfQde8XE3OCobO52Z2G3EnBPsX6UIfdGfTKdixm7BrQMON41axpOKuyD2mEh1KPAOWtLSEF8hZ5-ttnPwfDarmP8zPxQ_tRTMUbCjqn69Nccmm6rtZw74d_XghOA-hK9AbCt5B0VTy4o8KL8daeYmDxmLp8uB1y5r0Vfr0J79cvjdP3H4BggboOfPBip1Zie3isPdfStDYdDw_OiItTdPiqMDD8WfU7ZvoR-BqkF-ZCChZVF6pNJw4MMqpDENyM4bb9Kf3OGadNQZ4kiqg59EOb55nr_6FfnztYr26ShQK5ATACusnj7eSRzEXV-YSSx-n55D5Oap5YnEl7B2FbWDUop6rDfsHPu5BrHH6aBZ8RigKl-IisLoXXk_nD5lAUDV7yc-vdrBGx9EfufjqlvFrO1nBNGIPVvbcjHdTHg=w1063-h922-ft"
            />
            <Card.Body>
              <Card.Title className="fw-bold fs-3">Mariano Pujol</Card.Title>
              <Card.Text className="lead">
                Estudió y se recibió de traductor de inglés. Es el encargado de
                investigar y proporcionarnos noticias de todo el mundo.
              </Card.Text>
              <Card.Text>
                <p className="correo">nanopujolinmob@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
