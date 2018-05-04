var cursorType = 'underscore';
var systemPrompt = 'C:\\';
var fuzzy = true;

var terminal = document.getElementById('terminal');
var prompt = document.getElementById('prompt');
var promptWrapper = document.getElementById('promptWrapper');
var promptCopy = document.getElementById('promptCopy');

var setFocus = function() {
    prompt.focus();
}

var setCopy = function(value) {
    promptCopy.innerHTML = value;
    promptCopy.innerHTML+='<span id="cursor-' + cursorType + '"></span>';
};

var setCopy = function(value) {
    promptCopy.innerHTML = systemPrompt + value;
    promptCopy.innerHTML+='<span id="cursor-' + cursorType + '"></span>';
};

var newLine = function(str) {
    terminal.innerHTML += '<br>' + str;
    window.scrollTo(0,document.body.scrollHeight);
};

document.addEventListener('click', function() {setFocus() });
prompt.addEventListener('keydown', function() { setCopy(this.value); });
prompt.addEventListener('keyup', function() { setCopy(this.value); });
prompt.addEventListener('keypress', function(e) { 
    if(e.keyCode === 13) {
        newLine(this.value);
        this.value = '';
    }
});

if(fuzzy) { document.body.className = 'fuzzy'; }
setCopy('');
setFocus();