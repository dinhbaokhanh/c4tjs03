let cauHoi = {
    "cau hoi" : "mot cong mot bang may ?",
    "cau tra loi" : {"A" : 1 , "B" : 2 , "C" : 3},
    "Dap an" : "B"
}
alert(cauHoi["cau tra loi"][prompt("nhap A/B/C").toUpperCase()])

