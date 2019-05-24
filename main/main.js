module.exports = function main(str) {
    const mapTop =    [`._.`, `...`, `._.`, `._.`, `...`, `._.`, `._.`, `._.`, `._.`, `._.`]
  	const mapMid =    [`|.|`, `..|`, `._|`, `._|`, `|_|`, `|_.`, `|_.`, `..|`, `|_|`, `|_|`]
  	const mapBottom = [`|_|`, `..|`, `|_.`, `._|`, `..|`, `._|`, `|_|`, `..|`, `|_|`, `..|`]

  	var ansTop = ""
  	var ansMid = ""
  	var ansBottom = ""

  	for (var i = 0; i < str.length; i++) {
  		ansTop += mapTop[str[i]]
  		ansMid += mapMid[str[i]]
  		ansBottom += mapBottom[str[i]]
  		if(i != str.length-1){
  			ansTop += " "
  			ansMid += " "
  			ansBottom += " "
  		}
  	}
  	ansTop += "\n"
  	ansMid += "\n"
  	ansBottom += "\n"
  	return ansTop + ansMid + ansBottom
};