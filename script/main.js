var metaInfo = document.querySelector('head').innerHTML;
var preNodes = [].slice.call(document.querySelectorAll("pre"));
var themeColor = document.querySelector('meta[name="theme-color"]').getAttribute('content');

var metaNodes = metaInfo.split('\n');

for(i = 0; i < metaNodes.length; i++) {
  if(i > 4) {
  	var stripped = metaNodes[i].trim();
    preNodes[0].textContent += stripped + '\n';
  }
}

preNodes.forEach(function(value) {
  value.style.backgroundColor = themeColor;
})
