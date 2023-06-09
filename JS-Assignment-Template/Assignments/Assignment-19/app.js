//Assignment 19: DOM

// task / 01:

var mainContent = document.getElementById("main-content");

var childElements = mainContent.children;
for (var i = 0; i < childElements.length; i++) {
  console.log(childElements[i]);
}

var renderElements = document.getElementsByClassName("render");
for (var j = 0; j < renderElements.length; j++) {
  console.log(renderElements[j].innerHTML);
}

var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Eman";

var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");
lastNameInput.value = "Shafiq";
emailInput.value = "emanshafiq78654@gmail.com";

// task / 02:

window.onload = function() {
    
var formContent = document.getElementById("form-content");
var formContentType = formContent.nodeType;
document.getElementById("result1").innerHTML = "Node Type of 'form-content': " + formContentType;

    
var lastName = document.getElementById("lastName");
var lastNameNodeType = lastName.nodeType;
var lastNameChildNodeType = lastName.firstChild.nodeType;
document.getElementById("result2").innerHTML = "Node Type of 'lastName': " + lastNameNodeType + "<br>" +
                                                "Node Type of 'lastName' Child Node: " + lastNameChildNodeType;

    
var lastNameChildNode = lastName.firstChild;
lastNameChildNode.nodeValue = "Updated Last Name: Johnson";

var mainContent = document.getElementById("main-content");
var firstChild = mainContent.firstChild;
var lastChild = mainContent.lastChild;
document.getElementById("result4").innerHTML = "First Child of 'main-content': " + firstChild.nodeName + "<br>" +
                                               "Last Child of 'main-content': " + lastChild.nodeName;

var lastNameNextSibling = lastName.nextSibling;
var lastNamePrevSibling = lastName.previousSibling;
document.getElementById("result5").innerHTML = "Next Sibling of 'lastName': " + lastNameNextSibling.nodeName + "<br>" +
                                               "Previous Sibling of 'lastName': " + lastNamePrevSibling.nodeName;

var email = document.getElementById("email");
var emailParentNode = email.parentNode;
var emailNodeType = email.nodeType;
document.getElementById("result6").innerHTML = "Parent Node of 'email': " + emailParentNode.nodeName + "<br>" +
                                               "Node Type of 'email': " + emailNodeType;
 };







