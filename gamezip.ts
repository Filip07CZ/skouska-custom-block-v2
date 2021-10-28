//% weight=99 color="#70C934" icon="\uf11b"
namespace fGameZip 
{
    let display: GAME_ZIP64.ZIP64Display = GAME_ZIP64.createZIP64Display()
    let velikost_pismena = 1
    let pozice_x = 0
    let pozice_xx = 0
    let pozice_y = 0
    let text = ""
    

    //%block
    export function NastavVelikostPisma(velikost:number):void
    {
        velikost_pismena = velikost
    }

    //%block
    export function UkazVelikostPisma(): any
    {
      return velikost_pismena  
    }

    //% block="Startování"
    export function Start(): void 
    {
        
    }
    
    /**
    * @param x describe parameter here, eg: "0"
    * @param y describe parameter here, eg: "0"
    */
    //% block="nastav barvu x:$x y:$y na $barva"
    //% x.min=0 x.max=7 y.min=0 y.max=7
    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1
    export function Ukaz(x: number, y: number, barva: ZipLedColors): void
    {
        display.setMatrixColor(x, y, GAME_ZIP64.colors(barva))
        display.show()
    }
    
    /**
    * @param Text describe parameter here, eg: "Ahoj"
    * @param velikost describe parameter here, eg: "1"
    * @param rychlost describe parameter here, eg: "3"
    */
    //% block="Ukaž text:$Text s velkosti:$velikost a rychlosti:$rychlost"
    export function ShowScrollText(Text: string, velikost: number, rychlost: number):void
    {
        pozice_x = 4
        let delka = ShowTextLenght(Text, velikost)
        while (pozice_x >= -1*delka)
        {
            pause(rychlost *100)
            PosunX( - 1)
            
        }
    }

    /**
    * @param Text describe parameter here, eg: "Ahoj"
    * @param velikost describe parameter here, eg: "1"
    */
    //% block="ukaz pismeno/znak:$Text s velkosti:$velikost"
    export function ShowText(Text:string, velikost:number): void
    {
        ShowTextLenght(Text, velikost)
    }

    function ShowTextLenght(Text: string, velikost: number): any
    {
        let sirka = 0
        let delka = 0
        text = Text
        pozice_xx = 0
        display.clear()
        NastavVelikostPisma(velikost)
        for (let znak of Text)
        {
            if (pozice_x + pozice_xx >= -7 && pozice_x + pozice_xx <= 7)
            {            
                switch(znak)
                {
                    case "A", "a":
                    {                    
                        sirka = GameZip_Alphabet.Ukaz_A(velikost)
                        break
                    }

                    case "B", "b":
                    {
                        sirka = GameZip_Alphabet.Ukaz_B(velikost)
                        break
                    }

                    case "C", "c":
                    {
                        sirka = GameZip_Alphabet.Ukaz_C(velikost)
                        break
                    }

                    case "D", "d":
                    {
                        sirka = GameZip_Alphabet.Ukaz_D(velikost)
                        break
                    }

                    case "E", "e":
                    {
                        sirka = GameZip_Alphabet.Ukaz_E(velikost)
                        break
                    }

                    case "F", "f":
                    {
                        sirka = GameZip_Alphabet.Ukaz_F(velikost)
                        break
                    }

                    case "G", "g":
                    {
                        sirka = GameZip_Alphabet.Ukaz_G(velikost)
                        break
                    }

                    case "H", "h":
                    {
                        sirka = GameZip_Alphabet.Ukaz_H(velikost)
                        break
                    }

                    case "I", "i":
                    {
                        sirka = GameZip_Alphabet.Ukaz_I(velikost)
                        break
                    }

                    case "J", "j":
                    {
                        sirka = GameZip_Alphabet.Ukaz_J(velikost)
                        break
                    }

                    case "K", "k":
                    {
                        sirka = GameZip_Alphabet.Ukaz_K(velikost)
                        break
                    }

                    case "L", "l":
                    {
                        sirka = GameZip_Alphabet.Ukaz_L(velikost)
                        break
                    }

                    case "M", "m":
                    {
                        sirka = GameZip_Alphabet.Ukaz_M(velikost)
                        break
                    }

                    case "N", "n":
                    {
                        sirka = GameZip_Alphabet.Ukaz_N(velikost)
                        break
                    }

                    case "O", "o":
                    {
                        sirka = GameZip_Alphabet.Ukaz_O(velikost)
                        break
                    }

                    case "P", "p":
                    {
                        sirka = GameZip_Alphabet.Ukaz_P(velikost)
                        break
                    }

                    case "Q", "q":
                    {
                        sirka = GameZip_Alphabet.Ukaz_Q(velikost)
                        break
                    }

                    case "R", "r":
                    {
                        sirka = GameZip_Alphabet.Ukaz_R(velikost)
                        break
                    }

                    case "S", "s":
                    {
                        sirka = GameZip_Alphabet.Ukaz_S(velikost)
                        break
                    }

                    case "T", "t":
                    {
                        sirka = GameZip_Alphabet.Ukaz_T(velikost)
                        break
                    }

                    case "U", "u":
                    {
                        sirka = GameZip_Alphabet.Ukaz_U(velikost)
                        break
                    }

                    case "V", "v":
                    {
                        sirka = GameZip_Alphabet.Ukaz_V(velikost)
                        break
                    }

                    case "W", "w":
                    {
                        sirka = GameZip_Alphabet.Ukaz_W(velikost)
                        break
                    }

                    case "X", "x":
                    {
                        sirka = GameZip_Alphabet.Ukaz_X(velikost)
                        break
                    }

                    case "Y", "y":
                    {
                        sirka = GameZip_Alphabet.Ukaz_Y(velikost)
                        break
                    }

                    case "Z", "z":
                    {
                        sirka = GameZip_Alphabet.Ukaz_Z(velikost)
                        break
                    }
                }
            }
            switch (velikost)
            {
                case 1:
                {
                    sirka = 5
                    break
                }

                case 2:
                {
                    sirka = 5
                }

                case 3:
                {
                    sirka = 7
                }
            }
            delka += sirka + 2
            pozice_xx += sirka + 2
        }
        display.show()
        return delka
    }

