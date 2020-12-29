
function createMessageHl7(values, signsVitals) {
    var Writer = require('hl7js').Writer;

    const timestamp = new Date();
    var day = timestamp.getDate();
    var month = timestamp.getMonth() + 1;
    var year = timestamp.getFullYear();
    var strData = year.toString() + month.toString() + day.toString();

    var writer = new Writer({
        lineSeparator: '0xD 0xA',
        framePrefix: '',
        frameSuffix: '',
        fieldSeparater: '|',
        componentSeparater: '^',
        fieldRepeatSeparater: '~',
        escapeCharacter: '\\',
        subComponentSeparater: '&'
    });

    writer.addHeader({
        sendingApplication: 'Application WEB',
        sendingFacility: '',
        receivingApplication: 'Usuário',
        receivingFacility: '',
        dateTimeOfMessage: strData,
        security: '',
        messageType: 'ORM^O01',
        messageControlId: '',
        processingId: '',
        versionId: '2.5.1',
        sequenceNo: '',
        continuationPointer: '',
        acceptAckType: '',
        applicationAckType: 'AL',
        countryCode: '',
        characterSet: '',
        messageLanguage: ''
    })

    writer.addSegment('PID', ['', '', '', '', [values.lastName, values.name]])
    writer.addSegment('OBR', ['1', '', '', ['', 'Sinais Vitais', 'LN']]);
    writer.addSegment('DG1', ['', '', '', values.diagnostic]);
    for (var i = 0; i < signsVitals.length; i++) {
        writer.addSegment('OBX',
            [
                i + 1,
                'NM',
                [signsVitals[i].type.toUpperCase()],
                '',
                signsVitals[i].value,
                [signsVitals[i].unit],
                signsVitals[i].range,
                '', '', '', 'F'
            ])
    }
    return writer.toString();
}

export default {
    createMessageHl7,
};