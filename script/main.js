var metaInfo = document.querySelector('head').innerHTML;
var myPre = document.querySelector('pre');

var metaNodes = metaInfo.split('\n');

for(i = 0; i < metaNodes.length; i++) {
  if(i > 4) {
  	var stripped = metaNodes[i].trim();
    myPre.textContent += stripped + '\n';
  }
}