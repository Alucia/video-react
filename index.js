import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'

const container = document.getElementById('app')

//ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>Hola Estudiante!</h1>
render(<Playlist data={data} />, app);
