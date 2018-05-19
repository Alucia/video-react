import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const container = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>Hola Estudiante!</h1>
render(<Media title="¿Qué es responsive design?" author="AnaCarhuaz" image="./images/covers/responsive.jpg" />, app);