

// POST FUNCTIONS 
const name = document.querySelector("#post_name");
const grade = document.querySelector("#post_grade");
const submit = document.querySelector("#submit")


submit.addEventListener("click", function(event) {
  event.preventDefault();
  axios
    .post("https://42l8d2ncnb.execute-api.us-west-2.amazonaws.com/dev/Skipper_my_Son_2", {

      name: name.value,
      grade: grade.value
    })
    .then(function(response){
      console.log('response', response);
    })
    .catch(function(error){
      console.log('error', error);
    })
})


// DELETE FUNCTIONS 
const id = document.querySelector("#delete_id");
const submit2 = document.querySelector("#submit2");


submit2.addEventListener("click", function(event) {
  console.log('id.value', id.value);
  event.preventDefault();
  axios
    .delete("https://42l8d2ncnb.execute-api.us-west-2.amazonaws.com/dev/Skipper_my_son_3", {
      data: {
        id: id.value
      }
    })
    .then(function(response){
      console.log('response', response);
    })
    .catch(function(error){
      console.log('error', error);
    })
})



//PUT FUNCTION
const put_name = document.querySelector("#put_name");
const put_grade = document.querySelector("#put_grade");
const put_submit = document.querySelector("#put_submit")
const put_id = document.querySelector("#put_id")

put_submit.addEventListener("click", function(event) {
  event.preventDefault();
  axios
    .put("https://42l8d2ncnb.execute-api.us-west-2.amazonaws.com/dev/Skipper_my_Son_4", {

      name: put_name.value,
      grade: put_grade.value,
      id: put_id.value
    })
    .then(function(response){
      console.log('response', response);
    })
    .catch(function(error){
      console.log('error', error);
    })
})

