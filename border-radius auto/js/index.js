var inputOne = document.querySelector(".param-one")
var inputTwo = document.querySelector(".param-two")
var inputTree = document.querySelector(".param-tree")
var inputFor = document.querySelector(".param-for")
var update = document.querySelector(".update")
var block =  document.querySelector(".block")


function start(){
	var one = inputOne.value
	var two = inputTwo.value
	var tree = inputTree.value
	var for_ = inputFor.value
	block.style.borderBottomLeftRadius = tree + "px"
	block.style.borderBottomRightRadius = for_ + "px"
	block.style.borderTopRightRadius = two + "px"
	block.style.borderTopLeftRadius = one + "px"
	console.log(one, two, tree, for_)
}

setInterval(start, 100)

