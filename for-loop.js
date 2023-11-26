const maters = [
    {matter: 'hello', shedule: true},
    {matter: 'hello2', shedule: false},
    {matter: 'hello4', shedule: true},
    {matter: 'hello3', shedule: false},
    {matter: 'hello5', shedule: false},
    {matter: 'hello6', shedule: true},
    {matter: 'hello7', shedule: false},
]
for(let a of maters){
    // a
    if(a.shedule === false ){
        console.log(a)
    }
}

for(let a of maters){
    // a
    if(a.shedule === true ){
        console.log(a)
    }
}
// 印出所有已完成

// 印出所有未完成



// <!-- <b ><%= c.matter %> - </b>
// <input type="radio" id="okCheckbox" name="okCheckbox" value="isChecked">
// <label for="okCheckbox" class="text-success align-middle">完成</label>
// <div class="btn-group " role="group" aria-label="Basic example"> -->
// <!-- <form method="POST" action="/?_method=PATCH">
//         <input type="hidden" name="_method" value="PATCH">
//         <input type="hidden" name="matter" value="<%= c.matter %>">
//         <input type="text" name="newCommentText" value="<%= c.matter %>">
//         <button class="rounded-pill text-success align-middle " type="submit">修改</button>
//     </form>
//     <form method="POST" action="/?_method=DELETE">
//         <input type="hidden" name="_method" value="DELETE">
//         <input type="hidden" name="matter" value="<%= c.matter %>">
//         <button class="rounded-pill text-danger align-middle" type="submit" >刪除</button>
//     </form> --


// <!-- <div class="btn-group " role="group" aria-label="Basic example"> --