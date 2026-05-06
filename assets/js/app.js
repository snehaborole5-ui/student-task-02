const cl = console.log;

const stdContainer = document.getElementById('stdContainer')
const fnameControl = document.getElementById('fname')
const lnameControl = document.getElementById('lname')
const emailContainer = document.getElementById('email')
const conatactContainer = document.getElementById('contact')
const updateStdBtn = document.getElementById('updateStdBtn')



let stdArr = [
    {
        fname: 'Jhon',
        lname: 'Doe',
        email: 'jd@gmail.com',
        contact: '1234567890',
        stdId: '6edf782c-2b0d-4fc8-b013-5468a45891fb'
    },
    {
        fname: 'May',
        lname: 'Doe',
        email: 'may@gmail.com',
        contact: '7895642310',
        stdId: '6789789789c-2b0d-4fc8-b013-5468a45891fb'
    },
    {
        fname: 'June',
        lname: 'Doe',
        email: 'june@gmail.com',
        contact: '9876542310',
        stdId: 'ee688e59-7c9e-40dd-9b92-2b69db8f9db7'
    
    }
]

function createTrs(arr){
    let result = '';
    arr.forEach((std,i) => {
        // cl(std)
        result += `
                        <tr id="${std.stdId}">
                                        <td>${i + 1}</td>
                                        <td>${std.fname} ${std.lname}</td>
                                        <td>${std.email}</td>
                                        <td>${std.contact}</td>
                                        <td>
                                            <i role="button" class="fa-solid fa-pen-to-square fa-2x text-success"></i>
                                        </td>
                                        <td>
                                            <i role="button" class="fa-solid fa-trash fa-2x text-danger"></i>
                                        </td>
                                    </tr>
        `

    })

    stdContainer.innerHTML = result;
}
createTrs(stdArr)

function onStdRemove(ele){
    let REMOVE_ID = ele.closest('tr').id 
    let getConfirm = confirm(`Are you sure,you want to remove th student with ID ${REMOVE_ID} ?`)
        cl(getConfirm)
        if(getConfirm){
                 let getIndex = stdArr.findIndex(std => {
        return std.stdId === REMOVE_ID
    })
     let REMOVED_STD = stdArr.splice(getIndex,1)
    ele.closest('tr').remove()
    let allTrs = [...document.querySelectorAll('#stdContainer tr')]
    allTrs.forEach((tr,i) =>{
        tr.firstElementChild.innerText = i + 1

    })
    Swal.fire({
        title:`The student ${REMOVED_STD[0].fname} ${REMOVED_STD[0].lname} removed successfully!!!`,
        icon:'success',
        timer:3000
    })

    if(stdArr.length == 0){
        stdTbale.classList.add('d-none')
        noStdMsg.classList.remove('d-none')
    }

}
        }
 let EDIT_ID
 function onStdEdit(ele){
     EDIT_ID = ele.closest('tr').id
    let EDIT_OBJ = stdArr.find(std =>{
        return std.stdId === EDIT_ID
    })

    fnameControl.value = EDIT_OBJ.fname
    lnameControl.value = EDIT_OBJ.lname
    emailControl.value = EDIT_OBJ.email
    contactControl.value = EDIT_OBJ.contact

    addStdBtn.classList.add('d-none')
    updateStdBtn.classList.remove('d-none')
 }   

function onStdUpdate(e){
    // update id
    let UPDATE_ID = EDIT_ID
    let UPDTAE_OBJ = {
        fname: fnameControl.value,
        lname: lnameControl.value,
        email: emailControl.value,
        contact: contactControl.value,
        stdId: UPDATE_ID
    }
    stdForm.reset()
    let getIndex = stdArr.findIndex(std => std.stdId === UPDATE_ID)
    stdArr[getIndex] = UPDTAE_OBJ

    let tr = document.getElementById(UPDATE_ID).children
    tr[1].innerText = `${UPDTAE_OBJ.fname} ${UPDTAE_OBJ.lname}`
    tr[2].innerText = `${UPDTAE_OBJ.email} `
    tr[3].innerText = `${UPDTAE_OBJ.contact} `

    addStdBtn.classList.remove('d-none')
    updateStdBtn.classList.add('d-none')

    Swal.fire({
        title: `The student ${UPDTAE_OBJ.fname} ${UPDTAE_OBJ.lname} updated successfully!!!`,
        icon: 'success',
        timer: 3000
    })

    
    
}

stdForm.addEventListener('submit',onStdSubmit)
updateStdBtn.addEventListener('click',onStdUpdate)