    export function Show(): void
    {
        display.show()
    }
    
    /**
     * @param brightness describe parameter here, eg:"20"
     */
    //% block="Nastav jas na:$brightness"
    export function Jas(brightness: number): void
    {
        display.setBrightness(brightness)
        display.show()
    }

    //%block="Vymaž display"
    export function VymazDisplay()
    {
        display.clear()
        display.show()
    }

    /**
   *@param smer describe here parameter, eg: "1"
   */
    //%block
    export function PosunX (smer:number):void 
    {
        pozice_x += smer
        ShowText(text, velikost_pismena)
    }

    /**
    *@param smer describe here parameter, eg: "1"
    */
    //%block
    export function PosunY (smer: number): void {
        pozice_y += smer
        ShowText(text, velikost_pismena)
    }

    //%block="Spoj body x:$xStart y:$yStart s x:$xKonec y:$yKonec"
    //% inlineInputMode=inline
    //% xStart.min=1 xStart.max=3 yStart.min=1 yStart.max=3 xKonec.min=1 xKonec.max=3 yKonec.min=1 yKonec.max=3
    //% xStart.fieldOptions.precision=1 yStart.fieldOptions.precision=1 xKonec.fieldOptions.precision=1 yKonec.fieldOptions.precision=1
    export function SpojBody (xStart:number, yStart:number, xKonec:number, yKonec:number ): void
    {
        GameZip_Alphabet.SpojBody(xStart, yStart, xKonec, yKonec)
        display.show()
    }

    export function Bod(x: number, y: number): void 
    {
        display.setMatrixColor(x + pozice_x + pozice_xx, y + pozice_y, GAME_ZIP64.colors(ZipLedColors.Red))
    }

    export function SmazBod(x: number, y:number): void
    {
        display.setMatrixColor(x, y, 0)
        display.show()
    }

    export function UkazBod(x: number, y: number): void {
        display.setMatrixColor(x, y, GAME_ZIP64.colors(ZipLedColors.Red))
        display.show()
    }

    /**
    * @param leds the pattern of LED to turn on/off
    * @param interval time in milliseconds to pause after drawing
    */
    //% block="zobraz ledky:"
    //% imageLiteral=1
    //% imageLiteralColumns=8
    //% imageLiteralRows=8
    //% shim=images::createImage
    export function Obrazek(ledka: string): Image
    {
        const im = <Image><any>ledka;
        return im

    }


    //% block="Ukaz $image"
    export function ShowImage(image: Image): void
    {
        for (let column = 0; column < 8; column++) 
        {
            for (let row = 0; row < 8; row++) 
            {
                if (image.pixel(column, row)) 
                {
                    // setLed(column+1,State.High)
                    UkazBod(column, row)
                    //led.plot(column, row)
                }
                else 
                {
                    //setLed(column+1,State.Low)
                    SmazBod(column, row)
                }
            }
        }
        display.show()
    }

    //% imageLiteral=1
    //% imageLiteralColumns=8
    //% imageLiteralRows=8
    //% block="ShowImageV2"
    export function ShowImageV2 (data:string): void
    {
        basic.showString(data)
    }



}
