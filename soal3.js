var arrData = [
    {
        nama: "Alex",
        umur: 22,
        kelamin: "Wanita",
        pekerjaan: "Dev"
    },
    {
        nama: "Charlee",
        umur: 27,
        kelamin: "Pria",
        pekerjaan: "CTO"
    },
    {
        nama: "Alicia",
        umur: 32,
        kelamin: "Wanita",
        pekerjaan: "Dev"
    },
    {
        nama: "Batios",
        umur: 33,
        kelamin: "Pria",
        pekerjaan: "CEO"
    },
    {
        nama: "Alona",
        umur: 26,
        kelamin: "Wanita",
        pekerjaan: "Dev"
    },
    {
        nama: "Bakhti",
        umur: 38,
        kelamin: "Pria",
        pekerjaan: "PM"
    }
]

var arrPekerjaan = ["All","Dev","CTO","CEO","PM"]

// SHOW ALL DATA FUNCTION
function showAllData(){

    var listData = arrData.map((val)=>{ 
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.pekerjaan}</td>   
        </tr>`
    })

    var listPekerjaan = arrPekerjaan.map((val)=>{
        return `<option value="${val}">${val}</option>`
    })

    document.getElementById("here").innerHTML = listData.join("")
    document.getElementById("job").innerHTML = listPekerjaan.join("")
}

showAllData()

// FUNCTION INPUT DATA

function inputData(){
    var nama = document.getElementById("nama").value
    var umur = document.getElementById("umur").value
    var kelamin = document.getElementsByName("inputGender")
    var job = document.getElementById("jobT").value

    for(var i = 0; i<kelamin.length ; i++){
        if(kelamin[i].checked == true){
            kelamin = kelamin[i].value
        }
    }

    if(job.toLowerCase() == "dev"){
        job = job.charAt(0).toUpperCase()+ job.slice(1).toLowerCase()
    }else if(job.length <= 3) {
        job= job.toUpperCase()
    } else{
        job= job.charAt(0).toUpperCase() + job.slice(1).toLowerCase()
    }

    arrData.push({
        nama: nama,
        umur: umur,
        kelamin: kelamin,
        pekerjaan: job
    })

    if(arrPekerjaan.includes(job) == false){
        arrPekerjaan.push(job)
    }

    
    showAllData()
}


// FUNCTION FILTER NAMA
function filterNama(){
    var search = document.getElementById("search").value.toLowerCase()
    
    var filter = arrData.filter((val)=>{
        return val.nama.toLowerCase().includes(search)
    })    
    
    console.log(filter)

    var list = filter.map((val)=>{
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.pekerjaan}</td>
        </tr>`
    })

    document.getElementById("here").innerHTML = list.join("")
}

// FUNCTION FILTER PERKERJAAN

function filterPekerjaan(){
    var pekerjaan = document.getElementById("job").value.toLowerCase()

    var filter = arrData.filter((val)=>{
        return val.pekerjaan.toLowerCase().includes(pekerjaan)
    })

    if(pekerjaan == "all"){
        showAllData()
    } else{
        var listPekerjaan = filter.map((val)=>{
            return `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.kelamin}</td>
            <td>${val.pekerjaan}</td>
            </tr>`
        })
    }

    document.getElementById('here').innerHTML = listPekerjaan.join('')
}

// FILTER UMUR
function filterUmur(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)

    if(num1 == "" && num2 == ""){
        showAllData()
    } else{
        if(num1 !== 0 && num2 !==0){
            var filterUmur = arrData.filter((val)=>{
                return val.umur >= num1 && val.umur <= num2
            })
        } else if(num1 !== 0){
            var filterUmur = arrData.filter((val)=>{
                return val.umur >= num1
            })
        } else if(num2 !== 0){
            var filterUmur = arrData.filter((val)=>{
                return val.umur <= num2
            })   
        }
        console.log(filterUmur)

        var listUmur = filterUmur.map((val)=>{
            return `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.kelamin}</td>
            <td>${val.pekerjaan}</td>
            </tr>`
        })

        document.getElementById("here").innerHTML = listUmur.join("")
    }
}

// // FILTER GENDER
function gender(){
    var filterGender = document.getElementsByName("filterGender")

    for(var i = 0; i<filterGender.length; i++){
        if(filterGender[i].checked == true){
            filterGender = filterGender[i].value
        }
    }    

    var filter = arrData.filter((val)=>{
        return val.kelamin.includes(filterGender)
    })    
    
    var list = filter.map((val)=>{
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.kelamin}</td>
        <td>${val.pekerjaan}</td>
        </tr>`
    })

    document.getElementById("here").innerHTML = list.join("")

}

//FUNCTION SORT NAMA
function sortNama(){
    arrData.sort((x,y)=>{
        if(x.nama < y.nama){
            return -1
        } else if(x.nama > y.nama){
            return 1
        } else{
            return 0
        }
    })

    showAllData()
}

//FUNCTION SORT UMUR
function sortUmur(){
    arrData.sort((x,y)=>{
        if(x.umur < y.umur){
            return -1
        } else if(x.umur > y.umur){
            return 1
        } else{
            return 0
        }
    })

    showAllData()
}

//FUNCTION SORT KELAMIN
function sortKelamin(){
    arrData.sort((x,y)=>{
        if(x.kelamin < y.kelamin){
            return -1
        } else if(x.kelamin > y.kelamin){
            return 1
        } else{
            return 0
        }
    })

    showAllData()
}

//FUNCTION SORT KELAMIN
function sortPekerjaan(){
    arrData.sort((x,y)=>{
        if(x.pekerjaan < y.pekerjaan){
            return -1
        } else if(x.pekerjaan > y.pekerjaan){
            return 1
        } else{
            return 0
        }
    })

    showAllData()
}