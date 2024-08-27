module.exports = {

  name: "about",

  title: "About",

  description: "",
  version: "v1",

  input:{
    title: "About",
    type: "object",
    properties: {
      details : {
        title : "details",
        type : "boolean",
        description : "Include connector details to the output"
      }

    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{details : true},

  execute: function(input, output){

    let result = {};
    result.name = "Bookstore";
    console.log(input.details);
    if(input.details){
      result.details =  "this is for getting the info of bookstore"
    }
    else{
      result.detail = "testing ";
    }

    output(null, result);
  }

}
