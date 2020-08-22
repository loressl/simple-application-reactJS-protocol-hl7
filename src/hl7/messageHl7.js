

function hl7(name, lastName, diagnostic, spo2, fc){
    const HL7 = require('hl7-standard/index');

    let hl7_teste= new HL7();
    const timestamp= new Date();
    var day= timestamp.getDate();
    var month= timestamp.getMonth() + 1;
    var year= timestamp.getFullYear();
    var strData= year.toString()+month.toString()+day.toString();

    hl7_teste.createSegment('MSH');
    hl7_teste.set('MSH', {
        'MSH.2': '^~\\&',
        'MSH.3': 'Application WEB',
        'MSH.4': '123456',
        'MSH.5': '',
        'MSH.6': '',
        'MSH.7': strData,
        'MSH.8': '',
        'MSH.9': {
          'MSH.9.1': 'ADT',
          'MSH.9.2': 'A08'
        },
        'MSH.10': '',
        'MSH.11': 'T',
        'MSH.12': '2.3'
    });
    hl7_teste.createSegment('PID');
    hl7_teste.set('PID.5', {
        'PID.5.1': lastName,
        'PID.5.2': name
    });
    hl7_teste.createSegment('PV1');
    hl7_teste.set('PV1', {
        'PV1.1': '',
        'PV1.2': 'I',
        'PV1.3': {
          'PV1.3.1': 'Main',
          'PV1.3.2': '802',
          'PV1.3.3': '1'
        },
        'PV1.4': '',
        'PV1.5': '',
        'PV1.6': '',
        'PV1.7': {
          'PV1.7.1': '987654321',
          'PV1.7.2': 'Quaker',
          'PV1.7.3': 'John'
        }
    });
    hl7_teste.set('PV1.44', timestamp);
    hl7_teste.createSegment('IN1');
    hl7_teste.set('IN1', {
        'IN1.1': '1',
        'IN1.2': 'EPO',
        'IN1.3': ['80', '81'],
        'IN1.4': 'ACME',
        'IN1.5': {
          'IN1.5.1': 'PO BOX 432110',
          'IN1.5.2': '',
          'IN1.5.3': 'EL PASO',
          'IN1.5.4': 'TX',
          'IN1.5.5': '79998'
        },
        'IN1.6': '',
        'IN1.7': '',
        'IN1.8': '1500004000001',
        'IN1.9': 'ACME INC',
        'IN1.10': '19',
        'IN1.11': 'ACME'
    });
      
    return hl7_teste.build();

}

export default{
    hl7,
};