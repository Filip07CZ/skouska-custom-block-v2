GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    fGameZip.PosunY(1)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    fGameZip.PosunX(-1)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    fGameZip.PosunY(-1)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    fGameZip.PosunX(1)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Click, function () {
    fGameZip.NastavVelikostPisma(fGameZip.UkazVelikostPisma() + 1)
})
fGameZip.Jas(12)
fGameZip.Start()
let pismeno = "W"
let maz_display = 1
fGameZip.ShowText(pismeno, fGameZip.UkazVelikostPisma())
