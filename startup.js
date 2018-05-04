var startup = [
    'Starting MS-DOS',
    '',
    '',
    'HIMEM is testing extended memory...done.',
    '',
    'C:\\SET SOUND=C:\\SB16',
    '',
    'C:\\SET BLASTER=A220 I5 D1 H1 P330 T6',
    '',
    'C:\\SET MIDI=SYNTH:1 MAP:E',
    '',
    'C:\\LH C:\\SB16\\DIAGNOSE /S',
    '',
    '',
    ' Audio card is configured at A220 I5 D1 H1',
    '',
    '',
    'C:\\LH C:\\SB16\\MIXERSET /P /Q',
    '',
    'MODE prepare code page function complete',
    '',
    'MODE select code page function completed',
    '',
    'CuteMouse v1.9 [FreeDOS]',
    'Installed at PS/2 port'
];
var slowPrint = setInterval(function() {
    newLine(startup.shift());
    if(startup.length === 0) clearInterval(slowPrint);
}, 200);