
function createMessageHl7(values,signsVitals){
    const HL7 = require('hl7-standard/index');

    let hl7= new HL7();
    const timestamp= new Date();
    var day= timestamp.getDate();
    var month= timestamp.getMonth() + 1;
    var year= timestamp.getFullYear();
    var strData= year.toString()+month.toString()+day.toString();

    hl7.createSegment('MSH');
    hl7.set('MSH', {
        'MSH.2': '^~\\&',
        'MSH.3': 'Application WEB',
        'MSH.4': '',
        'MSH.5': '',
        'MSH.6': 'Usuário',
        'MSH.7': strData,
        'MSH.8': '',
        'MSH.9': {
          'MSH.9.1': 'ORM',
          'MSH.9.2': 'O01'
        },
        'MSH.10': '',
        'MSH.11': '',
        'MSH.12': '2.5.1',
        'MSH.13': '',
        'MSH.14': '',
        'MSH.15': '',
        'MSH.16':'AL'
    });
    hl7.createSegment('PID');
    hl7.set('PID.5', {
        'PID.5.1': values.lastName,
        'PID.5.2': values.name
    });
    hl7.createSegment('OBR');
    hl7.set('OBR',{
        'OBR.1':'1',
        'OBR.2':'',
        'OBR.4':{
            'OBR.4.2':'Sinais Vitais',
            'OBR.4.3':'LN'
        }
    });
    hl7.createSegment('DG1');
    hl7.set('DG1',{
        'DG1.4':values.diagnostic
    });
    for(var i=0; i < signsVitals.length; i++){
        if(i === 0){
            hl7.createSegment('OBX');
            hl7.set('OBX',{
                'OBX.1':'1',
                'OBX.2':'NM',
                'OBX.3':{
                    'OBX.3.2':signsVitals[i].type.toUpperCase()
                },
                'OBX.5':signsVitals[i].value,
                'OBX.6':{
                    'OBX.6.1':signsVitals[i].unit
                },
                'OBX.7': signsVitals[i].range,
                'OBX.11':'F'
            }); 
        }else{
            let hl7_obx= hl7.createSegmentAfter('OBX', hl7.getSegment('OBX'));
            hl7_obx.set('OBX',{
                'OBX.1':'2',
                'OBX.2':'NM',
                'OBX.3':{
                    'OBX.3.2':signsVitals[i].type.toUpperCase()
                },
                'OBX.5':signsVitals[i].value,
                'OBX.6':{
                    'OBX.6.1':signsVitals[i].unit
                },
                'OBX.7':signsVitals[i].range,
                'OBX.11':'F'
            });  
        }
    }
    return hl7.build();
}

export default{
    createMessageHl7,
};