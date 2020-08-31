import ImgSPO2 from '../assets/images/spo2.jpg';
import ImgFC from '../assets/images/fc.jpg';

const signsVitalsConfig =[
    {
        type: 'spo2',
        value: '0',
        unit: '%',
        range: '0-100',
        image: ImgSPO2
    },
    {
        type: 'fc',
        value: '0',
        unit: 'bpm',
        range: '0-220',
        image: ImgFC
    }
]

export default signsVitalsConfig;