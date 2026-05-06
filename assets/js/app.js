const cl = console.log;

const stdContainer = document.getElementById('stdContainer')
const fnameControl = document.getElementById('fname')
const lnameControl = document.getElementById('lname')
const emailContainer = document.getElementById('email')
const conatactContainer = document.getElementById('contact')




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

