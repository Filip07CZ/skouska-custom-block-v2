namespace GameZip_Alphabet
{

    let display: GAME_ZIP64.ZIP64Display = GAME_ZIP64.createZIP64Display()

    export function Ukaz_A(velikost: number): any 
    {
        switch (velikost) 
        {

            case 1:
            {
                SpojBody(3, 2, 2, 6)
                SpojBody(4, 2, 5, 6)
                SpojBody(3, 4, 4, 4)
                return 4
                break
            }

            case 2:
            {
                SpojBody(3, 1, 1, 6)
                SpojBody(4, 1, 6, 6)
                SpojBody(2, 4, 5, 4)
                return 6
                break
            }

            case 3:
            {
                SpojBody(3, 0, 3, 0)
                SpojBody(4, 0, 6, 7)
                SpojBody(2, 0, 0, 7)
                SpojBody(1, 4, 5, 4)
                return 7
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_B(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(3, 2, 4, 2)
                SpojBody(5, 3, 3, 4)
                SpojBody(5, 5, 3, 6)
                return 4
                break
            }

            case 2:
            {
                SpojBody(1, 6, 1, 1)
                SpojBody(2, 1, 4, 1)
                SpojBody(5, 2, 2, 3)
                SpojBody(5, 4, 5, 4)
                SpojBody(5, 5, 2, 6)
                return 5
                break
            }

            case 3:
            {
                SpojBody(0, 7, 0, 0)
                SpojBody(1, 0, 5, 0)
                SpojBody(6, 1, 6, 2)
                SpojBody(6, 4, 1, 3)
                SpojBody(6, 5, 6, 5)
                SpojBody(6, 6, 1, 7)
                return 7
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_C(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(5, 3, 3, 2)
                SpojBody(2, 3, 2, 5)
                SpojBody(5, 5, 3, 6)
                return 4
                break
            }

            case 2:
            {
                SpojBody(5, 2, 2, 1)
                SpojBody(1, 2, 1, 5)
                SpojBody(5, 5, 2, 6)
                return 5
                break
            }

            case 3:
            {
                SpojBody(5, 0, 6, 1)
                SpojBody(0, 2, 4, 0)
                SpojBody(2, 7, 0, 2)
                SpojBody(3, 7, 4, 7)
                SpojBody(5, 7, 6, 6)
                return 7
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_D(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(3, 2, 3, 2)
                SpojBody(4, 2, 5, 5)
                SpojBody(3, 6, 4, 6)
                return 4
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(2, 6, 4, 6)
                SpojBody(2, 1, 3, 1)
                SpojBody(4, 1, 5, 5)
                return 5
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 7)
                SpojBody(6, 2, 1, 0)
                SpojBody(6, 5, 1, 7)
                SpojBody(6, 3, 6, 4)
                return 7
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_E(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(3, 2, 5, 2)
                SpojBody(3, 4, 4, 4)
                SpojBody(3, 6, 5, 6)
                return 4
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(2, 1, 5, 1)
                SpojBody(2, 3, 4, 3)
                SpojBody(2, 6, 5, 6)
                return 5
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 7)
                SpojBody(1, 0, 6, 0)
                SpojBody(1, 3, 5, 3)
                SpojBody(1, 7, 6, 7)
                return 7
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_F(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(3, 2, 5, 2)
                SpojBody(3, 4, 4, 4)
                return 4
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(2, 1, 5, 1)
                SpojBody(2, 3, 4, 3)
                return 5
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 7)
                SpojBody(1, 0, 6, 0)
                SpojBody(1, 3, 5, 3)
                return 7
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_G(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 3, 2, 5)
                SpojBody(5, 2, 3, 2)
                SpojBody(5, 5, 3, 6)
                SpojBody(5, 4, 4, 4)
                return 4
                break
            }

            case 2:
            {
                SpojBody(1, 2, 1, 5)
                SpojBody(5, 2, 2, 1)
                SpojBody(5, 5, 2, 6)
                SpojBody(5, 4, 3, 4)
                return 5
                break
            }

            case 3:
            {
                SpojBody(6, 1, 2, 0)
                SpojBody(1, 1, 0, 5)
                SpojBody(1, 6, 5, 7)
                SpojBody(6, 6, 6, 4)
                SpojBody(5, 4, 2, 4)
                return 7
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_H(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(3, 4, 4, 4)
                SpojBody(5, 2, 5, 6)
                return 4
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(2, 3, 4, 3)
                SpojBody(5, 1, 5, 6)
                return 5
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 7)
                SpojBody(1, 3, 5, 3)
                SpojBody(6, 0, 6, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_I(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_J(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(4, 6, 5, 2)
                SpojBody(2, 5, 3, 6)
                break
            }

            case 2:
            {
                SpojBody(4, 6, 5, 1)
                SpojBody(1, 5, 3, 6)
                break
            }

            case 3:
            {
                SpojBody(5, 7, 6, 0)
                SpojBody(1, 5, 1, 6)
                SpojBody(2, 7, 4, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_K(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(5, 2, 3, 4)
                SpojBody(5, 6, 3, 4)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(2, 3, 4, 1)
                SpojBody(2, 4, 4, 6)
                break
            }

            case 3:
            {
                SpojBody(1, 0, 1, 7)
                SpojBody(2, 3, 5, 0)
                SpojBody(2, 4, 5, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_L(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(3, 6, 5, 6)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(2, 6, 5, 6)
                break
            }

            case 3:
            {
                SpojBody(1, 0, 1, 7)
                SpojBody(2, 7, 6, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_M(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(3, 3, 4, 4)
                SpojBody(6, 2, 6, 6)
                SpojBody(5, 3, 5, 3)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(2, 2, 3, 3)
                SpojBody(4, 2, 4, 2)
                SpojBody(5, 1, 5, 6)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 7)
                SpojBody(1, 1, 3, 3)
                SpojBody(4, 2, 5, 1)
                SpojBody(6, 0, 6, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_N(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(3, 3, 5, 5)
                SpojBody(6, 2, 6, 6)
                break
            }
            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(2, 2, 5, 5)
                SpojBody(6, 1, 6, 6)
                break
            }
            case 3:
            {
                SpojBody(0, 0, 0, 7)
                SpojBody(1, 1, 6, 6)
                SpojBody(7, 0, 7, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_O(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 3, 4, 2)
                SpojBody(4, 6, 5, 3)
                SpojBody(3, 6, 2, 4)
                break
            }

            case 2:
            {
                SpojBody(1, 2, 4, 1)
                SpojBody(4, 6, 5, 2)
                SpojBody(3, 6, 3, 6)
                SpojBody(2, 6, 1, 3)
                break
            }

            case 3:
            {
                SpojBody(1, 1, 4, 0)
                SpojBody(5, 1, 6, 5)
                SpojBody(5, 6, 2, 7)
                SpojBody(1, 6, 0, 2)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_P(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(5, 3, 3, 2)
                SpojBody(4, 4, 3, 4)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(5, 2, 2, 1)
                SpojBody(5, 3, 2, 4)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 7)
                SpojBody(5, 1, 1, 0)
                SpojBody(5, 2, 1, 3)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_Q(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(4, 4, 6, 6)
                SpojBody(2, 3, 4, 2)
                SpojBody(4, 6, 5, 3)
                SpojBody(3, 6, 2, 4)
                break
            }

            case 2:
            {
                SpojBody(4, 4, 6, 6)
                SpojBody(1, 2, 4, 1)
                SpojBody(4, 6, 5, 2)
                SpojBody(3, 6, 3, 6)
                SpojBody(2, 6, 1, 3)
                break
            }

            case 3:
            {
                SpojBody(4, 5, 6, 7)
                SpojBody(1, 1, 4, 0)
                SpojBody(5, 1, 6, 5)
                SpojBody(5, 6, 2, 7)
                SpojBody(1, 6, 0, 2)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_R(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 6)
                SpojBody(5, 3, 3, 2)
                SpojBody(4, 4, 3, 4)
                SpojBody(4, 5, 5, 6)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 6)
                SpojBody(5, 2, 2, 1)
                SpojBody(5, 3, 2, 4)
                SpojBody(4, 5, 5, 6)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 7)
                SpojBody(5, 1, 1, 0)
                SpojBody(5, 2, 1, 3)
                SpojBody(2, 4, 5, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_S(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 3, 5, 2)
                SpojBody(5, 5, 3, 4)
                SpojBody(2, 6, 4, 6)
                break
            }

            case 2:
            {
                SpojBody(1, 2, 5, 1)
                SpojBody(5, 4, 2, 3)
                SpojBody(5, 5, 1, 6)
                break
            }

            case 3:
            {
                SpojBody(0, 1, 5, 0)
                SpojBody(6, 1, 6, 1)
                SpojBody(0, 2, 5, 3)
                SpojBody(6, 4, 6, 6)
                SpojBody(0, 6, 5, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_T(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 6, 2)
                SpojBody(4, 3, 4, 6)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 5, 1)
                SpojBody(3, 2, 3, 6)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 6, 0)
                SpojBody(3, 1, 3, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_U(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(3, 6, 2, 2)
                SpojBody(4, 6, 5, 2)
                break
            }

            case 2:
            {
                SpojBody(2, 6, 1, 1)
                SpojBody(3, 6, 3, 6)
                SpojBody(4, 6, 5, 1)
                break
            }

            case 3:
            {
                SpojBody(2, 7, 0, 0)
                SpojBody(3, 7, 4, 7)
                SpojBody(5, 6, 6, 0)
                //SpojBody(1, 7, 0, 0)
                //SpojBody(2, 7, 5, 7)
                //SpojBody(5, 7, 6, 0)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_V(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 2, 4)
                SpojBody(3, 5, 4, 6)
                SpojBody(5, 5, 6, 2)
                break
            }

            case 2:
            {
                SpojBody(3, 6, 1, 1)
                SpojBody(4, 5, 5, 1)
                break
            }

            case 3:
            {
                SpojBody(3, 7, 0, 0)
                SpojBody(4, 6, 6, 0)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_W(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(3, 6, 2, 2)
                SpojBody(5, 6, 4, 3)
                SpojBody(6, 2, 6, 5)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 1, 5)
                SpojBody(2, 6, 2, 6)
                SpojBody(3, 5, 3, 2)
                SpojBody(4, 6, 4, 6)
                SpojBody(5, 5, 5, 1)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 0, 6)
                SpojBody(1, 7, 2, 7)
                SpojBody(3, 6, 3, 2)
                SpojBody(4, 7, 5, 7)
                SpojBody(6, 6, 6, 0)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_X(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 6, 6)
                SpojBody(6, 2, 2, 6)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 6, 6)
                SpojBody(6, 1, 1, 6)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 7, 7)
                SpojBody(7, 0, 0, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_Y(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 4, 6)
                SpojBody(6, 2, 5, 3)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 3, 6)
                SpojBody(5, 1, 4, 2)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 3, 3)
                SpojBody(6, 0, 3, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function Ukaz_Z(velikost: number): any 
    {
        switch (velikost) 
        {
            case 1:
            {
                SpojBody(2, 2, 6, 2)
                SpojBody(5, 3, 3, 5)
                SpojBody(2, 6, 6, 6)
                break
            }

            case 2:
            {
                SpojBody(1, 1, 6, 1)
                SpojBody(5, 2, 2, 6)
                SpojBody(1, 6, 6, 6)
                break
            }

            case 3:
            {
                SpojBody(0, 0, 7, 0)
                SpojBody(6, 1, 1, 6)
                SpojBody(0, 7, 7, 7)
                break
            }

            default:
            {
                Ukaz_Error()
            }
        }
    }

    export function SpojBody(xStart: number, yStart: number, xKonec: number, yKonec: number): void 
    {
        while (xStart != xKonec || yStart != yKonec) 
        {
            fGameZip.Bod(xStart, yStart)
            if (xStart != xKonec) 
            {
                if (xStart < xKonec) 
                {
                    xStart++
                }
                else 
                {
                    xStart--
                }

            }
            if (yStart != yKonec) 
            {
                if (yStart < yKonec) 
                {
                    yStart++
                }
                else 
                {
                    yStart--
                }
            }
        }
        fGameZip.Bod(xKonec, yKonec)
    }

    

    export function Ukaz_Error(): void 
    {
        SpojBody(1, 1, 6, 6)
        SpojBody(6, 1, 1, 6)
    }


}