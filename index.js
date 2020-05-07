let ob = {};
let ob1 = { "ten":"dbk" }
let ob2 = {
    "ten" : "Dinh Bao Khanh",
    "lop" : "10",
    "tuoi" : "15"
}
let pokemon = {
    "ten" : "pikachu",
    "dac diem" : "mau vang soc den",
    "he" : "electricity"
}
let cauHoi = {
    "cau hoi" : "mot cong mot bang may ?",
    "cau tra loi" : {"A" : 1 , "B" : 2 , "C" : 3},
    "Dap an" : "B"
}

alert(ob2["ten"][prompt("typing").toUpperCase()])


let ob2 = {
    "ten" : prompt("Ten"),
    "lop" : "10",
    "tuoi" : "15"
}
alert(ob2.ten)

let cauHoi = {
    "cau hoi" : "mot cong mot bang may ?",
    "cau tra loi" : {"A" : 1 , "B" : 2 , "C" : 3},
    "Dap an" : "B"
}
alert(cauHoi["cau tra loi"][prompt("nhap A/B/C").toUpperCase()])


