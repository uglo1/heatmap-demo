import { useEffect, VFC } from 'react';
import h337 from 'heatmap.js';
import SoedaMap from './img/soedamap.png';

import './App.css';

const App: VFC = () => {
  useEffect(() => {
    const config = {
      container: document.querySelector('.App') as HTMLElement,
      radius: 100,
      maxOpacity: 0.5,
      minOpacity: 0,
      blur: 0.75,
    };

    const heatmapInstance = h337.create(config);
    const max = 100;
    const min = 0;
    const width = 840;
    const height = 400;

    const points = [
      {
        x: 0.2 * width,
        y: 0.2 * height,
        value: 100,
      },
      {
        x: 0.8 * width,
        y: 0.4 * height,
        value: Math.floor(Math.random() * 100),
      },
    ];

    heatmapInstance.addData(points);
    heatmapInstance.setDataMax(max);
    heatmapInstance.setDataMin(min);
  });

  return (
    <div className="App">
      <div>
        <img src={SoedaMap} alt="SoedaMapImage" />
      </div>
    </div>
  );
};

export default App;
